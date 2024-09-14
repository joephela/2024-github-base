import { css } from '@emotion/react'
import Family from '../assets/family.jpeg'
import Farm from '../assets/farm.jpeg'
import Milwaukee from '../assets/milwaukee.jpeg'
import { Fragment, ReactElement } from 'react'

const MOBILE_BREAK = '920px'

const avatarStyle = css`
  width: 100%;
  height: auto;
  border-radius: 10px;
`

const sectionWrapper = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 120px;
  border: 1px solid var(--fg-color);
  border-radius: 10px;
`

const sectionElementStyle = css`
  width: 45%;
  min-width: 200px;
  margin: 20px;

  @media screen and (max-width: ${MOBILE_BREAK}) {
    width: 100%;
  }
`

interface sectionProps {
  left: ReactElement
  right: ReactElement
}

const Section = function ({ left, right }: sectionProps) {
  return (
    <div css={sectionWrapper}>
      <div css={sectionElementStyle}>{left}</div>
      <div css={sectionElementStyle}>{right}</div>
    </div>
  )
}

export function AboutMe() {
  return (
    <Fragment>
      <Section
        left={
          <img
            loading="lazy"
            src={Farm}
            css={avatarStyle}
            alt="Picture of cows"
          />
        }
        right={
          <p>
            My name is Joe. I grew up working on my fathers farm which instilled
            in me the work ethic that I possess today.
          </p>
        }
      />
      <Section
        left={
          <p>
            I went to UW Milwaukee and received my bachelors degree in computer
            science.
          </p>
        }
        right={
          <img
            loading="lazy"
            src={Milwaukee}
            css={avatarStyle}
            alt="Milwaukee"
          />
        }
      />
      <Section
        left={
          <img
            loading="lazy"
            src={Family}
            css={avatarStyle}
            alt="Picture of my family"
          />
        }
        right={
          <p>
            Today I work as a senior software engineer at Widen an aquia company
            specializing in front end. I have a wonderful wife and 2 boys that I
            enjoy spending as much time with as possible.
          </p>
        }
      />
    </Fragment>
  )
}
