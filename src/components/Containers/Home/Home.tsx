import React from "react"
import styled from "styled-components"

import PodcastPreview from "./PodcastPreview/PodcastPreview"
import Hero from "./Hero/Hero"
import BlogPreview from "./BlogPreview/BlogPreview"
import PodcastTeaser from "./PodcastTeaser"

export default () => (
  <StyledHome>
    <Hero />
    <PodcastTeaser />
    <PodcastPreview />
    <BlogPreview />
  </StyledHome>
)

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end; // elements starts from right to left
`
