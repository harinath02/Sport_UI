import React, { FC } from 'react';
import { sportcards } from './sportcards';
import Eclipse from './Eclipse';

interface CardType {
  imageUrl: string;
  title: string;
  schedule: string;
  description: string;
  button: string;
}

interface CollectioncardcProps {
  dark:boolean,
 }

const CollectionCard:FC<CollectioncardcProps>=(props):JSX.Element=> 
<>

    <div className='flex justify-center'>
        {sportcards.map((card: CardType, index: number) => (
          <div key={index} className=' bg-white m-4  w-[257px] h-[625px] -top-[269px] left-[109px] gap-0'>
            {/* Render each card individually */}
            <div className='overflow-hidden p-3 w-full h-[401.25px] -top-[253.08px] -left-[176px] gap-0'>
              <img src={card.imageUrl} alt='' className='w-full h-full' />
            </div>
            <div className='border-t border-dashed border-[#5b5b5e]'></div>
            <Eclipse dark={props.dark}></Eclipse>
            <div className='flex p-2 justify-center'>
              <h2>{card.title}</h2>
            </div>
            <div className='p-3'>
              <h2 className='text-black font-poppins text-base font-medium leading-33 text-center'>{card.schedule}</h2>
              <p className='font-inter text-sm font-normal leading-28 text-center text-[#525965]' dangerouslySetInnerHTML={{ __html: card.description }}></p>
              {/* Use 'dangerouslySetInnerHTML' to render HTML content */}
              <h2 className='my-4 py-4 w-full bg-black text-white'>{card.button}</h2>
            </div>
          </div>
        ))}
    </div>
    </>


export default CollectionCard;
