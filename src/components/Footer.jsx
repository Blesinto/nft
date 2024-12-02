import logo from '../assets/logo.png';

import { FaDiscord, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='px-4 md:px-[10rem] py-[4rem] text-white'>
      <div className='text-center mb-6'>
        <h2 className='text-2xl mb-2'>Get More Updates</h2>
        <p className='mb-4'>
          Join our mailing list to stay in the loop with our newest feature
          releases, NFT drops, and tips and tricks.
        </p>
        <div className='flex justify-center mb-6 md:mt-8 md:mb-8'>
          <div className='relative w-full max-w-md'>
            <input
              type='email'
              placeholder='Your Email...'
              className='w-full p-[0.8rem] rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 placeholder-gray-500'
            />
            <button className='absolute right-[0.5rem] p-2 top-0 h-full md:px-8 md:py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition duration-300'>
              I’m In
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between mb-6'>
        <div className='text-center md:text-left mb-6 md:mb-0'>
          <div className='flex items-center justify-center md:justify-start '>
            <img src={logo} alt='Logo' className='h-10  mr-2' />
          </div>
          <div className='w-64 md:mt-4 mx-auto'>
            <p className=''>
              The Leading NFT Marketplace On Ethereum Home To The Next
              Generation Of Digital Creators. Discover The Best NFT Collections.
            </p>
          </div>

          <div className='flex justify-center md:justify-start space-x-4 mt-8'>
            <a
              href='#'
              className='hover:text-blue-500 flex items-center text-sm md:text-base'
            >
              <FaDiscord className='mr-1 text-lg md:text-xl' />
            </a>
            <a
              href='#'
              className='hover:text-blue-500 flex items-center text-sm md:text-base'
            >
              <FaTwitter className='mr-1 text-lg md:text-xl' />
            </a>
            <a
              href='#'
              className='hover:text-blue-500 flex items-center text-sm md:text-base'
            >
              <FaInstagram className='mr-1 text-lg md:text-xl' />
            </a>
            <a
              href='#'
              className='hover:text-blue-500 flex items-center text-sm md:text-base'
            >
              <FaYoutube className='mr-1 text-lg md:text-xl' />
            </a>
          </div>
        </div>
        <div className='text-center md:text-left mb-6 md:mb-0'>
          <h3 className='text-lg font-semibold'>Marketplace</h3>
          <ul className='space-y-2 md:mt-4'>
            <li>
              <a href='#' className='hover:text-blue-500'>
                Explore
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-500'>
                Articles
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-500'>
                How It Works
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-500'>
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className='text-center md:text-left'>
          <h3 className='text-lg font-semibold'>Links</h3>
          <ul className='space-y-2 md:mt-4'>
            <li>
              <a href='#' className='hover:text-blue-500'>
                Tokens
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-500'>
                API
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-500'>
                Big Bounty
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-500'>
                Become Partners
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='text-center'>
        <p className='text-gray-400'>© 2022 ENDFT. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
