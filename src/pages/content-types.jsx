import React, { Fragment } from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'

import '../static/css/contentType.css'

const ContentType = () => {
  return (
    <Fragment>
      <SEO title="Content Type" />
      <Layout>
        <div className="content-type-container">
          <h1 className="animate__animated animate__fadeIn font-weight-light">
            Content Type Selection
          </h1>
          <div className="row">
            <div className="col-sm">
              <ContentTypeCard
                title="Blog Post"
                subtitle="Ideal for writing blog posts."
                description="A content type most ideal for writing posts of a blog."
                ctaText={'Write a Post →'.toUpperCase()}
                ctaLink="blog-post"
              />
            </div>
            <div className="col-sm">
              <ContentTypeCard
                title="Projects"
                subtitle="Ideal for defining projects."
                description="A content type most ideal for defining your work / projects."
                ctaText={'Define a Project →'.toUpperCase()}
                ctaLink="project"
              />
            </div>
          </div>
          <hr className="my-5" />
          <div className="animate__animated animate__fadeIn mt-3 d-flex justify-content-center">
            <h1 className="font-weight-light text-muted">
              More content types coming soon...
            </h1>
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

const ContentTypeCard = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
}) => {
  return (
    <Fragment>
      <div
        className="animate__animated animate__fadeIn content-card card mt-4 m-auto shadow-sm"
        style={{ maxWidth: '25rem' }}>
        <div className="card-body bg-light">
          <h5
            className="card-title font-weight-light"
            style={{ fontSize: '2rem', lineHeight: '56px' }}>
            {title}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted font-weight-normal">
            {subtitle}
          </h6>
          <p className="card-text font-weight-normal">{description}</p>
          <a
            href={`/content-types/${ctaLink}/`}
            className="btn btn-warning text-dark font-monospace">
            {ctaText}
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default ContentType
