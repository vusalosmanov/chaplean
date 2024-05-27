import React from 'react'
import LeftBar from './LeftBar'
import MiddleBody from './MiddleBody'
import RIghtBar from './RIghtBar'

const Body = () => {
  return (
    <>
    <div className='flex items-center justify-center'>
        <LeftBar/>
        <MiddleBody/>
        <RIghtBar/>
    </div>
    </>
  )
}

export default Body