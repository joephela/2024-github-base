import { css } from '@emotion/react'
import { Avatar } from './Avatar'
import { Skills } from './Skills'

const homeContainerStyle = css`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: flex-start;

  li {
    list-style: circle;
  }
`

const avatarContainerStyle = css`
  gap: 16px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media only screen and (max-width: 600px) {
    justify-content: start;
  }
`

const paragraphStyle = css`
  display: flex;
  align-items: center;
  max-width: 60%;

  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
`

const titleStyle = css`
  font-weight: bold;
`

export function Home() {
  return (
    <div css={homeContainerStyle}>
      <h2>Staff Software Engineer at Acquia</h2>

      <div css={avatarContainerStyle}>
        <Avatar />
        <p css={paragraphStyle}>
          Experienced software developer with a decade of expertise in building
          web applications, specializing in front-end development. Passionate
          about modernizing legacy code and collaborating with UX teams to
          design new innovative features.
        </p>
      </div>

      <Skills />

      <h3>Work</h3>
      <p css={titleStyle}>Acquia (formerly Widen Enterprises)</p>
      <p>Staff software engineer</p>
      <p>2019 - Current</p>
      <ul>
        <li>Maintain cross team component library</li>
        <li>
          Keep up to date documentation on best practices and how to use
          component library
        </li>
        <li>
          One on one coding sessions and demos of functionality to teach other
          developers
        </li>
        <li>
          Ensure applications are up to date on dependencies and
          assist/troubleshoot any blockers
        </li>
        <li>Meet with UX to iron out designs and patterns</li>
        <li>
          Provide feedback and recommendations in pull requests to ensure other
          developers are following our company code guidelines
        </li>
        <li>Vet usage of new technologies to use within our stack</li>
      </ul>

      <p css={titleStyle}>Nelnet (formerly Great Lakes Higher Education)</p>
      <p>Senior software engineer</p>
      <p>2012 - 2019</p>
      <ul>
        <li>
          Responsible for performing analysis, designing, coding, testing, and
          implementation of accurate and efficient web applications
        </li>
        <li>
          Experience working on large projects over the span of many years
        </li>
        <li>
          Handle large release efforts that require communication with multiple
          departments and teams
        </li>
        <li>Train new developers in applications and best practices</li>
        <li>
          Engage in peer programming and work together to solve problems, this
          includes code reviews on all code that goes into production
        </li>
      </ul>
    </div>
  )
}
