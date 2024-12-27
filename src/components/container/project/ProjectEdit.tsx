import { useEffect, useState } from 'react'
import { FormProvider } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { ErrorMessage } from '@/components/view/ErrorMessage'
import { ThumbIcon } from '@/components/view/icons/ActiveIcon'
import { InputGroup } from '@/components/view/inputGroup'
import { Loading } from '@/components/view/Loading'
import { ModalEdit } from '@/components/view/modal/Modal'
import { SubHeaderWithoutIcon } from '@/components/view/SubHeader'
import { useBoolean } from '@/hooks/useBoolean'
import { useProjectForm } from '@/hooks/useForms'
import { useProjectData, useProjectUpdate } from '@/services/useProjectService'
import type { ProjectDetailType } from '@/types/project'
import { formatDate } from '@/utils/formatDate'

const inputFields = [
  { section: 'painstakingPart', label: '공들인 부분', placeholder: '공들인 부분을 입력해주세요.' },
  { section: 'likingPart', label: '좋았던 부분', placeholder: '좋았던 부분을 입력해주세요.' },
  {
    section: 'disappointingPart',
    label: '아쉬운 부분',
    placeholder: '아쉬운 부분을 입력해주세요.',
  },
  {
    section: 'reasonOfStack',
    label: '사용한 기술들을 선택한 이유',
    placeholder: '기술들을 선택한 이유를 입력해주세요.',
  },
]

export const ProjectEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const formMethod = useProjectForm()

  const { handleSubmit, setValue, getValues } = formMethod
  const { projectData, loading, error } = useProjectData(id)
  const { updateProject, error: updateError } = useProjectUpdate()

  const [isModalOpen, openModal, closeModal] = useBoolean(false)
  const [satisfaction, setSatisfaction] = useState<number>(0)

  useEffect(() => {
    if (projectData) {
      Object.entries(projectData).forEach(([key, value]) => {
        if (key !== 'id') {
          setValue(key as keyof Omit<ProjectDetailType, 'id'>, value)
        }
      })
      setSatisfaction(projectData.satisfaction)
    }
  }, [projectData, setValue])

  const handleFormSubmit = async () => {
    if (!id) return
    const formData = getValues()
    const success = await updateProject(id, formData)
    if (success) {
      openModal()
    }
  }

  const handleModalConfirm = () => {
    closeModal()
    navigate(`/project/detail/${id}`, { replace: true })
  }

  const handleSatisfactionChange = (value: number) => {
    setSatisfaction(value)
    setValue('satisfaction', value)
  }

  if (loading) {
    return <Loading />
  }

  if (error || updateError) {
    return <ErrorMessage>{(error || updateError)?.message}</ErrorMessage>
  }

  return (
    <>
      <SubHeaderWithoutIcon
        type="complete"
        title="프로젝트 수정"
        onClickText={handleSubmit(handleFormSubmit)}
      />

      <main className="scroll mx-4 py-5">
        <FormProvider {...formMethod}>
          <form className="flex-column gap-5">
            <InputGroup>
              <InputGroup.Label section="title">프로젝트 이름</InputGroup.Label>
              <InputGroup.Input section="title" placeholder="프로젝트 이름을 입력해주세요." />
            </InputGroup>

            <InputGroup>
              <InputGroup.Label section="description">한줄 설명</InputGroup.Label>
              <InputGroup.Input section="description" placeholder="한줄 설명을 입력해주세요." />
            </InputGroup>

            <InputGroup>
              <InputGroup.Label section="startDate">프로젝트 기간</InputGroup.Label>
              <div className="flex gap-[10px]">
                <InputGroup.Input
                  section="startDate"
                  placeholder={formatDate(new Date(), 'compact')}
                />
                <InputGroup.Input
                  section="finishDate"
                  placeholder={formatDate(new Date(), 'compact')}
                />
              </div>
            </InputGroup>

            {inputFields.map(({ section, label, placeholder }) => (
              <InputGroup key={section}>
                <InputGroup.Label section={section}>{label}</InputGroup.Label>
                <InputGroup.TextArea section={section} placeholder={placeholder} />
              </InputGroup>
            ))}

            <InputGroup>
              <div className="flex-between items-end">
                <InputGroup.Label section="tag">만족도</InputGroup.Label>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleSatisfactionChange(value)}
                      type="button"
                    >
                      <ThumbIcon active={value <= satisfaction} />
                    </button>
                  ))}
                </div>
              </div>
            </InputGroup>
          </form>
        </FormProvider>
      </main>

      {isModalOpen && (
        <ModalEdit isOpen={isModalOpen} closeModal={closeModal} onClick={handleModalConfirm} />
      )}
    </>
  )
}
