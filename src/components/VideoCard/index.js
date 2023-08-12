import {Link} from 'react-router-dom'

import {formatDistanceStrict} from 'date-fns'

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

const VideoCard = props => {
  const {videoData} = props

  const {
    name,
    id,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoData
  const date = formatDistanceStrict(new Date(publishedAt), new Date(), {
    addSuffix: true,
  })

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
                  <ChannelName>{name}</ChannelName>
                  <Views>Views {viewCount}</Views>
                  <PublishedAt>{date}</PublishedAt>
                </Paragraph>
              </Description>
            </DetailsCard>
          </EachVideo>
        )
      }}
    </ModeContext.Consumer>
  )
}
export default VideoCard
