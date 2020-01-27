import React from "react"
import styled from "styled-components"

import PodcastPreview from "./PodcastPreview/PodcastPreview"
import Hero from "./Hero/Hero"

export default () => (
  <StyledHome>
    <Hero />
    <PodcastPreview />
  </StyledHome>
)

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end; // elements starts from right to left
`
