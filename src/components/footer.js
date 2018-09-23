import React from 'react'

import {Footer} from '../data/cssAPI'

const CURRENT_YEAR = new Date().getFullYear();
const FooterComponent = () => (
    <Footer>
        <p>&copy; {CURRENT_YEAR} - </p>
            {footerItem.map(item => (
                <a
                    key={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.url}
                >
                    {item.title}
                </a>
            ))}
    </Footer>
)

const footerItem = [
    {
        title: 'Instagram',
        url: 'https://www.instagram.com/fahmiirsyadk/'
    },
    {
        title: 'Github',
        url: 'https://github.com/blubMe'
    },
    {
        title: 'View source',
        url: 'https://github.com/blubMe/blog'
    }
]

export default FooterComponent