import styled from 'styled-components'

export const EachVideo = styled.li`
  @media screen and (min-width: 576px) {
    display: flex;

    margin: 20px 30px 20px 15px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100vw;
  @media screen and (min-width: 576px) {
    width: 300px;
  }
`

export const DetailsCard = styled.div`
  display: flex;
  margin: 10px 10px 20px 10px;
`

export const Description = styled.div`
  margin-top: 0;
  @media screen and (min-width: 576px) {
    width: auto;
  }
`

export const ProfileLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const Title = styled.p`
  margin: 0;
  color: ${props => (props.mode ? '#ffffff' : '#000000')};
  font-size: 15px;
  text-decoration: none;
`
export const Paragraph = styled.div`
  display: flex;
  color: #606060;
  padding: 0;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  @media screen and (min-width: 576px) {
    width: 150px;
    flex-wrap: wrap;
  }
`

export const ChannelName = styled.p`
  font-size: 12px;
  @media screen and (min-width: 576px) {
    margin-right: 90px;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 13px;
  }
`

export const Views = styled.p`
  font-size: 12px;
  @media screen and (min-width: 576px) {
    list-style-type: none;
  }
`

export const PublishedAt = styled.p`
  font-size: 12px;
`
