const Create = () => {
  return (
    <div className='flex flex-col text-white px-4 md:px-[10rem] py-[4rem] shadow-lg p-6 rounded-lg'>
      <h1 className='text-2xl md:text-3xl text-center font-bold mb-4 bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] bg-clip-text text-transparent'>
        Create And Sell Your NFTs
      </h1>
      <div className='flex flex-col md:flex-row items-center justify-center text-center'>
        <div className='p-6 flex-1'>
          <div className='text-5xl mb-4'>🪙</div>
          <h2 className='text-[1.5rem] md:text-[1.2rem] font-semibold mb-2'>
            Set up your wallet
          </h2>
          <p className='text-sm md:text-base'>
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner. Learn about the
            wallets we support.
          </p>
        </div>
        <div className='p-6 flex-1'>
          <div className='text-5xl mb-4'>📤</div>
          <h2 className='text-[1.5rem] md:text-[1.2rem] font-semibold mb-2'>
            Upload & Create Collection
          </h2>
          <p className='text-sm md:text-base'>
            Upload your work then Click My Collections and set up your
            collection. Add social links, a description, profile & banner
            images, and set a secondary sales fee.
          </p>
        </div>
        <div className='p-6 flex-1'>
          <div className='text-5xl mb-4'>🛒</div>
          <h2 className='text-[1.5rem] md:text-[1.2rem] font-semibold mb-2'>
            List them for sale
          </h2>
          <p className='text-sm md:text-base'>
            Choose between auctions, fixed-price listings, and declining-price
            listings. You choose how you want to sell your NFTs, and we help you
            sell them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Create;
