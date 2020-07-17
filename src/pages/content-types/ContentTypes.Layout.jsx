import React, { Fragment } from 'react'
import _ from 'lodash'

import ContentTypeCard from './ContentTypes.Card'
import contentTypesData from '../../utils/data/ContentTypes.Data'

import '../../static/css/contentType.css'

const ContentTypeLayout = () => {
  return (
    <Fragment>
      <div>
        <h1 className={`mb-4`}>Content Type Selection</h1>
        <div className="row">
          <AvailableContentTypesCards />
        </div>

        <hr className="my-5" />

        <div className="d-flex justify-content-center mt-3">
          <h1 className="text-muted">More content types coming soon...</h1>
        </div>
      </div>
    </Fragment>
  )
}

const AvailableContentTypesCards = () =>
  _.map(contentTypesData, type => (
    <div key={type.title} className="col-sm mb-2">
      <ContentTypeCard
        title={type.title}
        subtitle={type.subtitle}
        description={type.description}
        ctaText={type.ctaText}
        ctaLink={type.ctaLink}
      />
    </div>
  ))

export default ContentTypeLayout
