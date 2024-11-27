const Art = () => {
  return (
    <div className=' text-white md:px-[10rem] md:py-[4rem]'>
      <div className='mb-[5rem]'>
        <h2 className='text-2xl text-center font-bold mb-4 bg-gradient-to-r ml-2 from-[#69EACB] via-[#EACCF8] to-[#6654F1] bg-clip-text text-transparent'>
          Articles
        </h2>
      </div>

      <div className='grid grid-cols-1 p-8 md:p-0 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='rounded-lg overflow-hidden shadow-lg'>
          <img
            src='./src/assets/art_img3.png'
            alt='Article 1'
            className='w-full h-48 object-cover'
          />
          <div className='bg-gray-800 p-4'>
            <h3 className='text-lg font-semibold text-white'>
              We’ve lowered marketplace fees on all your favorite NFTs
            </h3>
            <p className='text-gray-400'>January 23, 2022</p>
          </div>
        </div>

        <div className='rounded-lg overflow-hidden shadow-lg'>
          <img
            src='./src/assets/art_img2.png'
            alt='Article 2'
            className='w-full h-48 object-cover'
          />
          <div className='bg-gray-800 p-4'>
            <h3 className='text-lg font-semibold text-white'>
              Your Ultimate Guide to Getting Started With NFTs on Rarible
            </h3>
            <p className='text-gray-400'>April 03, 2022</p>
          </div>
        </div>

        <div className='rounded-lg overflow-hidden shadow-lg'>
          <img
            src='./src/assets/art_img1.png'
            alt='Article 3'
            className='w-full h-48 object-cover'
          />
          <div className='bg-gray-800 p-4'>
            <h3 className='text-lg font-semibold text-white'>
              Why Community Marketplaces are the future of NFT trading
            </h3>
            <p className='text-gray-400'>July 7, 2022</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center md:mt-[2rem]'>
        <button className='bg-transparent border-[1px] border-white  text-white px-8 py-2 rounded-full'>
          see more
        </button>
      </div>
    </div>
  );
};

export default Art;
