import { css } from '@emotion/react'

const pillContainerStyle = css`
  background-color: purple;
  border-radius: 24px;
  padding-inline: 8px;
  text-align: center;
  color: white;
`

export function Pill({ text }: PillProps) {
  return <div css={pillContainerStyle}>{text}</div>
}

export interface PillProps {
  text: string
}
