import React from 'react'

const ModeContext = React.createContext({
  //  savedVideos: [],
  changeMode: () => {},
  changeTab: () => {},
  addToSavedVideos: () => {},
})
export default ModeContext
