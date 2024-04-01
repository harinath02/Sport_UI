import Card from './Card';


function SportCard() {
  return (
    <div className='m-16'>
      <div className='pl-4 color-[#000000] p-8 flex justify-start font-poppins text-24 font-bold leading-36 text-left'> 
         <h1>Sports</h1> 
      </div>
      <div className='flex justify-between'>
        <Card ></Card>
      </div>
    </div>
  )
}

export default SportCard;
