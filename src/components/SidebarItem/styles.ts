import styled from "styled-components";


export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 25px 16px 16px;
  margin-bottom: 15px;
  border-radius: 8px;
  cursor: pointer;

  &:nth-child(2){
    background: rgba(129, 27, 57, 0.1);
    color: rgba(129, 27, 57, 1);
  }
`

export const Icon = styled.img`

`