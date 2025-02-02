import { css } from '@emotion/react'
import Me from '../assets/me.jpeg'
import { MOBILE_BREAKPOINT } from '../common/theme'

const avatarStyle = css`
  @keyframes path {
    0% {
      clip-path: xywh(40px 5px 79% 79% round 25% 5%);
    }
    25% {
      clip-path: xywh(43px 5px 79% 79% round 25% 25%);
    }
    50% {
      clip-path: xywh(43px 10px 79% 79% round 5% 25%);
    }
    75% {
      clip-path: xywh(40px 10px 79% 79% round 25% 25%);
    }
    100% {
      clip-path: xywh(40px 5px 79% 79% round 25% 5%);
    }
  }

  height: 200px;
  width: 200px;
  clip-path: xywh(40px 5px 79% 79% round 25% 5%);
  transition: clip-path 1s;
  animation: path 15s ease infinite;

  @media (prefers-reduced-motion) {
    animation: unset;
  }
`

const avatarWrapperStyle = css`
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
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
