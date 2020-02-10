import React from "react"
import styled from "styled-components"

//@ts-ignore
import blogPosts from "../../../../data/blog.json"
import BlogPostPreview from "./BlogPostPreview"

export interface BlogPostData {
  title: string
  subtitle: string
  imgPath: string
  post: string
}

export interface BlogProps {}

const Blog: React.SFC<BlogProps> = () => {
  const posts: BlogPostData[] = blogPosts

  return (
    <Root>
      <h1>בלוג</h1>
      {posts.map((post, index) => (
        <BlogPostPreview key={index} data={post} index={index + 1} />
      ))}
    </Root>
  )
}

export default Blog

const Root = styled.div`
  display: flex;
  flex-direction: column;
`
