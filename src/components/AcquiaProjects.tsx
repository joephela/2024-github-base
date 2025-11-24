import { css } from '@emotion/react'
import { Card } from './card'

const acquiaProjectsWrapperStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 16px;
  margin-block-start: 16px;
`

export function AcquiaProjects() {
  return (
    <div css={acquiaProjectsWrapperStyle}>
      <Card
        imageSrc="/portals.jpg"
        imageAlt="portals application"
        title="Portals"
        description="Portals is a product that provides a way to create and manage multiple websites from a single interface. It is a multi-tenant, SaaS product that allows users to create and manage websites to show off their dam assets in various ways. I worked on the team that was responsible for the front end of the product and developing enhancements and new features."
        link={{
          href: 'https://www.acquia.com/products/acquia-dam/portals',
          text: 'Visit Portals',
        }}
      />

      <Card
        imageSrc="/crop_download.jpg"
        imageAlt="Crop & download application"
        title="Crop & Download"
        description="Allows users to crop and download assets from a DAM site. This was setup as a micro frontend that is shared across the product suite."
        link={{
          href: 'https://www.acquia.com/products/acquia-dam',
          text: 'Visit Acquia DAM',
        }}
      />

      <Card
        imageSrc="/search.jpg"
        imageAlt="search application"
        title="Search"
        description="Search provides a way to search for assets across a DAM site. I worked on the team that was responsible for the front end of the product developing enhancements and new features."
        link={{
          href: 'https://www.acquia.com/products/acquia-dam',
          text: 'Visit Acquia DAM',
        }}
      />
    </div>
  )
}
