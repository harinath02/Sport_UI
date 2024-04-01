import React, { FC } from 'react'

interface EcProps {
 dark:boolean,
}

const Eclipse2:FC<EcProps>=(props):JSX.Element=> <>
  <div className=''>

    <div className={`w-14 h-6 bg-gradient-to-r from-#18282A to-#221A2C relative translate-x-12 right-[350px] top-[405px] z-12 bottom-0 ${props.dark === true ? 'bg-[#111]' :'bg-[#5555e9]' } rounded-full`}></div>
    {/* <div className={`w-14 h-6 bg-gradient-to-r from-#18282A to-#221A2C   -translate-x-[300px] left-[0px] -my-[300px]top-[100px] bottom-0 ${props.dark === true ? 'bg-[#111]' :'bg-[red]' } rounded-full`}></div> */}

  </div>
</>

export default Eclipse2;
