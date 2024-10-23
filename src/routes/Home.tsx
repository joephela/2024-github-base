import { css } from '@emotion/react'
import { Avatar } from '../components/Avatar'
import { Skills } from '../components/Skills'
import { offscreenStyle } from '../common/sharedStyles'
import { MOBILE_BREAKPOINT } from '../common/theme'
import { Helmet } from 'react-helmet'

const homeContainerStyle = css`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: flex-start;

  li {
    list-style: circle;
  }

  p {
    margin-block: 0;
  }
`

const avatarContainerStyle = css`
  gap: 16px;
  flex-direction: row;
  display: flex;
  width: 100%;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: start;
    flex-wrap: wrap;
  }
`

const paragraphStyle = css`
  display: flex;
  align-items: center;
  max-width: 42em;
  font-size: large;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 100%;
  }
`

const titleStyle = css`
  font-weight: bold;
`
const workTitleStyle = css`
  font-style: italic;
  padding-inline-start: 8px;
`
const workDutyListStyle = css`
  margin-block-start: 0;
`

export function Home() {
  const description = `Experienced software developer with a decade of expertise in building
          web applications, specializing in front-end development. Passionate
          about modernizing legacy code and collaborating with UX teams to
          design new innovative features.`

  return (
    <div css={homeContainerStyle}>
      <Helmet>
        <meta name="description" content={description} />
        <title>Joseph D. Phelan</title>
      </Helmet>
      <h1 css={offscreenStyle}>Home page for Joseph Phelan</h1>

      <div css={avatarContainerStyle}>
        <Avatar />
        <p css={paragraphStyle}>{description}</p>
      </div>

      <Skills />

      <h3>Work</h3>

      <p css={titleStyle}>Acquia</p>
      <p css={workTitleStyle}>Staff software engineer (2024 - current)</p>
      <ul css={workDutyListStyle}>
        <li>Maintain cross team component library and documentation</li>
        <li>
          Code with a focus of maintainability, A11y standards, and e2e testing
        </li>
        <li>
          Conduct one-on-one coding sessions and demos to teach and support
          other developers
        </li>
        <li>
          Ensure applications are up to date on dependencies and
          assist/troubleshoot any blockers
        </li>
        <li>Collaborate with UX designers to iron out designs and patterns</li>
        <li>
          Provide constructive feedback and recommendations in pull requests,
          contributing to the overall code quality and maintainability
        </li>
        <li>
          Vet usage of new libraries to ensure they meet the company standards
        </li>
      </ul>
      <p css={workTitleStyle}>Senior software engineer (2022 - 2024)</p>
      <ul css={workDutyListStyle}>
        <li>Develop cross application component library</li>
        <li>
          Create smart components (micro frontend w/module federation) for use
          throughout product teams
        </li>
        <li>Support maintain and document software functionality</li>
        <li>
          Communicate new releases and features to product development teams
        </li>
      </ul>
      <p css={workTitleStyle}>
        Business Systems Software Developer III (2019 - 2022)
      </p>
      <ul css={workDutyListStyle}>
        <li>
          Support a java/react web application and add new features as needed
        </li>
        <li>
          Design, develop and test business solutions primarily on the
          Salesforce platform using apex, visualforce, lightning web components,
          flows, and process builders
        </li>
        <li>
          Communicate with team members and colleagues to gather user
          requirements and keep up to date with integration changes
        </li>
        <li>
          Make changes on hubspot website, including custom hubl components and
          ADA compliance
        </li>
      </ul>
      <p css={titleStyle}>Nelnet (formerly Great Lakes Higher Education)</p>
      <p css={workTitleStyle}>Senior software engineer (2012 - 2019)</p>
      <ul css={workDutyListStyle}>
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
