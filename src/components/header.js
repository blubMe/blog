import React from 'react'
import { Link } from 'gatsby'

import { NavbarWrapper,Navbar,NavbarLists } from '../data/cssAPI'

const items = [
  {
    title: 'Store',
    url: '/store'
  },
  {
    title: 'About',
    url: '/about'
  }
]

const itemsCategory = [
  {
    title: 'Learn',
    url: '/learn'
  },
  {
    title: 'Lifestyle',
    url: '/category/tags/lifestyle'
  },
  {
    title: 'Tech',
    url: '/category/tags/technology'
  },
  {
    title: 'Programming',
    url: '/category/tags/programming'
  },
]

const Header = ({ siteTitle }) => (
  <NavbarWrapper>
      <Navbar>
      <p><Link to="/changelogs">
        Changelogs
      </Link></p>
      <Link to="/">
        <h3>{siteTitle}</h3>
      </Link>
        <NavbarLists >
          {items.map(t => (
            <li key={t.title}>
              <Link to={t.url}>{t.title}</Link>
            </li>
          ))}
        </NavbarLists>
      </Navbar>
      <Navbar extends>
        <NavbarLists>
          {itemsCategory.map(t => (
              <li key={t.title}>
                <Link to={t.url}>{t.title}</Link>
              </li>
            ))}
        </NavbarLists>
      </Navbar>
  </NavbarWrapper>
)

export default Header
