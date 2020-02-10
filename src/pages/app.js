import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import Home from "../components/Containers/Home"
import Podcast from "./../components/Containers/Podcast"
import Episode from "./../components/Containers/Podcast/Episode"
import Blog from "./../components/Containers/Blog"
import BlogPost from "./../components/Containers/Blog/BlogPost"

const IndexPage = () => (
  <Layout>
    <Router>
      <Home path="/" />
      <Podcast path="/podcast/" />
      <Episode path="/podcast/episodes/:id" />
      <Blog path="/blog" />
      <BlogPost path="/blog/posts/:id" />
    </Router>
  </Layout>
)

export default IndexPage
