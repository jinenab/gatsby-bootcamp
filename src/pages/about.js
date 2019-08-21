import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"

import Layout from "../components/layout"
const About = () => {
  return (
    <div>
      <Layout>
        <Head title="About"></Head>
        <h1>About</h1>
        <p>Abdelhak Jinen</p>
        <Link to="/contact">Do you want to Contact Me?</Link>
      </Layout>
    </div>
  )
}
export default About
