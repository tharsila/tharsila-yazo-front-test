import React from 'react'
import SidebarItem from '../SidebarItem'
import TableItem from '../TableItem'
import * as C from './styles'
import dots from '../../assets/dots.svg'


interface InfoTable {
  name: string;
  status: string;
  product: string;
  startProject: string;
  finishProject: string;
}
const info: Array<InfoTable> = [
  {
    name: 'Pokedex',
    status: 'Desenvolvimento',
    product: 'Web',
    startProject: '26/08/2022',
    finishProject: '-',

  },

  {
    name: 'Uber Clone',
    status: 'Concluído',
    product: 'Aplicativo',
    startProject: '01/08/2022',
    finishProject: '01/08/2023',
  },

  {
    name: 'Pokedex',
    status: 'Desenvolvimento',
    product: 'Web',
    startProject: '26/08/2022',
    finishProject: '-',
  },

  {
    name: 'Uber Clone',
    status: 'Concluído',
    product: 'Aplicativo',
    startProject: '01/08/2022',
    finishProject: '01/08/2023',
  },

  {
    name: 'Pokedex',
    status: 'Desenvolvimento',
    product: 'Web',
    startProject: '26/08/2022',
    finishProject: '-',
  },

  {
    name: 'Uber Clone',
    status: 'Concluído',
    product: 'Aplicativo',
    startProject: '01/08/2022',
    finishProject: '01/08/2023',
  },

  {
    name: 'Pokedex',
    status: 'Desenvolvimento',
    product: 'Web',
    startProject: '26/08/2022',
    finishProject: '-',
  },

];

const Table = () => {
 
  return (
    <C.Container>
      <C.Table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Projeto</th>
            <th>Status</th>
            <th>Produto(s)</th>
            <th>Início do projeto</th>
            <th>Término do projeto</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {info.map((item) => (
            <tr>
              <td><input type="checkbox" /></td>
              <td><TableItem type={item.status === 'Desenvolvimento' ? 'wine' : 'yellow'} text={item.name}/></td>
              <td><TableItem type={item.status === 'Desenvolvimento' ? 'unConcluded' : 'concluded'} text={item.status}/></td>
              <td>{item.product}</td>
              <td>{item.startProject}</td>
              <td>{item.finishProject}</td>
              <td><SidebarItem icon={dots} type='white' /></td>
            </tr>
          ))}
        </tbody>
      </C.Table>
    </C.Container>
  )
}

export default Table