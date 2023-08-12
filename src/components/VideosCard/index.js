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

const VideosCard = props => {
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
          <Link to={`/videos/${id}`}>
            <EachVideo>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />

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
          </Link>
        )
      }}
    </ModeContext.Consumer>
  )
}
export default VideosCard
