import React from 'react'
import { Link,graphql } from 'gatsby'

import Header from '../components/header'
import Layout from '../components/layout'

export const query = graphql`
    query{
        allFile{
            edges{
                node{
                    relativePath
                    extension
                    prettySize
                    birthTime(fromNow: true)
                    changeTime(fromNow: true)
                }
            }
        }
    }
`

const ThirdPage = ({data}) => {
    console.log(data)
    return (
        <React.Fragment>
            <Header siteTitle="React is <3"/>
            <Layout>
                <h1>All about react and Me</h1>
                <p>the journey from Vue to react and why i choose react ></p>
                <Link to="/">Back to Home</Link>
                <Link to="/page-2/">Page 2</Link>
                <table>
                    <thead>
                        <tr>
                            <th>relativePath</th>
                            <th>extension</th>
                            <th>prettySize</th>
                            <th>birthTime</th>
                            <th>changeTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({node: n}, index) => (
                            <tr key={index}>
                                <td>{n.relativePath}</td>
                                <td>{n.extension}</td>
                                <td>{n.prettySize}</td>
                                <td>{n.birthTime}</td>
                                <td>{n.changeTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Layout>
        </React.Fragment>
    )
}

export default ThirdPage