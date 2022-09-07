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
    <C.Container>
      <C.Sidebar>
        <img src={logo} className="logo" alt="logo da Yazo" />
        <nav>
          <ul>
            <SidebarItem icon={dashboard} text="Dashboard"/>
            <SidebarItem icon={projects} text="Meus projetos"/>
            <SidebarItem icon={users} text="Membros"/>
            <SidebarItem icon={config} text="Configurações"/>
          </ul>
        </nav>
        <ul>
          <SidebarItem icon={signOut} text="Sair"/>
        </ul>
      </C.Sidebar>
    </C.Container>
  )
}

export default Sidebar