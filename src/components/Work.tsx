import { css } from '@emotion/react'
import { MOBILE_BREAKPOINT } from '../common/theme'
import { sectionHeader } from '../common/sharedStyles'

const resumeContainer = css`
  max-width: 1100px;
  margin: 0 auto;
  line-height: 1.8;
  color: var(--fg-color);
`

const experienceContainer = css`
  display: grid;
  gap: 30px;
  margin: 40px 0;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    gap: 20px;
  }
`

const experienceCard = css`
  background-color: var(--bg-footer-header);
  border-radius: 12px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
`

const companyHeader = css`
  background-color: var(--bg-accent);
  color: var(--fg-accent);
  padding: 16px 24px;
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 20px;
    height: 20px;
    background-color: var(--bg-accent);
  }
`

const roleContainer = css`
  padding: 20px 24px;
`

const workTitleStyle = css`
  font-size: 1.2rem;
  color: var(--fg-color);
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  span:first-of-type {
    font-weight: 600;
  }

  span:last-of-type {
    font-style: italic;
    color: var(--hover-color);
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 4px 12px;
    border-radius: 16px;
  }
`

const workDutyListStyle = css`
  margin: 20px 0;

  & li {
    margin-bottom: 12px;
    position: relative;
  }
`

const educationStyle = css`
  background: linear-gradient(
    135deg,
    var(--bg-footer-header) 0%,
    var(--bg-color) 100%
  );
  padding: 30px;
  border-radius: 16px;
  margin: 32px 0;
  position: relative;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border-top: 5px solid var(--bg-accent);

  &:after {
    content: '🎓';
    position: absolute;
    top: 0px;
    right: 8px;
    font-size: 40px;
  }
`

const educationTitle = css`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: var(--fg-color);
`

const educationDate = css`
  display: inline-block;
  color: var(--fg-accent);
  background-color: var(--bg-accent);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 10px;
`

export function Work() {
  return (
    <div css={resumeContainer}>
      <h2 css={sectionHeader}>Experience</h2>

      <div css={experienceContainer}>
        <div css={experienceCard}>
          <div css={companyHeader}>Acquia</div>
          <div css={roleContainer}>
            <div css={workTitleStyle}>
              <span>Staff Software Engineer</span>
              <span>Feb 2024 - Present</span>
            </div>
            <ul css={workDutyListStyle}>
              <li>Maintain cross team component library and documentation</li>
              <li>
                Code with a focus of maintainability, A11y standards, and e2e
                testing
              </li>
              <li>
                Conduct one-on-one coding sessions and demos to teach and
                support other developers
              </li>
              <li>
                Ensure applications are up to date on dependencies and
                assist/troubleshoot any blockers
              </li>
              <li>
                Collaborate with UX designers to iron out designs and patterns
              </li>
              <li>
                Provide constructive feedback and recommendations in pull
                requests, contributing to the overall code quality and
                maintainability
              </li>
              <li>
                Vet usage of new libraries to ensure they meet the company
                standards
              </li>
            </ul>

            <div css={workTitleStyle}>
              <span>Senior Software Engineer</span>
              <span>Feb 2022 - Feb 2024</span>
            </div>
            <ul css={workDutyListStyle}>
              <li>Developed a cross-application component library</li>
              <li>
                Designed smart components using micro frontend with module
                federation to enhance product team efficiency
              </li>
              <li>
                Provided ongoing support, maintenance, and documentation for
                software functionality
              </li>
              <li>
                Communicated new releases and features effectively to product
                development teams
              </li>
            </ul>

            <div css={workTitleStyle}>
              <span>Business Systems Software Developer III</span>
              <span>Feb 2019 - Feb 2022</span>
            </div>
            <ul css={workDutyListStyle}>
              <li>
                Supported a Java/React web application and implemented new
                features as required
              </li>
              <li>
                Designed, developed, and tested business solutions on the
                Salesforce platform utilizing apex, visualforce, lightning web
                components, flows, and process builders
              </li>
              <li>
                Collaborated with team members to collect user requirements and
                stay informed on integration modifications
              </li>
              <li>
                Updated HubSpot website by incorporating custom HubL components
                and ensuring A11Y compliance
              </li>
            </ul>
          </div>
        </div>

        <div css={experienceCard}>
          <div css={companyHeader}>
            Nelnet (formerly Great Lakes Higher Education)
          </div>
          <div css={roleContainer}>
            <div css={workTitleStyle}>
              <span>Senior Software Engineer</span>
              <span>Feb 2012 - Feb 2019</span>
            </div>
            <ul css={workDutyListStyle}>
              <li>
                Performed analysis, design, coding, testing, and implementation
                of efficient web applications
              </li>
              <li>Worked on large projects over several years</li>
              <li>
                Managed communication with multiple departments for large
                release efforts
              </li>
              <li>Trained new developers in applications and best practices</li>
              <li>
                Engaged in peer programming and conducted code reviews for
                production code
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2 css={sectionHeader}>Education</h2>
      <div css={educationStyle}>
        <div css={educationTitle}>University of Wisconsin Milwaukee</div>
        <div>Bachelor's Degree in Computer Science</div>
        <div css={educationDate}>2007 - 2012</div>
      </div>
    </div>
  )
}
