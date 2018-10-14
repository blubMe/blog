import React from 'react'
import Link from "gatsby-link"
import {Post,PostTitle,PostThumbnail} from '../../data/cssAPI'

const PostListing = ({post,timeToRead,date,img}) => (
    <Post>
        <PostTitle>
            <Link to={post.slug}>
                <h2>{post.title}</h2>
            </Link>
            <Link to={post.slug}>
                <p>{post.article.childMarkdownRemark.excerpt}</p>
            </Link>
            { timeToRead > 1 ? (<span>{date} - {timeToRead} mins read</span>)
            : (<span>{date} - {timeToRead} min read</span>)
            }
        </PostTitle>
        <PostThumbnail>
            <img src={img.fluid.srcWebp + `&fl=progressive`} srcSet={img.fluid.srcSetWebp} id={img.id} alt=""/>
        </PostThumbnail>
    </Post>
)

export default PostListing