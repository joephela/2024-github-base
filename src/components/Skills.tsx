import { css } from '@emotion/react'
import { Fragment } from 'react'
import { Pill } from './Pill'

const pillWrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export function Skills() {
  return (
    <Fragment>
      <h3>Skills</h3>
      <div css={pillWrapperStyle}>
        <Pill text="Typescript" />
        <Pill text="Javascript" />
        <Pill text="React" />
        <Pill text="CSS" />
        <Pill text="HTML" />
        <Pill text="A11Y" />
        <Pill text="Jest" />
        <Pill text="Playwright" />
        <Pill text="Emotion" />
        <Pill text="Web Components" />
        <Pill text="Figma" />
        <Pill text="Node.js" />
        <Pill text="Java" />
        <Pill text="SQL" />
        <Pill text="AWS" />
      </div>
    </Fragment>
  )
}
