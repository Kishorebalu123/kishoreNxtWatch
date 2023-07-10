import {Link} from 'react-router-dom'

// import {formatDistanceToNow} from 'date-fns'

import ModeContext from '../../context/ModeContext'

import {
  EachVideo,
  ThumbnailImage,
  DetailsCard,
  Description,
  ProfileLogo,
  ChannelName,
  PublishedAt,
  Views,
  Title,
  Paragraph,
} from './styledComponents'

const VideosCard = props => {
  const {videoData} = props

  const {
    channelName,
    id,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoData

  return (
    <ModeContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <EachVideo>
            <Link to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            </Link>
            <DetailsCard>
              <ProfileLogo src={profileImageUrl} alt="channel logo" />
              <Description>
                <Title mode={darkMode}>{title}</Title>
                <Paragraph>
                  <ChannelName>{channelName}</ChannelName>
                  <Views>Views {viewCount}</Views>
                  <PublishedAt>{publishedAt}</PublishedAt>
                </Paragraph>
              </Description>
            </DetailsCard>
          </EachVideo>
        )
      }}
    </ModeContext.Consumer>
  )
}
export default VideosCard
