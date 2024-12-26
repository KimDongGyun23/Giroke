import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'

import { auth, db } from '@/firebase/firebase'
import type { TermItemType, TermTagsType } from '@/types/term'
import { TERM_TAGS } from '@/utils/constants'

import { Tag } from '../view/Tag'

import { TermItem } from './TermItem'

export const BookmarkTerm = () => {
  const [activeTag, setActiveTag] = useState<TermTagsType>(TERM_TAGS[0])
  const [bookmarkedTerms, setBookmarkedTerms] = useState<TermItemType[]>([])
  const [userId, setUserId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid)
      } else {
        setUserId(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const fetchBookmarkedTerms = async () => {
      if (!userId) return

      setLoading(true)
      try {
        const termsRef = collection(db, 'users', userId, 'terms')
        let termsQuery = query(termsRef, where('isBookmarked', '==', true))

        if (activeTag !== '전체') {
          termsQuery = query(termsQuery, where('tag', '==', activeTag))
        }

        const querySnapshot = await getDocs(termsQuery)
        const fetchedTerms = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as TermItemType[]

        setBookmarkedTerms(fetchedTerms)
      } catch (error) {
        console.error('Error fetching bookmarked terms:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBookmarkedTerms()
  }, [activeTag, userId])

  const handleTagClick = (tag: TermTagsType) => setActiveTag(tag)

  return (
    <>
      <div className="scroll flex w-fit shrink-0 gap-2 overflow-x-scroll py-3">
        {TERM_TAGS.map((tag) => (
          <Tag key={tag} secondary={activeTag !== tag} onClick={() => handleTagClick(tag)}>
            {tag}
          </Tag>
        ))}
      </div>

      <section className="flex-column scroll">
        {loading ? (
          <p>Loading...</p>
        ) : bookmarkedTerms.length > 0 ? (
          bookmarkedTerms.map((term) => <TermItem key={term.id} term={term} />)
        ) : (
          <p>No bookmarked terms found.</p>
        )}
      </section>
    </>
  )
}
