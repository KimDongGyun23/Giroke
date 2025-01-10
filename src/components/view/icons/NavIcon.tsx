import type { ActiveIconProps } from '@/types/common'

const activeColor = (isActive: boolean) => (isActive ? '#595551' : '#D2D0CD')

export const NavHomeIcon = ({ active = false }: ActiveIconProps) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24.2966 11.5774L15.5466 2.82736C15.1364 2.41727 14.5801 2.18689 14 2.18689C13.42 2.18689 12.8637 2.41727 12.4534 2.82736L3.70345 11.5774C3.49949 11.7801 3.33782 12.0212 3.22779 12.2869C3.11777 12.5526 3.06159 12.8375 3.06251 13.125V23.625C3.06251 23.9731 3.20079 24.3069 3.44693 24.5531C3.69308 24.7992 4.02691 24.9375 4.37501 24.9375H11.375C11.7231 24.9375 12.0569 24.7992 12.3031 24.5531C12.5492 24.3069 12.6875 23.9731 12.6875 23.625V17.9375H15.3125V23.625C15.3125 23.9731 15.4508 24.3069 15.6969 24.5531C15.9431 24.7992 16.2769 24.9375 16.625 24.9375H23.625C23.9731 24.9375 24.3069 24.7992 24.5531 24.5531C24.7992 24.3069 24.9375 23.9731 24.9375 23.625V13.125C24.9384 12.8375 24.8823 12.5526 24.7722 12.2869C24.6622 12.0212 24.5005 11.7801 24.2966 11.5774ZM22.3125 22.3125H17.9375V16.625C17.9375 16.2769 17.7992 15.9431 17.5531 15.6969C17.3069 15.4508 16.9731 15.3125 16.625 15.3125H11.375C11.0269 15.3125 10.6931 15.4508 10.4469 15.6969C10.2008 15.9431 10.0625 16.2769 10.0625 16.625V22.3125H5.68751V13.3055L14 4.99299L22.3125 13.3055V22.3125Z"
      fill={activeColor(active)}
    />
  </svg>
)

export const NavRecordIcon = ({ active = false }: ActiveIconProps) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25.1727 7.71533L20.2847 2.82846C19.8745 2.41837 19.3182 2.18799 18.7381 2.18799C18.1581 2.18799 17.6018 2.41837 17.1916 2.82846L3.70345 16.3155C3.49962 16.5181 3.33802 16.7591 3.228 17.0245C3.11798 17.29 3.06173 17.5747 3.06251 17.8621V22.75C3.06251 23.3302 3.29298 23.8866 3.70321 24.2968C4.11345 24.7071 4.66985 24.9375 5.25001 24.9375H23.625C23.9731 24.9375 24.3069 24.7992 24.5531 24.5531C24.7992 24.307 24.9375 23.9731 24.9375 23.625C24.9375 23.2769 24.7992 22.9431 24.5531 22.6969C24.3069 22.4508 23.9731 22.3125 23.625 22.3125H13.6719L25.1727 10.8096C25.3759 10.6064 25.5371 10.3652 25.6471 10.0998C25.7571 9.83431 25.8137 9.54978 25.8137 9.26244C25.8137 8.9751 25.7571 8.69058 25.6471 8.42512C25.5371 8.15966 25.3759 7.91847 25.1727 7.71533ZM14.875 8.8594L16.0781 10.0625L8.31251 17.8281L7.10938 16.625L14.875 8.8594ZM5.68751 22.3125V18.9219L7.38501 20.6183L9.07813 22.3125H5.68751ZM11.375 20.8906L10.1719 19.6875L17.9375 11.9219L19.1406 13.125L11.375 20.8906ZM21 11.2656L16.7344 7.00002L18.7403 4.99408L23.0059 9.25971L21 11.2656Z"
      fill={activeColor(active)}
    />
  </svg>
)

