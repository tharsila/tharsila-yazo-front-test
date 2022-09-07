import styled from 'styled-components'

type PropsTableItem = {
  type:string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
export const Rec = styled.div<PropsTableItem>`
  
  ${props => {
    if (props.type === 'wine') {
      return `
        background: #811B39;
        width: 40px;
        height: 40px;
        border-radius: 8px;
      `
    }

    if (props.type === 'yellow') {
      return `
        background: #FFA00C;
        width: 40px;
        height: 40px;
        border-radius: 8px;
      `
    }

    if (props.type === 'concluded') {
      return `
        background: #00C07F;
        width: 8px;
        height: 8px;
        border-radius: 50%;
      `
    }

    if (props.type === 'unConcluded') {
      return `
        background: #FCC325;
        width: 8px;
        height: 8px;
        border-radius: 50%;
      `
    }
    
  }}
` 