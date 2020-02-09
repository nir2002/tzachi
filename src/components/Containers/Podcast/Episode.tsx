import React from "react"
import styled from "styled-components"

import Text from "../../../components/Text"
import PlaceholderImg from "../../image"

export interface EpisodeProps {
  title: string
  description: string
  picturePath: string
  episodeLink: string
  episodeInfoText: string
}

const Episode: React.SFC<EpisodeProps> = ({
  title,
  description,
  picturePath,
  episodeLink,
  episodeInfoText,
}) => {
  return (
    <Root>
      <EpisodeDetails>
        <div>
          <h1>test</h1>
          <Text fontSize={26} lineHeight={1.7}></Text>
        </div>
        <PlaceholderImg />
      </EpisodeDetails>
      <EpisodePlayer />
      <EpisodeText />
    </Root>
  )
}

export default Episode

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const EpisodeDetails = styled.div``
const EpisodePlayer = styled.div``
const EpisodeText = styled.div``
