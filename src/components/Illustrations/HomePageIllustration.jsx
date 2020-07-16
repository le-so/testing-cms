import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './HomePageIllustration.css'

const HomePageIllustration = () => {
  const data = useStaticQuery(graphql`
    query ContentSelection {
      contentCreationImage: file(relativePath: { eq: "content_creation.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <Img
        className="animate__animated animate__fadeIn home-illustration m-auto"
        alt="..."
        fluid={data.contentCreationImage.childImageSharp.fluid}
      />
    </Fragment>
  )
}

export default HomePageIllustration
