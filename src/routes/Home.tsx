import { css } from '@emotion/react'
import { Avatar } from '../components/Avatar'
import { Skills } from '../components/Skills'
import {
  centerMixin,
  offscreenStyle,
  transitionMixin,
} from '../common/sharedStyles'
import { MOBILE_BREAKPOINT } from '../common/theme'
import { Helmet } from 'react-helmet'
import { useFadeTransition } from '../hooks/useFadeTransition'
import { Link } from 'react-router-dom'
import { AcquiaProjects } from '../components/AcquiaProjects'
import { Work } from '../components/Work'

const homeContainerStyle = css`
  ${transitionMixin}
  ${centerMixin}
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

export function Home() {
  const { ref } = useFadeTransition()
  const description = `Experienced software developer with a decade of expertise in building
          web applications, specializing in front-end development. Passionate
          about modernizing legacy code and collaborating with UX teams to
          design new innovative features.`

  return (
    <div css={homeContainerStyle} ref={ref}>
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
      <h3>Projects</h3>
      <p>
        <a href="https://patterns.yden.us/" target="_blank">
          Widen public design patterns
        </a>{' '}
        - A collection of design patterns with examples in TypeScript.
      </p>
      <p>
        <a href="https://www.infillify.com" target="_blank">
          Infillify
        </a>{' '}
        - An AI image editor you can use to add or remove objects from your
        photos.
      </p>
      <p>
        <a href="https://www.kindnesstask.com" target="_blank">
          Kindness Task
        </a>{' '}
        - A daily task manager.
      </p>
      <p>
        <Link to="/news">News search</Link> - A sample search experience built
        using a public API.
      </p>

      <AcquiaProjects />
      <Work />
    </div>
  )
}
