import React, { FC } from 'react'

interface EcProps {
 dark:boolean,
}

const Eclipse:FC<EcProps>=(props):JSX.Element=> <>
  <div className=''>

    <div className={`w-14 h-6 bg-gradient-to-r from-#18282A to-#221A2C relative translate-x-12 right-[92px] -top-[14px] bottom-0 ${props.dark === true ? 'bg-[#111]' :'bg-[#F7F7F8]' } rounded-full`}></div>
    {/* <div className={`w-14 h-6 bg-gradient-to-r from-#18282A to-#221A2C   translate-x-12 left-[10px] top-[1600px] bottom-0 ${props.dark === true ? 'bg-[#111]' :'bg-[red]' } rounded-full`}></div> */}

  </div>
</>

export default Eclipse;
