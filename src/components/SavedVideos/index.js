import {Component} from 'react'

import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBar from '../SideBar'
import VideosCard from '../VideosCard'
import ModeContext from '../../context/ModeContext'

import {
  Container,
  MainContainer,
  VideosList,
  SideCard,
  EmptyView,
  Image,
  Saved,
  Heading,
  Para,
  Banner,
  SavedVideosCard,
  Icon,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode, savedVideos} = value

          return (
            <Container mode={darkMode} data-testid="savedVideos">
              <Header />
              <MainContainer>
                <SideCard>
                  <SideBar />
                </SideCard>

                {savedVideos.length > 0 ? (
                  <SavedVideosCard>
                    <Banner data-testid="banner">
                      <Icon>
                        <MdPlaylistAdd />
                      </Icon>
                      <Saved>Saved Videos</Saved>
                    </Banner>
                    <VideosList>
                      {savedVideos.map(eachVideo => (
                        <VideosCard videoData={eachVideo} key={eachVideo.id} />
                      ))}
                    </VideosList>
                  </SavedVideosCard>
                ) : (
                  <EmptyView>
                    <Image
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                      alt="no saved videos"
                    />
                    <Heading>NO saved videos found</Heading>
                    <Para>You can save your videos while watching them</Para>
                  </EmptyView>
                )}
              </MainContainer>
            </Container>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}
export default SavedVideos
