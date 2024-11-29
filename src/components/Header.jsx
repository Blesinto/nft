import logo from '../assets/logo.png';
import { Button } from './ui/button';
import { useState } from 'react';

// images ==
import heroImage from '../assets/hero_img.png';
import metamaskLogo from '../assets/metamask.png';
import trustWalletLogo from '../assets/trust_wallet.png';
import exodusLogo from '../assets/exodus.png';
import safePalLogo from '../assets/safepal.png';
import walletConnectLogo from '../assets/walletconnect.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className='fixed top-0 left-0 right-0 md:flex flex-col md:flex-row items-center justify-between px-2 py-4 md:px-[8rem] md:py-[1.5rem] text-white shadow-lg bg-[#23054d] z-50'>
        <div className='flex justify-between px-4 p-4  '>
          <div>
            {' '}
            <img src={logo} alt='Logo' className='h-10 md:h-12 mr-2' />
          </div>
          <div className='md:hidden'>
            <button
              className='text-white focus:outline-none'
              onClick={toggleMobileMenu}
            >
              ☰
            </button>
          </div>
        </div>
        <nav className='hidden md:flex space-x-6'>
          <ul className='flex items-center justify-center space-x-6'>
            <li>
              <a
                href='#marketplace'
                className='hover:text-[#2F80ED] transition duration-300'
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href='#collection'
                className='hover:text-[#2F80ED] transition duration-300'
              >
                Collection
              </a>
            </li>
            <li>
              <a
                href='#community'
                className='hover:text-[#2F80ED] transition duration-300'
              >
                Community
              </a>
            </li>
            <li>
              <a
                href='#create'
                className='hover:text-[#2F80ED] transition duration-300'
              >
                Create
              </a>
            </li>
            <li>
              <Button className='text-white rounded-full p-4 bg-[#2F80ED] hover:bg-white hover:text-[#2F80ED] transition duration-300'>
                Connect Wallet
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-[#23054d]  z-50 transition-transform transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className='flex flex-col items-start p-4 w-3/4 md:w-1/2 h-full'>
          <button
            className='text-white self-end mb-4'
            onClick={toggleMobileMenu}
          >
            ✖️
          </button>
          <ul className='flex flex-col space-y-4 mt-8 w-full h-full'>
            <li>
              <a
                href='#marketplace'
                className='text-white text-lg hover:underline'
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href='#collection'
                className='text-white text-lg hover:underline'
              >
                Collection
              </a>
            </li>
            <li>
              <a
                href='#community'
                className='text-white text-lg hover:underline'
              >
                Community
              </a>
            </li>
            <li>
              <a href='#create' className='text-white text-lg hover:underline'>
                Create
              </a>
            </li>
            <li>
              <Button className='text-white rounded-full p-4 bg-[#2F80ED] hover:bg-white hover:text-[#2F80ED]'>
                Connect Wallet
              </Button>
            </li>
          </ul>
        </nav>
      </div>

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
    <div className='flex flex-col md:flex-row items-center justify-between px-4 md:px-[8rem] py-16 md:py-[0rem] bg-gradient-to-r from-[#23054D] to-[#23054D] text-white text-center md:text-start'>
      <div className='md:w-1/2'>
        <h1 className='text-2xl mt-[4rem] sm:text-5xl font-bold mb-4'>
          Discover Collect, & Sell
          <span className='bg-gradient-to-r ml-2 from-[#69EACB] via-[#EACCF8] to-[#6654F1] bg-clip-text text-transparent'>
            Extraordinary
          </span>{' '}
          NFTs
        </h1>
        <p className='mb-6 text-md sm:text-lg font-poppins md:w-[70%]'>
          The Leading NFT Marketplace On Ethereum. Home To The Next Generation
          Of Digital Creators. Discover The Best NFT Collections.
        </p>
        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
          <button className='bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-400'>
            Explore
          </button>
          <button className='bg-transparent border-[1px] border-white text-white px-8 py-2 rounded-full'>
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
      <div className='md:w-1/2 mt-10 md:mt-0 '>
        <img src={heroImage} alt='Hero' className='w-full h-auto rounded-lg' />
      </div>
    </div>
  );
};

// ======== wallet logos ===========================

const WalletLogos = () => {
  return (
    <div className='flex-col md:flex justify-center items-center md:space-y-10  py-4'>
      <div className='md:flex flex-wrap mx-auto space-x-2 w-1/2 md:space-x-16'>
        <img src={metamaskLogo} alt='MetaMask' className='h-10' />
        <img src={trustWalletLogo} alt='Trust Wallet' className='h-10' />
        <img src={walletConnectLogo} alt='WalletConnect' className='h-10' />
      </div>
      <div className='md:flex space-x-2 w-1/2 flex-wrap md:space-x-8 '>
        <img src={exodusLogo} alt='Exodus' className='h-10' />
        <img src={safePalLogo} alt='SafePal' className='h-10' />
      </div>
    </div>
  );
};

export default Header;
