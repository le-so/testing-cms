import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'

import SEO from '../components/seo'
import Layout from '../components/layout'

import '../static/css/contentType.css'

const contentTypesData = [
  {
    title: `Blog Post`,
    subtitle: `Ideal for writing blog posts.`,
    description: `Content type which is most widely used to write blog posts.`,
    ctaText: _.toUpper(`Write a Post →`),
    ctaLink: `blog-post`,
  },
  {
    title: `Project`,
    subtitle: `Ideal for defining projects.`,
    description: `A content type most ideal for defining your work / projects.`,
    ctaText: _.toUpper(`Define a Project →`),
    ctaLink: `project`,
  },
]

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
            {_.map(contentTypesData, type => (
              <div className="col-sm">
                <ContentTypeCard
                  title={type.title}
                  subtitle={type.subtitle}
                  description={type.description}
                  ctaText={type.ctaText}
                  ctaLink={type.ctaLink}
                />
              </div>
            ))}
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
          <Link
            to={`/content-types/${ctaLink}/`}
            className="btn btn-warning text-dark font-monospace">
            {ctaText}
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default ContentType
