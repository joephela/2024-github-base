import { css } from '@emotion/react'

export const offscreenStyle = css`
  position: absolute;
  visibility: hidden;
  left: -10000px;
`

export const centerMixin = css`
  max-width: 53em;
  margin-left: auto;
  margin-right: auto;
`

export const transitionMixin = css`
  opacity: 0;
  transition: opacity 0.2s linear;

  @media (prefers-reduced-motion) {
    transition: unset;
  }

  &.transitioned {
    opacity: 1;
  }
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
