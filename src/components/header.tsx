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
            <NavBarLink to="/">בית</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink to="/podcast">פודקאסט</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink to="/blog">בלוג</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink to="/about">צחי</NavBarLink>
          </NavBarItem>
        </NavigationItemsContainer>
      </NavigationBar>
      <SocialBar />
    </HeaderContainer>
  </HeaderRoot>
)

export default Header

const HeaderRoot = styled.header`
  background: #039fb3;
  margin-bottom: 1.45rem;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1160px;
  padding: 1.45rem 1.0875rem;
`
const SiteTitle = styled.h1`
  margin: 0;
  padding-right: 200px;
`

const NavigationBar = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const NavigationItemsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  width: 62%;
  justify-content: space-between;
`
const NavBarItem = styled.li`
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-top: 8px;
  padding-left: 14px;
  color: white;
  font-family: open-sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.3rem;
`

const NavBarLink = styled(Link)`
  text-decoration: none;
  color: white;
`
