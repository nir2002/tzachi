import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle = "" }: Props) => (
  <HeaderRoot>
    <HeaderContainer>
      <NavigationBar>
        <NavigationItemsContainer>
          <li>
            <SiteTitle>
              <NavBarLink to="/">{siteTitle}</NavBarLink>
            </SiteTitle>
          </li>
          <NavBarItem>
            <NavBarLink to="/blog">My Thoughts</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink to="/courses">Courses</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink to="/workshops">Workshops</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink to="/podcast">Podcast</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink to="/about">About</NavBarLink>
          </NavBarItem>
        </NavigationItemsContainer>
      </NavigationBar>
    </HeaderContainer>
  </HeaderRoot>
)

export default Header

const HeaderRoot = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const HeaderContainer = styled.div`
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
`
const NavigationItemsContainer = styled.ul`
  display: flex;
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
