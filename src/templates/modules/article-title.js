import React from 'react'
import {Alert,TextAdditional} from '../../data/cssAPI'

const ArticleTitle = ({title,timeToRead,date,old}) => (
    <React.Fragment>
        <h1>{title}</h1>
    {timeToRead > 1
        ? (
            <TextAdditional>{`On ${date} - ${timeToRead} mins read`}</TextAdditional>
            )
            : (
            <TextAdditional>{`On ${date} - ${timeToRead} min read`}</TextAdditional>
        )
    }
    {old ? (
        <Alert>
            This post is over a year old. Some of the content may be out of
            date.
        </Alert>
    ) : null}
    </React.Fragment>
)

export default ArticleTitle