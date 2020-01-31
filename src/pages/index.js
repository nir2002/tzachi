import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Containers/Home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage