import { css } from '@emotion/react'

const pillContainerStyle = css`
  background-color: var(--bg-accent);
  border-radius: 24px;
  padding-inline: 8px;
  text-align: center;
  color: var(--fg-accent);
  padding-block: 4px;
`

export function Pill({ text }: PillProps) {
  return <div css={pillContainerStyle}>{text}</div>
}

export interface PillProps {
  text: string
}
