import _ from 'lodash'

const contentTypesData = [
  {
    title: `Blog Post`,
    subtitle: `Ideal for writing blog posts.`,
    description: `Content type which is most widely used to write blog posts.`,
    ctaText: _.toUpper(`Write a Post →`),
    ctaLink: `blog-post/new`,
  },
  {
    title: `Project`,
    subtitle: `Ideal for defining projects.`,
    description: `A content type most ideal for defining your work / projects.`,
    ctaText: _.toUpper(`Define a Project →`),
    ctaLink: `project`,
  },
]

export default contentTypesData
