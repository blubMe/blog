import styled, {css,injectGlobal} from 'styled-components'

import GraphikRegular from '../fonts/Graphik-400-Regular.otf'
import GraphikMedium from '../fonts/Graphik-500-Medium.otf'

injectGlobal`
  @font-face {
      font-family: 'Graphik Web';
      src: url(${GraphikRegular}) format('woff');
      font-weight: 400;
    }
    @font-face {
      font-family: 'Graphik Web';
      src: url(${GraphikMedium}) format('woff');
      font-weight: 500;
    }
    * {
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
    }
    html {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }
    body {
      font-family: 'Graphik Web', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
      min-height: 100vh;
    }
    a {
      text-decoration: none;
    }
    p {
      margin: 0;
      padding: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-rendering: optimizeLegibility;
    }
    pre {
      background: #eee;
      font-size: .9em;
      line-height: 1.6;
      margin-bottom: 1.6em;
      max-width: 100%;
      border-radius: 3px;
      padding: 1.6em;
      overflow: auto;
      code {
        color: #333;
      }
    }
    video {
      background: #eee;
    }
`

export const Root = styled.div`
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
  padding: 0 16px;
`

export const NavbarWrapper = styled.header`
  background-color: white;
  width: 100%;
  @media (max-width: 600px) {
    padding: 12px 0;
  }
  padding: 12px 0 24px;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: inset 0 -1px 0 #eee;
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  a {
    text-decoration: none;
    color: rgba(0, 3, 51, .76);
    font-size: 14px;
    font-weight: 500;
  }
  @media (max-width: 600px) {
    p {
        display: none;
    }
  }
  h3 {
    color: #000!important;
    margin-right: -64px;
  }
  ${props => props.extends && css`
    justify-content: center;
    padding-top: 12px;
    @media (max-width: 600px) {
      display: none;
    }
  `}
`
export const NavbarLists = styled.ul`
  display: inline-flex;
  padding: 0;
  list-style: none;
  margin: 0;
  display: inline-flex;
  li{
    margin: 0 5px;
  } a{
    text-decoration: none;
    color: rgba(0, 3, 51, .76);
    font-size: 14px;
    font-weight: 500;
    :hover {
      color: #5100F4;
    }
  }
`

export const Heroku = styled.div`
  height: 220px;
  background-color: white;
  padding: 24px 0 12px;
  margin-bottom: 32px;
  border-bottom: 1px solid #eee;
  position: relative;
  img{
    display: flex;
    margin: 0 auto;
    height: 100px;
  }
  @media (max-width: 600px) {
    div {
      bottom: 8px;
    }
  }
  div {
    bottom: 0;
    position: absolute;
    p {
      color: rgba(0, 3, 51, .76);
      font-size: 15px;
      line-height: 1.8em;
      margin-block-start: 1em;
      margin-block-end: 1em;
    }
  }
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: inherit;
  padding: 0px 0 1.45rem;
`

export const TitleSub3 = styled.h3`
  font-weight: 500;
  color: rgba(0, 3, 51, .76);
  @media (max-width: 600px) {
    font-size: 16px;
    margin: 0;
  }
`

export const PostMain = styled.main`
  width: 90%;
  @media (max-width: 600px) {
    width: 100%;
  }
`

export const Post = styled.article`
  display: flex;
  min-height: 100px;
  justify-content: space-between;
  width: 100%;
  margin: 24px 0 48px;
  @media (max-width: 600px) {
    h2 {
      font-size: 16px;
    } p {
      width: 250px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    img {
      width: 100px!important;
      height: 100px!important;
    } span {
      width: 200px;
    }
  }
  p,span,h2{
    margin:0;
    padding: 0;
  }
  p {
    color: rgba(0,0,0,.54)!important;
    line-height: 1.5em;
    margin-bottom: 12px;
    font-size: 15px;
    color: rgba(0, 3, 51, .76);
  }
  a {
    text-decoration: none;
  }
  span {
    color: rgba(0, 3, 51, .76);
    font-size: 12px;
    font-weight: 500;
  }
  h2 {
    line-height: 1.4em;
    margin-bottom: 12px;
    color: #000;
  }
`

export const PostTitle = styled.div`
  padding-right: 18px;
  position: relative;
  @media only screen
  and (min-device-width : 320px)
  and (max-device-width : 568px)
  and (orientation : portrait) {
    padding-right: 8px;
    max-width: 200px;
    word-break: break-word;
    p {
      font-size: 13px!important;
    }
  }
  @media (max-width: 600px){
    padding-right: 8px;
  }
  span {
    position: absolute;
    bottom: 0;
  }
`
export const PostThumbnail = styled.div`
  img {
    width: 148px;
    height: 148px;
    object-fit: cover;
  }
`

export const Aside = styled.aside`
  width: 40%;
  padding: 24px 0;
  position: sticky;
  @media (max-width: 700px) {
    display: none;
  }
`

export const AsideItem = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 3px;
  margin-bottom: 24px;
  max-height: 100px;
  background: #4A6FEB;
  padding: 32px 24px;
  box-shadow: 0 1px 0 rgba(0,0,0,.05), 0 1px 2px rgba(0,0,0,.05), 0 5px 15px rgba(0,0,0,.05);
`
export const AsideItemHeader = styled.div`
  color: white;
  -webkit-font-smoothing: antialiased;
`
export const AsideItemContent = styled.div`
  padding: 0 8px;
`

export const Article = styled.main`
  padding-top: 48px;
  max-width: 640px;
  margin: 0 auto;
  h1 {
      margin-top: 8px;
      font-size: 40px;
      line-height: 1.333em;
  }
  p {
      font-size: 1em;
      color: rgba(0,3,51,.76);
      line-height: 1.9em;
      margin-block-start: 1em;
      margin-block-end: 1em;
  }
  @media (max-width: 700px) {
    padding-top: 32px;
    p {
      margin: 12px 0;
    }
    h1 {
      font-size: 32px!important;
    }
    span {
      font-size: 13px!important;
    }
  }
  span {
    color: rgba(0,0,0,.54);
    font-weight: 500;
    font-size: 15px;
  }
`
export const ArticleContent = styled.article`
  padding-top: 32px;
  a {
    color: #5100F4;
    text-decoration: underline;
  }
`

export const ArticleFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  color: #5100F4;
  p {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    a {
      color: #5100F4;
    }
    text-overflow: ellipsis;
  }
`


export const Footer = styled.footer`
  display: flex;
  align-items: center;
  color: rgba(0, 3, 51, .76);
  padding: 12px 0;
  border-top: 1px solid #5100F4;
  font-size: 13px;
  font-weight: 500;
  p {
    margin-right: 8px;
  }
  a {
    margin-right: 8px;
    color: rgba(0, 3, 51, .76);
    text-decoration: none;
    :hover {
      color: #5100F4;
    }
  }
`