import React from 'react'
import background from './components/background'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
     <background/>
      <Foreground/>
    </div>
  )
}

export default App
