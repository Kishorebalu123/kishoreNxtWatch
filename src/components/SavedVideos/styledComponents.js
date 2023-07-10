import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};
`
export const MainContainer = styled.div`
  display: flex;
  width: 100vw;
`

export const SavedVideosCard = styled.div`
  max-height: 86vh;
  overflow-y: auto;
  width: 100%;
`
export const SideCard = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const EmptyView = styled.div``
export const Image = styled.img`
  width: 25%;
`
export const Heading = styled.h1``
export const Para = styled.p``

export const Saved = styled.h1``

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
