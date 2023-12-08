import styled from "styled-components";

import { NavLink } from "react-router-dom";


export const StyledHeaderWrapper = styled.header`
  background-color: #F7F7FB;
  border-bottom: 1px solid #E0E0E0;

  margin-bottom: 40px;
`

export const StyledNavWrapper = styled.div`
  padding: 10px 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
`

export const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 41px;
`

export const StyledNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0px
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 10px;
  border-radius: 10px;

  &.active {
    background-color: #3470FF;
    color: white;
  }

  &:hover, &:focus {
    outline: 2px solid #0B44CD;
    &.active { 
      outline: none;
      background-color: #0B44CD;
    }
  }
`

