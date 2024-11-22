import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import collections from '../../src/data/collection.js';
import CollectionCard from '../components/CollectionCard.jsx';

const Creators = () => {
  return (
    <div className='top-collections flex flex-col items-center justify-center'>
      <div className='mb-[5rem]'>
        <h2 className='text-2xl font-bold mb-4 bg-gradient-to-r ml-2 from-[#69EACB] via-[#EACCF8] to-[#6654F1] bg-clip-text text-transparent'>
          Top Collections
        </h2>
      </div>
      <Tabs defaultValue='art' className=''>
        <TabsList className='space-x-[3rem] flex justify-center bg-transparent'>
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
          <TabsContent value='art' className='text-white h-full '>
            <div className='grid grid-cols-4 gap-4 px-[10rem] py-[4rem]'>
              {collections.map(collection => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value='create' className='text-white h-[400px] '>
            {/* Add content for Collectibles tab */}
            welcomejkl fghjkl; bnm,.
          </TabsContent>
          <TabsContent value='login' className='text-white h-[400px] '>
            {/* Add content for Metaverse tab */}
            welcomejkl fghjkl; bnm,.
          </TabsContent>
          <TabsContent value='Virtual' className='text-white h-[400px] '>
            {/* Add content for Virtual Worlds tab */}
          </TabsContent>
          <TabsContent value='Sport' className='text-white h-[400px] '>
            {/* Add content for Sport tab */}
          </TabsContent>
          <TabsContent value='Music' className='text-white h-[400px] '>
            {/* Add content for Music tab */}
          </TabsContent>
        </div>
      </Tabs>
      <div className='flex justify-center items-center md:mt-[2rem]'>
        <button className='bg-transparent border-[1px] border-white  text-white px-8 py-2 rounded-full'>
          see more
        </button>
      </div>
    </div>
  );
};

export default Creators;
