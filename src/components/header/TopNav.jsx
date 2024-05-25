import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/image/Vector.png'
const TopNav = () => {
    return (
        <>
            <div className='w-full flex items-center justify-between px-[16px] h-[56px] bg-[#1f223b] text-[#eeeeee] cursor-pointer '>
                <div className='flex items-center w-full max-w-[174px] h-[30px] gap-[9.28px]'>
                    <img src={Logo} alt="logo" className='w-[47.56px] h-[30.74px]' />
                    <span className='w-[117.16px] h-[26.42px]'>Chaplean</span>
                </div>
                <div className='flex items-center  justify-end w-full max-w-[556px] h-[30px] gap-[32px] text-[14px] leading-[14px]  tracking-normal '>
                    <span className='hover:text-[#1D9BF0] hover:underline '>What is Chaplean</span>
                    <span className='hover:text-[#1D9BF0] hover:underline'>Our difference</span>
                    <span className='hover:text-[#1D9BF0] hover:underline'>Pricing</span>
                    <span className='hover:text-[#1D9BF0] hover:underline'>Docs</span>
                    <div className='max-w-[112px] w-full h-[30px] rounded-[40px] px-[16px] py-[8px] gap-[8px] bg-[#1D9BF0E5] text-center' >
                        <button className='text-[14px] text-[#141526] '>Contact Us</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav