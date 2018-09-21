import styled, {css} from 'styled-components'

export const Root = styled.div`
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  padding: 0 16px;
`

export const NavbarWrapper = styled.header`
  background-color: white;
  width: 100%;
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
  h3 {
    color: #000!important;
  }
  ${props => props.extends && css`
    justify-content: center;
    padding-top: 12px;
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
  }
`

export const Heroku = styled.div`
  height: 180px;
  background-color: white;
  padding: 24px 0 12px;
  margin-bottom: 24px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  position: relative;
  img{
    display: flex;
    margin: 0 auto;
    height: 100px;
  }
  div {
    bottom: 0;
    position: absolute;
    p {
      color: rgba(0, 3, 51, .76);
      font-size: 15px;
      line-height: 1.8em;
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
`

export const Post = styled.article`
  width: 60%;
  margin: 24px 0 48px;
  p,span,h2{
    margin:0;
    padding: 0;
  }
  p {
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
    font-size: 14px;
    font-weight: 500;
  }
  h2 {
    line-height: 1.4em;
    margin-bottom: 12px;
    color: #000;
  }
`