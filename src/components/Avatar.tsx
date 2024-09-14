import { css } from '@emotion/react'
import Me from '../assets/me.jpeg'

const avatarStyle = css`
  min-width: 200px;
  width: 50%;
  border-radius: 35%;
  max-width: 500px;
`

const avatarWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export function Avatar() {
  return (
    <div css={avatarWrapperStyle}>
      <img src={Me} css={avatarStyle} alt="Picture of me" />
    </div>
  )
}
