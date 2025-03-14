import { css } from '@emotion/react'
import Family from '../assets/family.jpg'
import { Helmet } from 'react-helmet'
import { centerMixin, transitionMixin } from '../common/sharedStyles'
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
      <h1>About</h1>
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
    </article>
  )
}
