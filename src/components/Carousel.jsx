import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample NFT data
const nftData = [
  {
    id: 1,
    title: 'CryptoPunk 3D #13',
    latestBid: '9.61 ETH',
    from: '4.12 ETH',
    price: '$103,025',
    change: '-2.25%',
    image: 'path/to/cryptopunk.png', // Replace with actual image path
  },
  {
    id: 2,
    title: 'HAPE #8064',
    latestBid: '15.8 ETH',
    from: '9.45 ETH',
    price: '$180,345',
    change: '+12.45%',
    image: 'path/to/hape.png', // Replace with actual image path
  },
  {
    id: 3,
    title: 'InvisibleFriend #54',
    latestBid: '6.73 ETH',
    from: '1.55 ETH',
    price: '$9,945.1',
    change: '+3.57%',
    image: 'path/to/invisiblefriend.png', // Replace with actual image path
  },
  // Add more NFT data as needed
];

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='slider-container mx-auto my-10 px-4 md:px-[5rem]'>
      <h2 className='text-4xl font-bold text-center bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] bg-clip-text text-transparent mb-[5rem]'>
        Trending NFTs
      </h2>
      <Slider {...settings}>
        {nftData.map(nft => (
          <div key={nft.id} className='p-8 md:p-8'>
            <div className='bg-white rounded-lg shadow-lg p-4 flex flex-col items-center'>
              <img
                src={nft.image}
                alt={nft.title}
                className='w-full h-40 object-cover rounded-lg mb-2'
              />
              <h3 className='text-lg font-semibold'>{nft.title}</h3>
              <div className='flex justify-between w-full mt-2'>
                <div>
                  <p className='text-sm'>Latest Bid</p>
                  <p className='font-bold'>{nft.latestBid}</p>
                </div>
                <div>
                  <p className='text-sm'>From</p>
                  <p className='font-bold'>{nft.from}</p>
                </div>
              </div>
              <div className='flex justify-between w-full mt-2'>
                <div>
                  <p className='text-sm'>Price</p>
                  <p className='font-bold'>{nft.price}</p>
                </div>
                <div
                  className={`text-sm ${
                    nft.change.startsWith('+')
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  <p className='text-sm'>Change</p>
                  <p className='font-bold'>{nft.change}</p>
                </div>
              </div>
              <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-400'>
                Collect Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <div className='flex justify-center items-center md:mt-[4rem]'>
        <button className='bg-transparent border-[1px] border-white  text-white px-8 py-2 rounded-full'>
          see more
        </button>
      </div>
    </div>
  );
}

export default Carousel;
