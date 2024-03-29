import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const Container = styled.div`
  background-color: ${props => (props.mod ? '#313131' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CloseBtn = styled.button`
  color: ${props => props.mod && '#ffffff'};
  font-size: 20px;
  font-weight: 400;
  font-family: 'Roboto';
  padding: 8px 15px 8px 15px;
  margin: 8px;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: transparent;
`
export const Button = styled.button`
  color: ${props => (props.mod ? '#ffffff' : '#000000')};
  background-color: transparent;
  font-size: 20px;
  border: 0;
`
export const Menu = styled.div``
