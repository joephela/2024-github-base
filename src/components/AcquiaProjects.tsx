import { css } from '@emotion/react'
import { FullscreenImage } from './FullScreenImage'
import { Project } from './Project'

const acquiaProjectsWrapperStyle = css`
  display: flex;
  padding: 16px;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    gap: 8px;
  }
`

const divider = css`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 16px 0;
  border-radius: 5px;
`

export function AcquiaProjects() {
  return (
    <div css={acquiaProjectsWrapperStyle}>
      <Project
        title="Portals"
        description="Portals is a product that provides a way to create and manage
            multiple websites from a single interface. It is a multi-tenant,
            SaaS product that allows users to create and manage websites to show
            off their dam assets in various ways. I worked on the team that was
            responsible for the front end of the product and developing
            enhancements and new features."
        image="/portals.jpg"
        alt="portals application"
      />
      <i css={divider}></i>
      <Project
        title="Crop & Download"
        description="Allows users to crop and download assets from a DAM site. This was
            setup as a micro frontend that is shared across the product suite."
        image="/crop_download.jpg"
        alt="Crop & download application"
        reverse={true}
      />
      <i css={divider}></i>
      <Project
        title="Search"
        alt="search application"
        description="Search provides a way to search for assets across a DAM site. I
            worked on the team that was responsible for the front end of the
            product developing enhancements and new features."
        image="/search.jpg"
      />
      <i css={divider}></i>
      <Project
        title="Infillify"
        description="An AI image editor you can use to add or remove objects from your
          photos."
        image="/infillify.png"
        alt="Infillify application"
        link="https://www.infillify.com"
        reverse={true}
      />
      <i css={divider}></i>
      <Project
        title="Kindness Task"
        description="A daily task manager to help you achieve your daily goals."
        image="/kindness.jpg"
        alt="Kindness Task application"
        link="https://www.kindnesstask.com"
      />
    </div>
  )
}
