import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};
`
export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
`
export const SideCard = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const VideoDetailsContainer = styled.div`
  height: 84vh;
  width: 100vw;
  overflow-y: auto;
`
export const ReactPlayerContainer = styled.div``
export const SubContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`
export const DetailsContainer = styled.div``
export const Title = styled.p`
  margin-left: 10px;
  color: ${props => props.mode && '#ffffff'};
`
export const ViewsContainer = styled.div`
  display: flex;
  margin-left: 10px;
  gap: 10px;
  color: ${props => props.mode && '#64748b'};
`
export const Views = styled.p``
export const Time = styled.p``
export const ReactionContainer = styled.ul`
  display: flex;
  padding: 0;
  margin-left: 10px;
  margin-right: 10px;
  gap: 10px;
`
export const Like = styled.button`
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border: 0;
`

export const Dislike = styled.button`
  color: ${props => (props.liked ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border: 0;
`
export const Save = styled.div`
  display: flex;
`
export const SaveBtn = styled.button`
  color: ${props => (props.saved ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border: 0;
`
export const Line = styled.hr`
  margin-left: 10px;
  margin-right: 10px;
  color: ${props => props.mode && 'red'};
  border: ;
`
export const ChannelContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 10px;
`
export const ChannelDetails = styled.div``
export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
`

export const ChannelName = styled.p`
  color: ${props => props.mode && '#ffffff'};
`

export const Subscribers = styled.p`
  color: ${props => props.mode && '#64748b'};
`
export const Description = styled.p`
  color: ${props => props.mode && '#ffffff'};
  margin-left: 10px;
`

export const FailureContainer = styled.div``
export const FailureImage = styled.img``
export const Heading = styled.h1``
export const Content = styled.p``
export const RetryBtn = styled.button``
