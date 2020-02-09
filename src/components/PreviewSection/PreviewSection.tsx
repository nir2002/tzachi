import React from "react"
import styled from "styled-components"

import PlaceholderImg from "./../image"
import Text from "../../components/Text"

export interface previewCardItem {
  text: string
  img: string
}

interface Props {
  title: string
  items: previewCardItem[]
}

export default ({ title, items }: Props) => (
  <Root>
    <h1>{title}</h1>
    <PreviewCardsContainer>
      {items.map(item => (
        <PreviewCard>
          <Text lineHeight={1.7} fontSize={16}>
            {item.text}
          </Text>
          <PlaceholderImg />
        </PreviewCard>
      ))}
    </PreviewCardsContainer>
  </Root>
)

const Root = styled.div`
  width: 100%;
  border: solid black 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

const PreviewCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
`

const PreviewCard = styled.div`
  flex: 0.25;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
