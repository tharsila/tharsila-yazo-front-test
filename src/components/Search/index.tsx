import React from 'react'
import * as C from './styles'
import SidebarItem from '../SidebarItem'
import filter from '../../assets/filter.svg'
import search from '../../assets/search.svg'
import plus from '../../assets/plus.svg'

const Search = () => {
  return (
    <>
      <C.Container>
        <h2>Meus Projetos</h2>
        <C.Actions>
          <div className="actionsContent">
            <div className="filter">
              <SidebarItem icon={filter} text='Filtros'/>
            </div>
            <C.Input>
                <SidebarItem icon={search} />
                <input type="text" placeholder="Pesquisar projeto"/>
            </C.Input>
          </div>
          <div className="btn">
            <SidebarItem icon={plus} text='Novo projeto' />
          </div>
        </C.Actions>
      </C.Container>
    </>
  )
}

export default Search