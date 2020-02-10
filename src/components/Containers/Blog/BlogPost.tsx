import React from "react"
import styled from "styled-components"

//@ts-ignore
import blogPosts from "../../../../data/blog.json"
import { BlogPostData } from "./Blog"
import PlaceholderImg from "./../../image"
import Text from "../../../components/Text"

export interface BlogPostProps {
  id: number
}

const BlogPost: React.SFC<BlogPostProps> = ({ id }) => {
  if (id < 1 || id > blogPosts.length) {
    //TODO: redirect to error page
    return <div>No such post exists!</div>
  }

  const data: BlogPostData = blogPosts[id - 1]
  const { title, subtitle, imgPath, post } = data

  return (
    <Root>
      <PostHeader>
        <InfoContainer>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </InfoContainer>
        <ImgContainer>
          <PlaceholderImg />
        </ImgContainer>
      </PostHeader>
      <Text fontSize={24} lineHeight={2}>
        {post}
      </Text>
    </Root>
  )
}

export default BlogPost

const Root = styled.div``
const PostHeader = styled.div`
  display: flex;
  padding-bottom: 60px;
`
const InfoContainer = styled.div`
  flex: 0.5;
`
const ImgContainer = styled.div`
  flex: 0.5;
  width: 100%;
`
