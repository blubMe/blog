import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Layout from '../components/layout'

const ThirdPage = () => (
    <React.Fragment>
        <Header siteTitle="React is <3"/>
        <Layout>
            <h1>All about react and Me</h1>
            <p>the journey from Vue to react and why i choose react ></p>
            <Link to="/">Back to Home</Link>
            <Link to="/page-2/">Page 2</Link>
        </Layout>
    </React.Fragment>
)

export default ThirdPage