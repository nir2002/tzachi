import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => (
  <SocialBar>
    <a href="https://github.com/nir2002">
      <Icon icon={["fab", "github"]} size="2x" />
    </a>
    <a href="https://twitter.com/nparisia">
      <Icon icon={["fab", "twitter"]} size="2x" />
    </a>
    <a href="https://www.linkedin.com/in/nir-parisian-68849384/">
      <Icon icon={["fab", "linkedin"]} size="2x" />
    </a>
  </SocialBar>
)

const SocialBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  padding-top: 50px;
`

const Icon = styled(FontAwesomeIcon)`
  color: #ffffff;
`
