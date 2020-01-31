import React from "react"
import styled from "styled-components"
import PlaceHolderImg from "./../image"

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
          <Text>{item.text}</Text>
          <PlaceHolderImg />
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
const Text = styled.div`
  text-align: right;
  line-height: 1.7;
  margin-left: 10px;
  font-size: 16px;
`

const PreviewCard = styled.div`
  flex: 0.25;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
