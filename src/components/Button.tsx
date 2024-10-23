import { css } from '@emotion/react'
import styled from '@emotion/styled'

const buttonStyles = css`
  border: none;
  background: unset;
  cursor: pointer;
  height: fit-content;

  :hover,
  :focus {
    svg {
      fill: var(--bg-accent);
    }
  }

  :active {
    svg {
      opacity: 80%;
    }
  }
`

export const Button = styled.button`
  ${buttonStyles}
`

export const ButtonLink = styled.a`
  ${buttonStyles}
`
