import React, { Fragment } from 'react'

const ContentTypeCard = props => {
  const { title, subtitle, description, ctaText, ctaLink } = props

  return (
    <Fragment>
      <div className={`card mt-4 m-auto shadow-sm content-card`}>
        <div className={`card-body bg-light`}>
          <h5 className={`card-title`}>{title}</h5>
          <h6 className={`card-subtitle mb-2 text-muted`}>{subtitle}</h6>
          <p className={`card-text`}>{description}</p>
          <a
            href={`/content-types/${ctaLink}/`}
            className={`btn btn-warning text-dark font-monospace`}>
            {ctaText}
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default ContentTypeCard
