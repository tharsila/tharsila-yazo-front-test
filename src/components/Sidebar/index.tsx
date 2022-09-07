import React, { useState } from 'react'
import * as C from './styles'
import logo from '../../assets/logo.png'
import dashboard from '../../assets/dashboard.svg'
import projects from '../../assets/projects.svg'
import users from '../../assets/users.svg'
import config from '../../assets/config.svg'
import signOut from '../../assets/signOut.svg'
import SidebarItem from '../../components/SidebarItem'


const Sidebar = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <C.Sidebar>
      <img src={logo} className="logo" alt="logo da Yazo" />
      <nav>
        <div className="menuList">
          <SidebarItem icon={dashboard} text="Dashboard"/>
          <SidebarItem icon={projects} text="Meus projetos"/>
          <SidebarItem icon={users} text="Membros"/>
          <SidebarItem icon={config} text="Configurações"/>
        </div>
      </nav>
      <ul>
        <SidebarItem icon={signOut} text="Sair"/>
      </ul>
    </C.Sidebar>
    
  )
}

export default Sidebar