export const NavTodoIcon = ({ active = false }: ActiveIconProps) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.375 3.0625H9.625C7.88514 3.06453 6.21712 3.75658 4.98685 4.98685C3.75658 6.21712 3.06453 7.88514 3.0625 9.625V18.375C3.06453 20.1149 3.75658 21.7829 4.98685 23.0132C6.21712 24.2434 7.88514 24.9355 9.625 24.9375H14.875C15.0159 24.9375 15.1559 24.9146 15.2895 24.8697C18.3116 23.8623 23.8623 18.3072 24.8697 15.2895C24.9146 15.1559 24.9375 15.0159 24.9375 14.875V9.625C24.9355 7.88514 24.2434 6.21712 23.0132 4.98685C21.7829 3.75658 20.1149 3.06453 18.375 3.0625ZM5.6875 18.375V9.625C5.6875 8.58071 6.10234 7.57919 6.84077 6.84077C7.57919 6.10234 8.58071 5.6875 9.625 5.6875H18.375C19.4193 5.6875 20.4208 6.10234 21.1592 6.84077C21.8977 7.57919 22.3125 8.58071 22.3125 9.625V13.5625H20.125C18.3851 13.5645 16.7171 14.2566 15.4868 15.4868C14.2566 16.7171 13.5645 18.3851 13.5625 20.125V22.3125H9.625C8.58071 22.3125 7.57919 21.8977 6.84077 21.1592C6.10234 20.4208 5.6875 19.4193 5.6875 18.375ZM16.1875 21.397V20.125C16.1875 19.0807 16.6023 18.0792 17.3408 17.3408C18.0792 16.6023 19.0807 16.1875 20.125 16.1875H21.397C20.125 17.9495 17.9495 20.125 16.1875 21.397Z"
      fill={activeColor(active)}
    />
  </svg>
)

export const NavNoteIcon = ({ active = false }: ActiveIconProps) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.8125 11.8125C11.8125 11.4644 11.9508 11.1306 12.1969 10.8844C12.4431 10.6383 12.7769 10.5 13.125 10.5H19.25C19.5981 10.5 19.9319 10.6383 20.1781 10.8844C20.4242 11.1306 20.5625 11.4644 20.5625 11.8125C20.5625 12.1606 20.4242 12.4944 20.1781 12.7406C19.9319 12.9867 19.5981 13.125 19.25 13.125H13.125C12.7769 13.125 12.4431 12.9867 12.1969 12.7406C11.9508 12.4944 11.8125 12.1606 11.8125 11.8125ZM19.25 14.875H13.125C12.7769 14.875 12.4431 15.0133 12.1969 15.2594C11.9508 15.5056 11.8125 15.8394 11.8125 16.1875C11.8125 16.5356 11.9508 16.8694 12.1969 17.1156C12.4431 17.3617 12.7769 17.5 13.125 17.5H19.25C19.5981 17.5 19.9319 17.3617 20.1781 17.1156C20.4242 16.8694 20.5625 16.5356 20.5625 16.1875C20.5625 15.8394 20.4242 15.5056 20.1781 15.2594C19.9319 15.0133 19.5981 14.875 19.25 14.875ZM24.9375 5.25V22.75C24.9375 23.3302 24.707 23.8866 24.2968 24.2968C23.8866 24.707 23.3302 24.9375 22.75 24.9375H5.25C4.66984 24.9375 4.11344 24.707 3.7032 24.2968C3.29297 23.8866 3.0625 23.3302 3.0625 22.75V5.25C3.0625 4.66984 3.29297 4.11344 3.7032 3.7032C4.11344 3.29297 4.66984 3.0625 5.25 3.0625H22.75C23.3302 3.0625 23.8866 3.29297 24.2968 3.7032C24.707 4.11344 24.9375 4.66984 24.9375 5.25ZM5.6875 22.3125H7.4375V5.6875H5.6875V22.3125ZM22.3125 5.6875H10.0625V22.3125H22.3125V5.6875Z"
      fill={activeColor(active)}
    />
  </svg>
)
