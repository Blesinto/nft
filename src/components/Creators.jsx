import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import collections from '../../src/data/collection.js';
import CollectionCard from '../components/CollectionCard.jsx';

const Creators = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='mb-[5rem]'>
        <h2 className='text-2xl font-bold mb-4 bg-gradient-to-r ml-2 from-[#69EACB] via-[#EACCF8] to-[#6654F1] bg-clip-text text-transparent'>
          Top Collections
        </h2>
      </div>
      <Tabs defaultValue='art' className='w-full'>
        <TabsList className='space-x-[1rem] flex justify-center flex-wrap md:flex bg-transparent'>
          <TabsTrigger value='art' className='topbtn'>
            Art
          </TabsTrigger>
          <TabsTrigger value='create' className='topbtn'>
            Collectibles
          </TabsTrigger>
          <TabsTrigger value='login' className='topbtn'>
            Metaverse
          </TabsTrigger>
          <TabsTrigger value='Virtual' className='topbtn'>
            Virtual Worlds
          </TabsTrigger>
          <TabsTrigger value='Sport' className='topbtn'>
            Sport
          </TabsTrigger>
          <TabsTrigger value='Music' className='topbtn'>
            Music
          </TabsTrigger>
        </TabsList>

        <div className='tabs-content-container overflow-hidden'>
          <TabsContent value='art' className='text-white p-4 md:p-8 lg:p-12'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-8  md:px-[8rem] md:py-[4rem]'>
              {collections.map(collection => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value='create' className='text-white p-4 md:p-8 lg:p-12'>
            {/* Add content for Collectibles tab */}
          </TabsContent>
          <TabsContent value='login' className='text-white p-4 md:p-8 lg:p-12'>
            {/* Add content for Metaverse tab */}
          </TabsContent>
          <TabsContent value='Virtual' className='text-white p-4 md:p-8 lg:p-12'>
            {/* Add content for Virtual Worlds tab */}
          </TabsContent>
          <TabsContent value='Sport' className='text-white p-4 md:p-8 lg:p-12'>
            {/* Add content for Sport tab */}
          </TabsContent>
          <TabsContent value='Music' className='text-white p-4 md:p-8 lg:p-12'>
            {/* Add content for Music tab */}
          </TabsContent>
        </div>
      </Tabs>
      <div className='flex justify-center items-center mt-8 md:mt-12'>
        <button className='bg-transparent border-[1px] border-white text-white px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300'>
          see more
        </button>
      </div>
    </div>
  );
};

export default Creators;
