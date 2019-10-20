import { graphql } from "gatsby"

const innovator = graphql`
  query {
    innovator: file(relativePath: { eq: "side-view-innovator.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default {
  innovator
}