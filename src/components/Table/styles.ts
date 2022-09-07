import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 40px;  
`

export const Table = styled.table `
  width: 100%;
  font-family: Lato, sans-serif;

  th {
    text-align: left;
    font-size: 14px;
  }

  td {
    font-size: 12px;
    text-transform: capitalize;
  }

  td:nth-child(2) {
    font-family: Poppins, sans-serif;
  }

   th, td {
    border-bottom: 1px solid #0000001A;
    padding: 20px 0;
    font-weight: bold;
  }
  
`