import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import 'reactjs-popup/dist/index.css'
import {FiLogOut} from 'react-icons/fi'

import ModeContext from '../../context/ModeContext'

import {
  PopupContainer,
  PopupCard,
  Buttons,
  CancelBtn,
  ConfirmBtn,
  Logout,
  LogoutBtn,
  Paragraph,
} from './styledComponents'

const LogoutPopup = props => {
  const {history} = props
  return (
    <ModeContext.Consumer>
      {value => {
        const {darkMode, changeTab} = value
        const logoutBtn = () => {
          Cookies.remove('jwt_token')
          history.replace('/login')
          changeTab('HOME')
        }
        return (
          <PopupContainer>
            <Popup
              modal
              trigger={
                <div>
                  <Logout mode={darkMode} type="button">
                    <FiLogOut />
                  </Logout>
                  <LogoutBtn mode={darkMode} type="button">
                    Logout
                  </LogoutBtn>
                </div>
              }
            >
              {close => (
                <>
                  <PopupCard mode={darkMode}>
                    <Paragraph mode={darkMode}>
                      Are you sure you want to logout?
                    </Paragraph>

                    <Buttons>
                      <CancelBtn onClick={() => close()} type="button">
                        Cancel
                      </CancelBtn>
                      <ConfirmBtn onClick={logoutBtn} type="button">
                        Confirm
                      </ConfirmBtn>
                    </Buttons>
                  </PopupCard>
                </>
              )}
            </Popup>
          </PopupContainer>
        )
      }}
    </ModeContext.Consumer>
  )
}
export default withRouter(LogoutPopup)
