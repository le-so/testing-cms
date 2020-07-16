/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const contentTypes = [
    'blog-post',
    'project'
  ]

  contentTypes.forEach((type) => {
    createPage({
      path: `/content-types/${type}`,
      component: require.resolve(`./src/templates/${type}.jsx`),
    })
  })
}
