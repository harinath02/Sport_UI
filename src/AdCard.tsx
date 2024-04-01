import React from 'react'

function AdCard() {
  return (
    <div>
            <div className=''>
                {/* <img className='width-[48.09px] height-[25px] -top-[1163px] left-[780.85px] gap-10 px-[15px] py-[3px]' src='assets\adSticker.png' alt='adsticker'></img> */}
        <img className='p-3 w-[238.4px] h-[218px] -top-[1163px] left-[610.54px]' src='assets\adcard.png' alt=''></img>
        <button className='w-[47.78px] relative -top-[205px] -right-[83px] bg-black text-white '>Ad</button>
        <div className='flex pl-9 pt-4 font-inter text-lg font-semibold leading-30 text-left'>
            <h2>Advertisement title</h2>
        </div>
        <div className='p-3'>
        <div className='p-3  overflow-hidden flex justify-start gap-8 bg-gray-200 w-[217px] height-[54px] top-[37.06px] rounded-sm'>
            <p className='p-3 font-inter text-xs font-normal leading-19 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AdCard;
