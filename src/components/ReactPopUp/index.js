import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'

import SideBar from '../SideBar'

import {Container, Button, CloseBtn} from './styledComponents'

import './index.css'

const ReactPopUp = props => {
  const {mode} = props

  return (
    <div className="popup-container">
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
              <GrClose />
            </CloseBtn>
            <div className="card">
              <SideBar />
            </div>
          </Container>
        )}
      </Popup>
    </div>
  )
}
export default ReactPopUp
