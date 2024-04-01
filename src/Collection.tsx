import React, { FC } from 'react'
import CollectionCard from './CollectionCard';
import Eclipse from './Eclipse';


interface CollectionProps {
  dark:boolean,
 }

 const Collection:FC<CollectionProps>=(props):JSX.Element=> <>

    <div className='py-28'>

<div>
    <div className='font-Poppins text-[50px] font-bold leading-[52.5px]'>Collection Spotlight</div>
    <p className='p-8'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable<br/> experience. Grab yours today!</p>
</div>

    <div className='flex justify-center p-4'>
    <CollectionCard dark={props.dark}></CollectionCard>
    </div>

    </div>
  </>

export default Collection;
