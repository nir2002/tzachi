/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
library.add(fab, faCheckSquare, faCoffee)

import Header from "./header"
import SocialBar from "./SocialBar"
import "./layout.css"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutRoot>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentContainer>{children}</ContentContainer>
      <Footer>
        <MoreInfo>
          <SocialBar />
        </MoreInfo>
      </Footer>
    </LayoutRoot>
  )
}

export default Layout

const ContentContainer = styled.main`
  flex: 1;
  margin: 20px auto;
  max-width: 80%;
  width: 100%;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 20px;
  font-size: 24px;
  line-height: 1.96rem;
  font-family: "Inter Regular", "sans-serif";
  box-shadow: 3px 3px 5px 6px #ccc;
  border-radius: 10px;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  height: 300px;
  background-color: #333369;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
  color: white;
  & > div > a {
    text-decoration: none;
    color: white;
  }
`

const MoreInfo = styled.div`
  margin-right: 100px;
`

const LayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
