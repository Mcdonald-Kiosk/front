import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Global } from '@emotion/react'
import { global } from "./styles/global"

function App() {
    return (
    <>
      <Global styles={global}>
      </Global>
    </>
  )
}

export default App
