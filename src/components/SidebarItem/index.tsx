import React from 'react'
import * as C from './styles'
type Props = {
  icon:string;
  text:string
}

const SidebarItem = ({icon, text}: Props) => {
  return (
    <C.MenuItem>
      <C.Icon src={`${icon}`}/>
      <span>{text}</span>
    </C.MenuItem>
  )
}

export default SidebarItem