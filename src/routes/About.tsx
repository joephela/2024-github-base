import { css } from '@emotion/react'
import Family from '../assets/family.jpg'
import { Helmet } from 'react-helmet'
import {
  centerMixin,
  reducedMotionMixin,
  sectionHeader,
  transitionMixin,
} from '../common/sharedStyles'
import { useFadeTransition } from '../hooks/useFadeTransition'

const avatarStyle = css`
  width: 100%;
  display: block;
  height: auto;
  border-radius: 10px;
`

const aboutMeWrapperStyle = css`
  ${transitionMixin}
  ${centerMixin}
`

const figureStyle = css`
  text-align: center;
  font-style: italic;
  font-size: smaller;
  text-indent: 0;
  margin: 0.5em;
  margin-inline: auto;
  padding: 0.5em;
  max-width: 600px;
`

const aboutMeContainer = css`
  margin: 40px 0;
`

const sectionSubHeader = css`
  color: var(--bg-accent);
  margin: 24px 0 16px;
  font-size: 1.4rem;
  position: relative;
`

const interestsStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  margin: 32px 0;
`

const interestItemStyle = css`
  ${reducedMotionMixin}
  margin-bottom: 0;
  background-color: var(--bg-color);
  padding: 25px;
  border-radius: 12px;
  transition: transform 0.3s ease;
  position: relative;
  border: 2px dashed var(--bg-accent);

  &:hover {
    ${reducedMotionMixin}
    transform: scale(1.03);
    border-style: solid;
  }

  & strong {
    color: var(--hover-color);
    display: block;
    margin-bottom: 12px;
    font-size: 1.2rem;
    position: relative;
    padding-left: 28px;

    &:before {
      content: '✦';
      position: absolute;
      left: 0;
      color: var(--bg-accent);
    }
  }
`

export function AboutMe() {
  const { ref } = useFadeTransition()

  return (
    <article css={aboutMeWrapperStyle} ref={ref}>
      <Helmet>
        <meta
          name="description"
          content="Learn about me and how I got started on my path to becoming a software engineer."
        />
        <title>About - Joseph D. Phelan</title>
      </Helmet>
      <h1 css={sectionHeader}>About</h1>
      <p>
        From my humble beginnings working on my fathers farm I learned the value
        of hard work. After spending time with our family DOS computer, I
        developed an interest in all things technology. This led to me attending
        the University of Wisconsin Milwaukee in pursuit of a bachelors degree
        in computer science. Once acquired I moved to Madison WI and began my
        professional career.
      </p>
      <p>
        Today I work as a staff software engineer at{' '}
        <a href="https://www.acquia.com/products/acquia-dam">Acquia</a>{' '}
        specializing in front end. I have a wonderful wife and 2 boys that I
        enjoy spending as much time with as possible. When I'm not working I
        enjoy biking, listening to podcasts and audio books, playing video
        games, reading books, fishing, and gardening.
      </p>

      <p>
        Going forward I want to continue making a difference on teams. Improving
        aging codebases, building out new features, and making other developers'
        lives easier. Above all I want to raise good kids that go on to make a
        difference in this world.
      </p>
      <figure css={figureStyle}>
        <img
          loading="lazy"
          src={Family}
          css={avatarStyle}
          alt="Picture of my family"
        />
        <figcaption>My family and I</figcaption>
      </figure>
      <div css={aboutMeContainer}>
        <h3 css={sectionSubHeader}>Interests</h3>
        <div css={interestsStyle}>
          <div css={interestItemStyle}>
            <strong>Reading</strong>
            I'm a sucker for sci-fi books and lately have been reading some non
            fiction around AI development.
          </div>
          <div css={interestItemStyle}>
            <strong>Gardening</strong>A great way to unplug after being at a
            computer all day.
          </div>
          <div css={interestItemStyle}>
            <strong>Baking bread</strong>I recently got into making sourdough
            and created a starter from scratch.
          </div>
          <div css={interestItemStyle}>
            <strong>Hiking</strong>A way to escape and immerse yourself in
            nature while getting steps in.
          </div>
        </div>
      </div>
    </article>
  )
}
