import logo from '../assets/logo.png';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';


// images
import heroImage from '../assets/hero_img.png';
import metamaskLogo from '../assets/metamask.png';
import trustWalletLogo from '../assets/trust_wallet.png';
import exodusLogo from '../assets/exodus.png';
import safePalLogo from '../assets/safepal.png';
import walletConnectLogo from '../assets/walletconnect.png';

// icons
import { CgMenuRight } from 'react-icons/cg';
import { LiaTimesSolid } from 'react-icons/lia';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState('');
  const [isMinting, setIsMinting] = useState(false);
  const [transactionHash, setTransactionHash] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if wallet is connected
  const checkIfWalletIsConnected = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setIsConnected(true);
      } else {
        setIsConnected(false);
      }
    } else {
      alert('Please install MetaMask or another wallet provider.');
    }
  };

  // Connect wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      setAccount(accounts[0]);
      setIsConnected(true);
    } else {
      alert('Please install MetaMask or another wallet provider.');
    }
  };

  // Disconnect wallet
  const disconnectWallet = () => {
    setAccount('');
    setIsConnected(false);
    alert('Wallet disconnected successfully.');
  };

  // Mint NFT
  const mintNFT = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first.');
      return;
    }

    if (!account) {
      alert('Account not found.');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        '0x47e07892b031e97214701B9cabEcf6F65e378f1e', // Replace with your contract address
        ['function mint(address to) external returns (uint256)'], // Replace with your ABI
        signer
      );

      setIsMinting(true); // Set minting state to true

      const tx = await contract.mint(account); // Mint NFT to connected account
      setTransactionHash(tx.hash);

      await tx.wait(); // Wait for transaction to be mined
      alert('NFT minted successfully!');
    } catch (err) {
      console.error('Minting failed:', err);
      alert('Error minting NFT');
    } finally {
      setIsMinting(false); // Reset minting state
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected(); // Check if wallet is already connected when the component mounts
  }, []);

  return (
    <>
      <header className='fixed top-0 left-0 right-0 md:flex flex-col md:flex-row justify-between px-2 py-2 md:px-[8rem] md:py-[1rem] text-white shadow-lg bg-[#23054d] z-50'>
        <div className='flex justify-between px-4 p-4'>
          <div>
            <img src={logo} alt='Logo' className='h-8 md:h-10 mr-2' />
          </div>
          <div className='md:hidden'>
            <button className='text-white focus:outline-none' onClick={toggleMobileMenu}>
              <CgMenuRight className='text-[1.9rem]' />
            </button>
          </div>
        </div>

        <nav className='hidden md:flex space-x-6'>
          <ul className='flex items-center justify-center space-x-6'>
            <li>
              <a href='#marketplace' className='hover:text-[#2F80ED] transition duration-300'>
                Marketplace
              </a>
            </li>
            <li>
              <a href='#collection' className='hover:text-[#2F80ED] transition duration-300'>
                Collection
              </a>
            </li>
            <li>
              <a href='#community' className='hover:text-[#2F80ED] transition duration-300'>
                Community
              </a>
            </li>
            <li>
              <a href='#create' className='hover:text-[#2F80ED] transition duration-300'>
                Create
              </a>
            </li>

            {/* Connect/Disconnect Wallet Button */}
            <li>
              {isConnected ? (
                <>
                  <Button
                    className='text-white rounded-full p-4 bg-[#2F80ED] hover:bg-white hover:text-[#2F80ED] transition duration-300'
                    onClick={disconnectWallet}
                  >
                    Disconnect
                  </Button>
                  <span className='text-sm ml-2'>{account.slice(0, 6)}...{account.slice(-4)}</span>
                </>
              ) : (
                <Button
                  className='text-white rounded-full p-4 bg-[#2F80ED] hover:bg-white hover:text-[#2F80ED] transition duration-300'
                  onClick={connectWallet}
                >
                  Connect Wallet
                </Button>
              )}
            </li>

            {/* Mint NFT Button */}
            {isConnected && (
              <li>
                <Button
                  className='text-white rounded-full p-4 bg-[#2F80ED] hover:bg-white hover:text-[#2F80ED] transition duration-300'
                  onClick={mintNFT}
                  disabled={isMinting}
                >
                  {isMinting ? 'Minting...' : 'Mint NFT'}
                </Button>
              </li>
            )}
          </ul>
        </nav>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-[#23054d] z-50 transition-transform transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className='flex flex-col items-start p-4 w-3/4 md:w-1/2 h-full'>
          <button
            className='text-white self-end mb-4 text-lg right-6 absolute'
            onClick={toggleMobileMenu}
          >
            <LiaTimesSolid className='text-[1.9rem]' />
          </button>
          <ul className='flex flex-col space-y-8 h-screen mt-8'>
            <li>
              <a href='#marketplace' className='text-white text-lg hover:underline'>
                Marketplace
              </a>
            </li>
            <li>
              <a href='#collection' className='text-white text-lg hover:underline'>
                Collection
              </a>
            </li>
            <li>
              <a href='#community' className='text-white text-lg hover:underline'>
                Community
              </a>
            </li>
            <li>
              <a href='#create' className='text-white text-lg hover:underline'>
                Create
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
