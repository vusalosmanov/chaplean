import React from 'react'
import Logo from '../../assets/image/Vector.png'
import Download from '../../assets/image/download.png'
const Footer = () => {
    return (
        <>
            <div className='w-full flex items-center justify-between py-[56px] px-[74px] bg-[#1f223b] h-[300.42px]'>
                <div className='w-full  h-[188.43px] gap-[32px] '>
                    <div className='flex items-center w-[217.9px] h-[38.42px] gap-[12px]  text-[#eeeeee]'>
                        <img src={Logo} alt="logo" className='w-[47.56px] h-[30.74px]' />
                        <span className='w-[117.16px] h-[26.42px]'>Chaplean</span>
                    </div>
                    <div className='w-[109px] h-[118px] gap-[12px] text-[#bbbbbb] text-[14px] mt-[32px]'>
                        <ul>
                            <li>What is Chaplean</li>
                            <li>Our Difference</li>
                            <li>Pricing</li>
                            <li>Docs</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className='w-[179px] h-[56px] rounded-[64px] border-[1px] py-[16px] px-[32px] gap-[12px]  flex items-center justify-center bg-[#292C3D] border-[#1D9BF0] text-[#98a0a8] text-[18px]'>
                    <img src={Download} alt="download" className='w-[24px] h-[24px]' />
                    <button>Download</button>
                </div>
            </div>
            <div className='h-[28px] w-full py-[8px] gap-[8px] flex items-center justify-center bg-[#11132e]'>
                <span className='text-[12px] text-[#98a0a8]'>Privacy & Policy - Cookies</span>
            </div>
        </>
    )
}

export default Footer