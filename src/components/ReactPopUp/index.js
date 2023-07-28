import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import 'reactjs-popup/dist/index.css'
import SideBar from '../SideBar'

import {
  MenuContainer,
  Menu,
  Container,
  Button,
  CloseBtn,
} from './styledComponents'

const ReactPopUp = props => {
  const {mode} = props

  return (
    <MenuContainer>
      <Popup
        modal
        trigger={
          <Button mod={mode} type="button">
            <GiHamburgerMenu />
          </Button>
        }
      >
        {close => (
          <Container mod={mode}>
            <CloseBtn mod={mode} type="button" onClick={() => close()}>
              <AiOutlineClose />
            </CloseBtn>
            <Menu>
              <SideBar />
            </Menu>
          </Container>
        )}
      </Popup>
    </MenuContainer>
  )
}
export default ReactPopUp
