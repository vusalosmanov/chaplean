import React from 'react'
import Search from '../../assets/image/Search.png'
const RIghtBar = () => {
    return (
        <>
            <div className='max-w-[270px] w-full h-[1168px] p-[16px] bg-[#11132e]'>
                <div className='w-[238px] flex items-center text-[#fff] h-[32px] rounded-[40px] py-[8px] px-[10px] gap-[8px] bg-[#272C46]'>
                    {/* <input type="text" placeholder='Search'  className='w-[238px] h-[32px] rounded-[40px] py-[8px] px-[10px] gap-[8px] bg-[#272c46]'/> */}
                    <img src={Search} alt="" className='text-[24px] text-[#000]' />
                    <span>Search</span>
                </div>
                <div className='h-[190px] py-[12px] gap-[4px]'>

                </div>
            </div>
        </>
    )
}

export default RIghtBar