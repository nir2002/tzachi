import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => (
  <SocialBar>
    <h3>דברו איתי</h3>
    <IconsContainer>
      <a href="https://github.com/nir2002">
        <Icon icon={["fab", "github"]} size="2x" />
      </a>
      <a href="https://twitter.com/nparisia">
        <Icon icon={["fab", "twitter"]} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/nir-parisian-68849384/">
        <Icon icon={["fab", "linkedin"]} size="2x" />
      </a>
    </IconsContainer>
  </SocialBar>
)

const SocialBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  color: white;
`

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 7em;
`

const Icon = styled(FontAwesomeIcon)`
  color: #ffffff;
`
