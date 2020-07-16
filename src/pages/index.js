import React, { Fragment } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HomePageIllustration from '../components/Illustrations/HomePageIllustration'

const IndexPage = () => (
  <Fragment>
    <Layout>
      <SEO title="Home" />
      <HomePageIllustration />
      <div className="mt-5 d-flex justify-content-center">
        <a
          href="/content-types/"
          className="animate__animated animate__fadeIn btn btn-warning p-2 font-weight-normal"
          style={{ fontSize: '1.5rem' }}>
          Explore Content Types
        </a>
      </div>
    </Layout>
  </Fragment>
)

export default IndexPage
