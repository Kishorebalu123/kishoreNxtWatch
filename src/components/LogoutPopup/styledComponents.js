import styled from 'styled-components'

export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const PopupCard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.mode ? '#383838' : '#ffffff')};
`
export const Paragraph = styled.p`
  color: ${props => (props.mode ? '#ffffff' : '#00306e')};
`

export const Buttons = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

export const CancelBtn = styled.button`
  height: 40px;
  width: 80px;
  background-color: transparent;
  border: 1px solid gray;
  color: gray;
  border-radius: 3px;
`
export const ConfirmBtn = styled(CancelBtn)`
  background-color: #3b82f6;
  color: #ffffff;
  border: 0;
`

export const LogoutBtn = styled.button`
  border: 1px solid ${props => (props.mode ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  color: ${props => (props.mode ? '#ffffff' : '#3b82f6')};
  height: 30px;
  width: 80px;
  border-radius: 3px;
  margin-bottom: 15px;

  font-weight: bold;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const Logout = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.mode && '#ffffff'};
  font-size: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
