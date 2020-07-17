/**
 * On this page, an authorized user will be able to
 * select pre-defined content types.
 *
 * For the time being, there are two content types available.
 * - Blog Posts
 * - Projects
 */

import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ContentTypeLayout from './ContentTypes.Layout'

const ContentTypesSelection = () => {
  return (
    <Layout>
      <SEO title="Content Types" />
      <ContentTypeLayout />
    </Layout>
  )
}

export default ContentTypesSelection
