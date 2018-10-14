import React from 'react'
import {Article,ArticleContent,PostImg} from '../../data/cssAPI'
import ArticleTitle from './article-title'

const ArticlePost = ({data,old,img}) => (
    <React.Fragment>
        <PostImg src={img.src + `&fm=jpeg&fl=progressive`} srcSet={img.srcSet} />
        <Article>
            <ArticleTitle title={data.title} old={old} date={data.createdAt} timeToRead={data.article.childMarkdownRemark.timeToRead}/>
            <ArticleContent dangerouslySetInnerHTML={{ __html: data.article.childMarkdownRemark.html}}/>
        </Article>
    </React.Fragment>
)

export default ArticlePost