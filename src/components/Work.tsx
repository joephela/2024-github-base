import { css } from '@emotion/react'

const titleStyle = css`
  font-weight: bold;
`
const workTitleStyle = css`
  font-style: italic;
  padding-inline-start: 8px;
`

const workSubtitleStyle = css`
  padding-inline-start: 8px;
`

const workDutyListStyle = css`
  margin-block-start: 0;
`

export function Work() {
  return (
    <div>
      <h2>Work Experience</h2>
      <p css={titleStyle}>Acquia</p>
      <p css={workTitleStyle}>Staff software engineer (2024 - current)</p>
      <p css={workSubtitleStyle}>
        I work on a team that is responsible for building and maintaining a
        cross-application component library. This library is used by multiple
        teams to build their applications. I also work with UX designers to
        implement new designs and patterns. Our team gets pulled in to help with
        new features in the applications when needed as well. The tech stack is
        Java on the backend, with ties into AWS services, and React on the
        frontend.
      </p>
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
        <li>Developed a cross-application component library</li>
        <li>
          Designed smart components using micro frontend with module federation
          to enhance product team efficiency
        </li>
        <li>
          Provided ongoing support, maintenance, and documentation for software
          functionality
        </li>
        <li>
          Communicated new releases and features effectively to product
          development teams
        </li>
      </ul>
      <p css={workTitleStyle}>
        Business Systems Software Developer III (2019 - 2022)
      </p>
      <ul css={workDutyListStyle}>
        <li>
          Supported a Java/React web application and implemented new features as
          required
        </li>
        <li>
          Designed, developed, and tested business solutions on the Salesforce
          platform utilizing apex, visualforce, lightning web components, flows,
          and process builders
        </li>
        <li>
          Collaborated with team members to collect user requirements and stay
          informed on integration modifications
        </li>
        <li>
          Updated HubSpot website by incorporating custom HubL components and
          ensuring A11Y compliance
        </li>
      </ul>
      <p css={titleStyle}>Nelnet (formerly Great Lakes Higher Education)</p>
      <p css={workTitleStyle}>Senior software engineer (2012 - 2019)</p>
      <p css={workSubtitleStyle}>
        I started my development career at Great Lakes Higher Education who
        would go on to be acquired by Nelnet. During my time there I worked on a
        call center web application that was replacing old CICS mainframe
        screens. This gave me a lot of experience in working with legacy code
        and modernizing it. The tech stack was primarily Java on the backend
        with a jquery based frontend.
      </p>
      <ul css={workDutyListStyle}>
        <li>
          Performed analysis, design, coding, testing, and implementation of
          efficient web applications
        </li>
        <li>Worked on large projects over several years</li>
        <li>
          Managed communication with multiple departments for large release
          efforts
        </li>
        <li>Trained new developers in applications and best practices</li>
        <li>
          Engaged in peer programming and conducted code reviews for production
          code
        </li>
      </ul>
    </div>
  )
}
