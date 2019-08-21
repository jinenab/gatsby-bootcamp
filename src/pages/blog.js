import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import { useStaticQuery, graphql, Link } from "gatsby"
import blogStyles from "./blog.module.scss"
const BlocPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do,YYYY")
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <Head title="Blog"></Head>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map(e => (
            <li className={blogStyles.post}>
              <Link to={`/blog/${e.node.slug}`}>
                <h2> {e.node.title}</h2>
                <p> {e.node.publishedDate}</p>
              </Link>
            </li>
          ))}
        </ol>
      </Layout>
    </div>
  )
}
export default BlocPage
