import React from 'react'
import * as C from './styles'
type Props = {
  icon:string;
  text?:string;
  type?:string;
}

const SidebarItem = ({icon, text, type}: Props) => {
  return (
    <C.MenuItem type={type}>
      <C.Icon src={`${icon}`}/>
      <span>{text}</span>
    </C.MenuItem>
  )
}

export default SidebarItem