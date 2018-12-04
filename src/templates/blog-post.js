import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data
  return (
    <Layout>
      <h1>{post.title}</h1>
      <h3>Published on {post.date}</h3>
      <section>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </section>
      <section>
        <h3>Author: {post.author.name}</h3>
        <img src={post.author.avatar_urls.wordpress_48} alt="User Avatar" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
      author {
        name
        avatar_urls {
          wordpress_48
        }
      }
      date(formatString: "DD.MM.YYYY")
    }
  }
`

export default BlogPost
