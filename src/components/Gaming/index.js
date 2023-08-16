import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideBar from '../SideBar'
import ModeContext from '../../context/ModeContext'

import {
  Container,
  GamingContainer,
  GamingCard,
  Icon,
  SideCard,
  VideosContainer,
  VideosList,
  FailureContainer,
  FailureImage,
  Heading,
  Content,
  RetryBtn,
  EachItem,
  ThumbnailImage,
  Title,
  ViewsCount,
  Game,
  Banner,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videosData: [],
  }

  componentDidMount() {
    this.getVideosApi()
  }

  getVideosApi = async () => {
    const token = Cookies.get('jwt_token')

    this.setState({apiStatus: apiConstants.inProgress})
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const url = `https://apis.ccbp.in/videos/gaming`

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosData: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <ModeContext>
      {value => {
        const {darkMode} = value
        return (
          <FailureContainer>
            <FailureImage
              src={
                darkMode
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <Heading>Oops! Something Went Wrong</Heading>
            <Content>
              We are having some trouble to complete your request. Please try
              again
            </Content>
            <RetryBtn type="button" onClick={this.getVideosApi}>
              Retry
            </RetryBtn>
          </FailureContainer>
        )
      }}
    </ModeContext>
  )

  renderSuccessView = () => {
    const {videosData} = this.state

    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <GamingCard>
              <Banner data-testid="banner">
                <Icon>
                  <SiYoutubegaming />
                </Icon>
                <Game>Gaming</Game>
              </Banner>
              <VideosList>
                {videosData.map(eachVideo => {
                  const {id, thumbnailUrl, title, viewCount} = eachVideo
                  return (
                    <Link to={`/videos/${id}`}>
                      <EachItem key={id}>
                        <ThumbnailImage
                          src={thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <Title mode={darkMode}>{title}</Title>
                        <ViewsCount>{viewCount} Watching Worldwide</ViewsCount>
                      </EachItem>
                    </Link>
                  )
                })}
              </VideosList>
            </GamingCard>
          )
        }}
      </ModeContext.Consumer>
    )
  }

  renderVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccessView()

      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.inProgress:
        return this.renderLoadingView()

      default:
        return null
    }
  }

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <Container mode={darkMode} data-testid="gaming">
              <Header />
              <GamingContainer>
                <SideCard>
                  <SideBar />
                </SideCard>
                <VideosContainer>{this.renderVideos()}</VideosContainer>
              </GamingContainer>
            </Container>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}
export default Gaming
