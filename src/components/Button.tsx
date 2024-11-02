import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { focusMixin } from '../common/sharedStyles'

export const borderedButton = css`
  height: 36px;
  border: 1px solid var(--fg-color);
  border-radius: 4px;
  padding-inline: 8px;
`

const buttonStyles = css`
  border: none;
  cursor: pointer;
  height: fit-content;
  background: unset;
  color: var(--fg-color);

  ${focusMixin}

  :disabled {
    color: gray;
  }
`

export const Button = styled.button`
  ${buttonStyles}
`

export const ButtonLink = styled.a`
  ${buttonStyles}
`
