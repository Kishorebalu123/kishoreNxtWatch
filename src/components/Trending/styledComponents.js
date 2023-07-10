import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};
`
export const MainContainer = styled.div``
export const TrendingContainer = styled.div`
  display: flex;
`
export const TrendingCard = styled.div`
  max-height: 86vh;
  overflow-y: auto;
`
export const SideCard = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const VideosContainer = styled.div`
  width: 100vw;
`
export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
`
export const Trend = styled.h1``

export const FailureContainer = styled.div``
export const FailureImage = styled.img``
export const Heading = styled.h1``
export const Content = styled.p``
export const RetryBtn = styled.button``

export const Banner = styled.div`
  display: flex;
  align-items: center;
  background-color: #ebebeb;
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
