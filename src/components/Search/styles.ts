import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 40px;

  h2 {
    font-weight: bold;
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 16px;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  .actionsContent {
    display: flex;
    gap: 24px; 
  }

  .filter {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
  }

  .filter div {
    margin-bottom: 0;
    padding: 5px 12px;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000;
    color: #FFFFFF;
    padding: 10px 22px;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn div {
    margin-bottom: 0;
  }

`
export const Input = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #000000;
  width: 300px;

  div {
    margin-bottom: 0;
  }
  input {
    background: transparent;
    outline: none;
    border: none;
    width: 100%;
    color: #8D9DA2;
    opacity: 0.57;

    &::placeholder {
      color: #000000;
    }
  }

`
