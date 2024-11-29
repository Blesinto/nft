import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Category = () => {
  return (
    <div className='md:px-[10rem] md:py-[4rem]'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Collectibles</h2>
      <Carousel>
        <CarouselContent className='flex'>
          <CarouselItem className=' basis-3/3 w-1/2 md:basis-1/2 lg:basis-1/3 flex flex-col items-center bg-purple-200 text-white p-4 rounded-lg mx-2'>
            {' '}
            <Art />
          </CarouselItem>
          <CarouselItem className='basis-3/3 w-1/2 md:basis-1/2 lg:basis-1/3 flex flex-col items-center bg-purple-800 text-white p-4 rounded-lg mx-2'>
            <Collect />
          </CarouselItem>
          <CarouselItem className=' basis-3/3 w-1/2 md:basis-1/2 lg:basis-1/3 flex flex-col items-center bg-purple-800 text-white p-4 rounded-lg mx-2'>
            <Vitual />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='absolute left-0 top-1/2 transform -translate-y-1/2'>
          &lt;
        </CarouselPrevious>
        <CarouselNext className='absolute right-0 top-1/2 transform -translate-y-1/2'>
          &gt;
        </CarouselNext>
      </Carousel>
    </div>
  );
};

const Art = () => {
  return (
    <>
      <div className='flex justify-between gap-4 '>
        <div className='grid grid-col-1'>
          <img
            src='./src/assets/Art-1.png'
            alt='Collectible 1'
            className='w-full h-auto rounded-lg mb-2'
          />
          <img
            src='./src/assets/Art-2.png'
            alt='Collectible 1'
            className='w-full h-auto rounded-lg mb-2'
          />
        </div>
        <div className='grid grid-col-1'>
          <img
            src='./src/assets/Art-3.png'
            alt='Collectible 1'
            className='w-full h-auto rounded-lg mb-2'
          />
        </div>
      </div>
      <div>
        <h2>Art</h2>
      </div>
    </>
  );
};
const Vitual = () => {
  return (
    <>
      <div className='flex justify-between gap-4 '>
        <div className='grid grid-col-1'>
          <img
            src='./src/assets/Art-1.png'
            alt='Collectible 1'
            className='w-full h-auto rounded-lg mb-2'
          />
          <img
            src='./src/assets/Art-2.png'
            alt='Collectible 1'
            className='w-full h-auto rounded-lg mb-2'
          />
        </div>
        <div className='grid grid-col-1'>
          <img
            src='./src/assets/Art-3.png'
            alt='Collectible 1'
            className='w-full h-auto rounded-lg mb-2'
          />
        </div>
      </div>
      <div>
        <h2>Virtual Worlds & Metaverse</h2>
      </div>
    </>
  );
};

const Collect = () => {
  return (
    <>
      <div className='flex justify-between gap-4 '>
        <div className='grid grid-col-1'>
          <img
            src='./src/assets/Art-1.png'
            alt='Collectible 1'
            className='w-full h-auto rounded-lg mb-2'
          />
          <img
            src='./src/assets/Art-2.png'
            alt='Collectible 1'
            className='w-full h-auto rounded-lg mb-2'
          />
        </div>
        <div className='grid grid-col-1'>
          <img
            src='./src/assets/Art-3.png'
            alt='Collectible 1'
            className='w-full h-auto rounded-lg mb-2'
          />
        </div>
      </div>
      <div>
        <h2>Collectibles</h2>
      </div>
    </>
  );
};

export default Category;
