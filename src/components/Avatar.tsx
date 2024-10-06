import { css } from '@emotion/react'
import Me from '../assets/me.jpeg'

const avatarStyle = css`
  height: 200px;
  width: 200px;
  border-radius: 35%;
`

export function Avatar() {
  return (
    <img
      src={Me}
      css={avatarStyle}
      alt="Picture of Joe Phelan"
      id="joephela-avatar"
    />
  )
}
