import React from 'react'
import { Link } from 'gatsby'

import { MenuBar } from '../../data/cssAPI'


const ArticleBar = () => (
    <MenuBar>
        <Link to="/">
            <img alt="home-with-tree" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/house-with-garden_1f3e1.png"/>
            <span>Home</span>
        </Link>
        <Link to="/">
            <img alt="open-book" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/open-book_1f4d6.png" />
            <span>Learns</span>
        </Link>
        <Link to="/">
            <img alt="rainbow" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/rainbow_1f308.png" />
            <span>Category</span>
        </Link>
        <Link to="/">
            <img alt="chat-baloon" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/speech-balloon_1f4ac.png" />
            <span>Comments</span>
        </Link>
        <Link to="/about">
            <img alt="men" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/person-with-blond-hair_1f471.png" />
            <span>About me</span>
        </Link>
    </MenuBar>
)

export default ArticleBar