import { css } from '@emotion/react'

export const offscreenStyle = css`
  position: absolute;
  visibility: hidden;
  left: -10000px;
`

export const focusMixin = css`
  :hover,
  :focus {
    svg {
      fill: var(--hover-color);
    }
    text-shadow: var(--hover-color) 0px 0 1px;
    color: var(--hover-color);
  }

  :active {
    opacity: 80%;
  }
`
