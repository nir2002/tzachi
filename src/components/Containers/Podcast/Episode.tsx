import React from "react"
import styled from "styled-components"

//@ts-ignore
import podcastEpisodesData from "../../../../data/podcast.json"
import { PodcastEpisode } from "../Podcast"
import Text from "../../../components/Text"
import PlaceholderImg from "../../image"

export interface EpisodeProps {
  id: number
}

const Episode: React.SFC<EpisodeProps> = ({ id }) => {
  if (id < 1 || id > podcastEpisodesData.length) {
    //TODO: redirect to error page
    return <div>No such episode exists!</div>
  }

  const episodeData: PodcastEpisode = podcastEpisodesData[id - 1]
  const {
    title,
    description,
    imagePath,
    episodeLink,
    episodeInfoText,
  } = episodeData

  return (
    <Root>
      <EpisodeDetails>
        <EpisodeDescription>
          <h1>
            פרק {id} - {title}
          </h1>
          <Text fontSize={26} lineHeight={1.7}>
            {description}
          </Text>
        </EpisodeDescription>
        <EpisodeImage>
          <PlaceholderImg />
        </EpisodeImage>
      </EpisodeDetails>
      <EpisodePlayer>Player Placeholder</EpisodePlayer>
      <EpisodeText>{episodeInfoText}</EpisodeText>
    </Root>
  )
}

export default Episode

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const EpisodeDetails = styled.div`
  display: flex;
`
const EpisodeDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.75;
`
const EpisodeImage = styled.div`
  width: 100%;
  flex: 0.25;
`
const EpisodePlayer = styled.div`
  text-align: center;
  font-size: 100px;
  width: 100%;
  padding: 100px 0;
`
const EpisodeText = styled.div``
