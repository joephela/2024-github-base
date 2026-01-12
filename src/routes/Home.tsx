import { css } from '@emotion/react'
import { Skills } from '../components/Skills'
import {
  centerMixin,
  offscreenStyle,
  sectionHeader,
  transitionMixin,
} from '../common/sharedStyles'
import { Helmet } from 'react-helmet-async'
import { useFadeTransition } from '../hooks/useFadeTransition'
import { AcquiaProjects } from '../components/AcquiaProjects'
import { Work } from '../components/Work'

const homeContainerStyle = css`
  ${transitionMixin}
  ${centerMixin}
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: flex-start;

  p {
    margin-block: 0;
  }
`

const mainStyle = css`
  width: 100%;
`

export function Home() {
  const { ref } = useFadeTransition()

  return (
    <div css={homeContainerStyle} ref={ref}>
      <Helmet>
        <title>Joseph D. Phelan</title>
      </Helmet>
      <h1 css={offscreenStyle}>Home page for Joseph Phelan</h1>

      <div css={mainStyle}>
        <Skills />
        <h2 css={sectionHeader}>Projects</h2>
        <p>
          A showcase of personal and professional projects I've contributed to.
        </p>

        <AcquiaProjects />
        <Work />
      </div>
    </div>
  )
}
