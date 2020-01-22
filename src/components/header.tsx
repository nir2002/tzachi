import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import SocialBar from "./SocialBar"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle = "" }: Props) => (
  <HeaderRoot>
    <HeaderContainer>
      <NavigationBar>
        <NavigationItemsContainer>
          <NavBarItem>
            <NavBarLink to="/blog">בית</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink to="/courses">פודקאסט</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink to="/workshops">בלוג</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink to="/podcast">צחי</NavBarLink>
          </NavBarItem>
        </NavigationItemsContainer>
      </NavigationBar>
      <SocialBar />
    </HeaderContainer>
  </HeaderRoot>
)

export default Header

const HeaderRoot = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const SiteTitle = styled.h1`
  margin: 0;
  padding-right: 200px;
`

const NavigationBar = styled.nav`
  display: flex;
  flex-direction: row-reverse;
`
const NavigationItemsContainer = styled.ul`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  list-style-type: none;
`
const NavBarItem = styled.li`
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-top: 8px;
  padding-left: 14px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1rem;
`

const NavBarLink = styled(Link)`
  text-decoration: none;
  color: white;
`
