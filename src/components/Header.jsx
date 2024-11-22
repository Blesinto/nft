import logo from '../assets/logo.png';
import { Button } from './ui/button';

// images ==
import heroImage from '../assets/hero_img.png';
import metamaskLogo from '../assets/metamask.png';
import trustWalletLogo from '../assets/trust_wallet.png';
import exodusLogo from '../assets/exodus.png';
import safePalLogo from '../assets/safepal.png';
import walletConnectLogo from '../assets/walletconnect.png';

const Header = () => {
  return (
    <>
      <header className='flex items-center justify-between px-[10rem] py-[4rem]  text-white bg-gradient-to-r '>
        <div className='flex items-center'>
          <img src={logo} alt='Logo' className='h-10 mr-2' />
        </div>
        <nav className='hidden md:flex space-x-4'>
          <ul className='flex items-center justify-center space-x-[2.5rem]'>
            <li>
              <a href='#marketplace' className=''>
                Marketplace
              </a>
            </li>
            <li>
              <a href='#collection' className=''>
                Collection
              </a>
            </li>
            <li>
              <a href='#community' className=''>
                Community
              </a>
            </li>
            <li>
              <a href='#create' className=''>
                Create
              </a>
            </li>
            <Button className='text-white rounded-full p-4 bg-[#2F80ED] hover:bg-white hover:text-[#2F80ED]'>
              Connect Wallet
            </Button>
          </ul>
        </nav>
        <div className='md:hidden'>
          <button className='text-white focus:outline-none'>
            {/* Add a hamburger icon here if needed */}☰
          </button>
        </div>
      </header>
      <div>
        <Hero />
      </div>
      <div>
        <WalletLogos />
      </div>
    </>
  );
};

// ======================= hero section =================================

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between px-6 md:px-[10rem] py-10 md:py-[0rem] bg-gradient-to-r from-[#23054D] to-[#23054D] text-white'>
      <div className='md:w-1/2'>
        <h1 className='text-5xl md:text-5xl md:w-[65%] font-bold mb-[2.3rem]'>
          Discover Collect, & Sell
          <span className='bg-gradient-to-r ml-2 from-[#69EACB] via-[#EACCF8] to-[#6654F1] bg-clip-text text-transparent'>
            Extraordinary
          </span>{' '}
          NFTs
        </h1>
        <p className='mb-[3.2rem] text-md md:text-base font-poppins md:w-[70%]'>
          The Leading NFT Marketplace On Ethereum. Home To The Next Generation
          Of Digital Creators. Discover The Best NFT Collections.
        </p>
        <div className='space-x-4'>
          <button className='bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-400'>
            Explore
          </button>
          <button className='bg-transparent border-[1px] border-white  text-white px-8 py-2 rounded-full'>
            Create
          </button>
        </div>

        {/* Statistics Section */}
        <div className='flex text-center mt-8 space-x-6 mx-auto'>
          <div>
            <h2 className='text-[1.3rem] font-bold'>432K+</h2>
            <p>Collections</p>
          </div>
          <div>
            <h2 className='text-[1.3rem] font-bold'>200K+</h2>
            <p>Artists</p>
          </div>
          <div>
            <h2 className='text-[1.3rem] font-bold'>10K+</h2>
            <p>Community</p>
          </div>
        </div>
      </div>
      <div className='md:w-1/2 mt-10 md:mt-0'>
        <img src={heroImage} alt='Hero' className='w-full h-auto rounded-lg' />
      </div>
    </div>
  );
};

// ======== wallet logos ===========================

const WalletLogos = () => {
  return (
    <div className='flex-col flex justify-center items-center space-y-10 py-8'>
      <div className='flex space-x-8'>
        <img src={metamaskLogo} alt='MetaMask' className='h-10' />
        <img src={trustWalletLogo} alt='Trust Wallet' className='h-10' />
        <img src={walletConnectLogo} alt='WalletConnect' className='h-10' />
      </div>
      <div className='flex space-x-8 '>
        {' '}
        <img src={exodusLogo} alt='Exodus' className='h-10' />
        <img src={safePalLogo} alt='SafePal' className='h-10' />
      </div>
    </div>
  );
};

export default Header;
