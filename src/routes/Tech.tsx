import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import {
  centerMixin,
  focusMixin,
  transitionMixin,
} from '../common/sharedStyles'
import { ReactIcon } from '../assets/ReactIcon'
import { TypescriptIcon } from '../assets/TypescriptIcon'
import { GitIcon } from '../assets/GitIcon'
import { EslintIcon } from '../assets/EslintIcon'
import { PrettierIcon } from '../assets/PrettierIcon'
import { ViteIcon } from '../assets/ViteIcon'
import { VercelIcon } from '../assets/VercelIcon'
import { VscodeIcon } from '../assets/VscodeIcon'
import { HelmetIcon } from '../assets/HelmetIcon'
import { PageIcon } from '../assets/PageIcon'
import { MaterialIcon } from '../assets/MaterialIcon'
import { GithubIcon } from '../assets/GithubIcon'
import { PlaywrightIcon } from '../assets/PlaywrightIcon'
import { EmotionIcon } from '../assets/EmotionIcon'
import { JestIcon } from '../assets/JestIcon'
import { useFadeTransition } from '../hooks/useFadeTransition'

const techWrapperStyle = css`
  ${transitionMixin}
  ${centerMixin}
`

const cardsWrapperStyle = css`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-block-start: 40px;
  justify-content: center;
`

const cardStyle = css`
  width: 120px;
  height: 120px;
  box-shadow: 1px 1px 4px var(--fg-color);
  display: flex;
  justify-content: end;
  align-items: center;
  border: 1px solid grey;
  border-radius: 10px;
  cursor: pointer;
  flex-direction: column;
  color: unset;
  ${focusMixin}

  &:hover,
  &:focus {
    box-shadow: 1px 1px 1px var(--hover-color);
  }
`

function Card({ children, href }: CardProps) {
  return (
    <a css={cardStyle} href={href} target="_blank">
      {children}
    </a>
  )
}

interface CardProps {
  children: ReactNode
  href: string
}

export function Tech() {
  const { ref } = useFadeTransition()

  return (
    <div css={techWrapperStyle} ref={ref}>
      <Helmet>
        <meta
          name="description"
          content="A collection of technologies used in the process of making this
        website and in my day to day work."
        />
        <title>Tech - Joseph D. Phelan</title>
      </Helmet>

      <h1>Technology</h1>
      <p>
        A collection of technologies used in the process of making this website
        and in my day to day work.{' '}
        <a
          href="https://github.com/joephela/2024-github-base"
          rel="noreferrer"
          target="_blank"
        >
          Check out the code!
        </a>
      </p>
      <p>
        My preferred stack includes working in typescript and react with some
        sort of css-in-js library (in my case I am using emotion). I use git and
        github for version control and code reviews. Eslint and prettier are
        used for code formatting. Vite was used to generate the skeleton of this
        project.
      </p>
      <p>
        My preferred code editor is visual studio code, but I've also used some
        jetbrains editors in the past. I use vercel to host my website. I like
        to use Playwright for e2e testing and jest for js unit testing.
      </p>
      <div css={cardsWrapperStyle}>
        <Card href="https://react.dev/">
          <ReactIcon />
          <p>React</p>
        </Card>
        <Card href="https://www.typescriptlang.org/">
          <TypescriptIcon />
          <p>Typescript</p>
        </Card>
        <Card href="https://git-scm.com/">
          <GitIcon />
          <p>Git</p>
        </Card>
        <Card href="https://github.com/">
          <GithubIcon />
          <p>Github</p>
        </Card>
        <Card href="https://eslint.org/">
          <EslintIcon />
          <p>Eslint</p>
        </Card>
        <Card href="https://prettier.io/">
          <PrettierIcon />
          <p>Prettier</p>
        </Card>
        <Card href="https://vite.dev/">
          <ViteIcon />
          <p>Vite</p>
        </Card>
        <Card href="https://vercel.com">
          <VercelIcon />
          <p>Vercel</p>
        </Card>
        <Card href="https://code.visualstudio.com/">
          <VscodeIcon />
          <p>VS code</p>
        </Card>
        <Card href="https://playwright.dev">
          <PlaywrightIcon />
          <p>Playwright</p>
        </Card>
        <Card href="https://jestjs.io/">
          <JestIcon />
          <p>Jest</p>
        </Card>
        <Card href="https://emotion.sh">
          <EmotionIcon />
          <p>Emotion</p>
        </Card>
        <Card href="https://fonts.google.com/icons">
          <MaterialIcon />
          <p>Material icons</p>
        </Card>
        <Card href="https://github.com/nfl/react-helmet">
          <HelmetIcon />
          <p>React-helmet</p>
        </Card>
        <Card href="https://github.com/tschaub/gh-pages">
          <PageIcon />
          <p>Gh-pages</p>
        </Card>
      </div>
    </div>
  )
}
