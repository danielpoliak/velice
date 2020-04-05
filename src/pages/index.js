import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Img from "gatsby-image";

const IndexPage = ({data}) => (

    <Layout>
    <SEO title="Home" />
      {
          data.allContentfulAsset.edges.map(({ node: { title, fixed } }) => (
              <div key={fixed.src} style={{ display: `inline-block` }}>
                  <Img
                      key={fixed.src}
                      alt={title}
                      fixed={fixed}
                      backgroundColor
                  />
              </div>
          ))
      }
  </Layout>
)

export const query = graphql`
  query IndexPageQuery {
  allContentfulAsset{
    edges {
      node {
        id,
        title,
         fixed(width: 300) {
          width
          height
          src
          srcSet
        }
      }
    }
  }
}
`

export default IndexPage
