import React from "React"
import styled from "styled-components"
import { PodcastEpisode } from "./Podcast"
import PlaceholderImg from "./../../image"
import Text from "../../../components/Text"

interface Props {
  index: number
  data: PodcastEpisode
}

export default ({ index, data }: Props) => {
  const { title, description, thumbnailPath } = data

  return (
    <Root>
      <div style={{ flex: 0.8 }}>
        <h3>
          פרק {index} - {title}
        </h3>
        <Text fontSize={20} lineHeight={1.7}>
          {description}
        </Text>
      </div>
      <div style={{ flex: 0.2 }}>
        <PlaceholderImg />
      </div>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  margin-top: 16px;
`
