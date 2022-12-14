import styled from "styled-components";

type PropsButton = {
  type?: string;
}

export const MenuItem = styled.div<PropsButton>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  margin-bottom: 15px;
  font-family: 'Lato', sans-serif;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    filter: brightness(150%);
  }

  ${props => {
    if (props.type === 'lightRed') {
      return `
      background: rgba(129, 27, 57, 0.1);
      color: rgba(129, 27, 57, 1);
      border-radius: 8px;
      `
    }
  }}

${props => {
    if (props.type === 'black') {
      return `
        background: #000000;
        color: #FFFFFF;
        padding: 10px 22px;
        border-radius: 4px;
      `
    }
  }}

${props => {
    if (props.type === 'white') {
      return `
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0px 3px 6px #FD9F2B2F;
        border-radius: 4px;
        padding: 5px 15px;
        margin-bottom: 0;
      `
    }
  }}
`

export const Icon = styled.img``
