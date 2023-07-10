import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.mod ? '#313131' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Button = styled.button`
  font-size: 20px;
  font-weight: 400;
  font-family: 'Roboto';
  padding: 8px 15px 8px 15px;
  margin: 8px;
  border: none;
  border-radius: 4px;
  outline: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: transparent;
  color: ${props => (props.mod ? '#ffffff' : '#000000')};
`
export const CloseBtn = styled(Button)``
