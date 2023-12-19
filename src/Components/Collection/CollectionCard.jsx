const CollectionCard = ({ nftData }) => {
  return (
    <div>
      <div className="grid grid-rows-3 grid-flow-col gap-2 mb-7">
        <div className="row-span-3 ">
          <img
            src={nftData?.imageCollection[0]?.url}
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="">
          <img src={nftData?.imageCollection[1]?.url} alt="" />
        </div>
        <div className="">
          <img src={nftData?.imageCollection[2]?.url} alt="" />
        </div>
        <div className="">
          <img src={nftData?.imageCollection[3]?.url} alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-black text-2xl font-bold">Amazing Collection</h1>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 w-1/2 items-center">
            <img src={nftData?.author?.profilePhoto} alt="" />
            <p>by {nftData?.author?.name}</p>
          </div>
          <p className="border-2 border-[#2639ED] text-[#2639ED] rounded-[60px] py-[10px] px-5">
            Total 54 Items
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
