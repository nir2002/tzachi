import React from "React"
import styled from "styled-components"
import { PodcastEpisode } from "./Podcast"
import PlaceholderImg from "./../../image"
import Text from "../../../components/Text"
import { Link } from "gatsby"

interface Props {
  index: number
  data: PodcastEpisode
}

export default ({ index, data }: Props) => {
  const { title, description, thumbnailPath } = data

  return (
    <Root>
      <InfoContainer>
        <Link to={`/podcast/episode/${index}`}>
          <h3>
            פרק {index} - {title}
          </h3>
        </Link>
        <Text fontSize={20} lineHeight={1.7}>
          {description}
        </Text>
      </InfoContainer>
      <ImgContainer>
        <PlaceholderImg />
      </ImgContainer>
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

const InfoContainer = styled.div`
  flex: 0.8;
`
const ImgContainer = styled.div`
  flex: 0.2;
`
