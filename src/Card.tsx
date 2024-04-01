import React from 'react'
import { cards } from './sportcards';
import AdCard from './AdCard';

function Card() {

interface CardType {
    imageUrl: string;
    title: string;
    event: string;
    totalEvents:string;
    sport: string;
    sportName:string;
  }

  return (
    <div className='flex justify-between p-4 gap-4'>
      {cards.map((card: CardType, index: number) => (
      <div className='w-[238.53px] h-[511px] -top-[1173px] bg-white -left-[410px] gap-0 '>
        <img className='overflow-hidden p-3 w-[238.4px] h-[385.31px]' src={card.imageUrl} alt=''></img>
        <div className='flex p-2'>
            <h2>{card.title}</h2>
        </div>
        <div className='p-3'>
        <div className='p-2  overflow-hidden flex justify-start gap-8 bg-gray-200 w-[217px] height-[54px] top-[37.06px] rounded-sm'>
            <div><h2><span className='font-inter font-normal text-[12px]'>{card.event}</span><br/><span className='font-medium text-sm font-inter leading-17'>{card.totalEvents}</span></h2></div>
           <div><h2><span className='font-inter font-normal text-[12px] pr-3'>{card.sport}</span><br/><span className='font-semibold pl-5'>{card.sportName}</span></h2></div>
        </div>
        </div>
      </div>
      ))}
      <div className='w-[238.53px] h-[511px] -top-[1173px] bg-white -left-[410px] gap-0 '>
     <AdCard></AdCard>
     </div>
    </div>
  )
}

export default Card;
