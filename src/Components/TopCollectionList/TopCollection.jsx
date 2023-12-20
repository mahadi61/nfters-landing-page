import Eth from "../../utilities/Eth";
import ImageList from "./ImageList";
import NftTopCollection from "./NftTopCollection";

const TopCollection = () => {
  return (
    <div className="md:h-[800px] py-10 flex items-center justify-center">
      <div className="w-11/12 lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src="./image/top-collection-1.png" alt="" />
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-2">
              <img src="./image/author-4848.png" alt="" />
              <div>
                <p className="text-black text-xl font-bold">The Futr Abstr</p>
                <p>10 in the stock</p>
              </div>
            </div>
            <div>
              <p className="text-[#3A3A3A] text-[12px] font-medium">
                Highest Bid
              </p>
              <Eth data={"0.25 ETH"} />
            </div>
          </div>
        </div>
        {/* image list */}
        <div>
          <ImageList />
        </div>
        {/* top nft list */}
        <div className="border-s-2 ps-9 ">
          <NftTopCollection />
        </div>
      </div>
    </div>
  );
};

export default TopCollection;
