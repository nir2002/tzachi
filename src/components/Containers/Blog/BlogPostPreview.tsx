import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import PlaceholderImg from "./../../image"
import Text from "../../../components/Text"
import { BlogPostData } from "./Blog"

export interface BlogPostProps {
  data: BlogPostData
  index: number
}

const BlogPost: React.SFC<BlogPostProps> = ({ data, index }) => {
  const { title, subtitle, imgPath, post } = data

  return (
    <Root>
      <PostHeader>
        <InfoContainer>
          <Link to={`/blog/posts/${index}`}>
            <h3>{title}</h3>
          </Link>
          <h4>{subtitle}</h4>
          {/* first 50 words */}
          <Text fontSize={16} lineHeight={1.7}>
            {post
              .split(" ")
              .slice(0, 50)
              .join(" ")}
          </Text>
        </InfoContainer>
        <ImgContainer>
          <PlaceholderImg />
        </ImgContainer>
      </PostHeader>
    </Root>
  )
}

export default BlogPost

const Root = styled.div`
  padding: 10px;
`
const PostHeader = styled.div`
  display: flex;
`
const InfoContainer = styled.div`
  flex: 0.75;
`
const ImgContainer = styled.div`
  flex: 0.25;
  width: 100%;
`
