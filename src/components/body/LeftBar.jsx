import React from 'react'
import User from '../../assets/image/User.png'
const LeftBar = () => {
  return (
    <>
    <div className='w-full max-w-[271px] h-[1168px] p-[16px] gap-[24px] bg-[#11132e]'>
      <div className='w-[239px] h-[66px] rounded-[12px] border-[1px] flex items-center justify-between p-[16px] bg-[#272c46] border-[#1d9bf0]'>
        <div className='max-w-[175px]  w-full h-[34px] gap-[8px] flex'>
          <img src={User} alt="user" />
          <div  className='w-[135px] h-[34px] gap-[4x] flex   flex-col text-[12px] text-[#fff]'>
            <span>Chaplean App</span>
            <span>Social media platform</span>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default LeftBar