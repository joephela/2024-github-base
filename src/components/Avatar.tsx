import { css } from '@emotion/react'
import Me from '../assets/me.jpeg'

const avatarStyle = css`
  height: 200px;
  width: 200px;
  border-radius: 35%;
`

const avatarWrapperStyle = css`
  @media only screen and (max-width: 600px) {
    margin: auto;
  }
`

export function Avatar() {
  return (
    <div css={avatarWrapperStyle}>
      <img
        src={Me}
        css={avatarStyle}
        alt="Picture of Joe Phelan"
        id="joephela-avatar"
      />
    </div>
  )
}
