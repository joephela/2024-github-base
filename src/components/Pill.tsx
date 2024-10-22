import { css } from '@emotion/react'

const pillContainerStyle = css`
  background-color: var(--color-accent-bg);
  border-radius: 24px;
  padding-inline: 8px;
  text-align: center;
  color: var(--fg-color);
`

export function Pill({ text }: PillProps) {
  return <div css={pillContainerStyle}>{text}</div>
}

export interface PillProps {
  text: string
}
