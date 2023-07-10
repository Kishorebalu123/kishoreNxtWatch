import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};
`
export const MainContainer = styled.div``
export const GamingContainer = styled.div`
  display: flex;
`
export const GamingCard = styled.div`
  max-height: 86vh;
  overflow-y: auto;
`

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: 0px 20px 0px 20px;
  font-size: 30px;
  padding: 8px 0px 10px 10px;
  background-color: #d7dfe9;
  color: red;
`

export const SideCard = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const VideosContainer = styled.div``
export const VideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
`
export const EachItem = styled.li`
  text-decoration: none;
  margin-left: 20px;
`
export const ThumbnailImage = styled.img`
  width: 200px;
`
export const Title = styled.p`
  color: ${props => (props.mode ? '#ffffff' : '#000000')};
`
export const ViewsCount = styled.p`
  color: gray;
  width: 120px;
`

export const FailureContainer = styled.div``
export const FailureImage = styled.img``
export const Heading = styled.h1``
export const Content = styled.p``
export const RetryBtn = styled.button``

export const Game = styled.h1``

export const Banner = styled.div`
  display: flex;
  align-items: center;
  background-color: #ebebeb;
`
