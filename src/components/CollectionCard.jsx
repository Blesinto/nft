const CollectionCard = ({ collection }) => {
  return (
    <div className='bg-gray-800 p-4 rounded-lg '>
      <div>
        <img
          src={collection.image}
          alt={collection.name}
          className='w-full h-auto rounded-lg'
        />
      </div>
      <div className="mb-[20px] mt-4">
        <h3 className='text-lg font-bold '>{collection.name}</h3>
      </div>
      <div className="flex justify-between ">
        <div>
          {' '}
          <p className='text-sm'>{collection.eth}</p>
          <p className='text-sm'>{collection.floorPrice}</p>
        </div>
        <div>
          <p className='text-sm'>{collection.price}</p>

          <p
            className={`text-sm ${
              collection.change.startsWith('+')
                ? 'text-green-500'
                : 'text-red-500'
            }`}
          >
            {collection.change}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
