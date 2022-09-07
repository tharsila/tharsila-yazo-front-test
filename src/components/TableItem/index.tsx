import React from 'react'
import * as C from './styles'

type Props = {
  text: string;
  type:string;
}

const TableItem = ({text, type}: Props) => {
  return (
    <C.Container>
      <C.Rec type={type}></C.Rec>
      <span>{text}</span>
    </C.Container>
  )
}

export default TableItem