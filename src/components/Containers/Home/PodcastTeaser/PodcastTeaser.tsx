import React from "react"
import styled from "styled-components"

interface Props {}

const PodcastTeaser: React.SFC<Props> = () => {
  return (
    <Root>
      <h1>הקשיבו לפודקאסט</h1>
    </Root>
  )
}

export default PodcastTeaser

const Root = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  border: solid black 2px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`
