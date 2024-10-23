import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { focusMixin } from '../common/sharedStyles'

const buttonStyles = css`
  border: none;
  cursor: pointer;
  height: fit-content;
  background: unset;
  color: var(--fg-color);

  ${focusMixin}
`

export const Button = styled.button`
  ${buttonStyles}
`

export const ButtonLink = styled.a`
  ${buttonStyles}
`
