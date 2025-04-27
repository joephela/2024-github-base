import { css } from '@emotion/react'
import { Pill } from './Pill'
import { sectionHeader } from '../common/sharedStyles'

const pillWrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const categoryStyle = css`
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 8px;
  background-color: rgba(var(--bg-accent-rgb, 72, 102, 102), 0.08);
  border-left: 4px solid var(--bg-accent);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`

const categoryHeaderStyle = css`
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: var(--fg-color);
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-top: 0;
`

export function Skills() {
  return (
    <div>
      <h2 css={sectionHeader}>Skills</h2>

      <div css={categoryStyle}>
        <h3 css={categoryHeaderStyle}>Frontend</h3>
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
          <Pill text="Eslint" />
          <Pill text="Prettier" />
        </div>
      </div>

      <div css={categoryStyle}>
        <h3 css={categoryHeaderStyle}>Backend</h3>
        <div css={pillWrapperStyle}>
          <Pill text="Node.js" />
          <Pill text="Java" />
          <Pill text="SQL" />
          <Pill text="AWS" />
          <Pill text="CI/CD Pipelines" />
        </div>
      </div>

      <div css={categoryStyle}>
        <h3 css={categoryHeaderStyle}>Soft Skills</h3>
        <div css={pillWrapperStyle}>
          <Pill text="Hiring" />
          <Pill text="Mentoring" />
        </div>
      </div>
    </div>
  )
}
