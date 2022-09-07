import styled from "styled-components";

type MenuItemProps = {
  padding: string
}

export const MenuItem = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 ;
  margin-bottom: 15px;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Lato', sans-serif;

  &:nth-child(2){
    background: rgba(129, 27, 57, 0.1);
    color: rgba(129, 27, 57, 1);
  }
`

export const Icon = styled.img``