import React from 'react'
import {HeaderPost} from '../components/header'
import Layout from '../components/layout'

const About = () => (
  <Layout>
    <HeaderPost/>
    <article style={{paddingTop: 32}}>
        <h1>NOT FOUND About</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </article>
  </Layout>
)

export default About