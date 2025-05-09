import { css } from '@emotion/react'

export const offscreenStyle = css`
  position: absolute;
  visibility: hidden;
  left: -10000px;
`

export const centerMixin = css`
  max-width: 1200px;
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

export const gradientMixin = css`
  background: linear-gradient(
    90deg,
    var(--bg-footer-header) 50%,
    var(--bg-color)
  );
  background-size: 200% 100%;
  animation: gradient 10s ease infinite;

  @media (prefers-reduced-motion) {
    animation: unset;
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
    color: var(--active-color);
  }
`

export const sectionHeader = css`
  color: var(--fg-color);
  border-bottom: 3px solid var(--bg-accent);
  padding-bottom: 12px;
  margin-top: 36px;
  font-size: 1.8rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: var(--hover-color);
  }
`
