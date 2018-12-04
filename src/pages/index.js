import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

class Counter extends React.Component {
  state = {
    counter: 0,
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 })
          }}
        >
          Increment
        </button>
        <span>{this.state.counter}</span>
      </div>
    )
  }
}

const IndexPage = ({ data: { allWordpressPost } }) => {
  const { edges: posts } = allWordpressPost
  return (
    <Layout>
      <h1>Hi people</h1>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Counter />
      <div>
        {posts.map(({ node: post }) => (
          <article key={post.id}>
            <h2>
              <Link to={`/${post.slug}`}>{post.title}</Link>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </article>
        ))}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
  }
`

export default IndexPage
