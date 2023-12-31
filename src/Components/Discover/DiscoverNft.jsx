import { useEffect, useState } from "react";
import DiscoverCard from "./DiscoverCard";
import FilterDropdown from "./FilterDropdown";

const category = ["Art", "Celebrities", "Gaming", "Sport", "Music", "Crypto"];

const DiscoverNft = () => {
  const [allNft, setAllNft] = useState([]);
  const [showAllNfts, setShowAllNfts] = useState(false);

  useEffect(() => {
    fetch("./data/nftData.json")
      .then((res) => res.json())
      .then((data) => setAllNft(data));
  }, []);

  let displayedNfts = showAllNfts ? allNft : allNft.slice(0, 16);

  return (
    <div className="bg-[#D9E0EC33]">
      <div className="w-11/12 lg:max-w-7xl mx-auto py-16">
        <h1 className="text-2xl md:text-[38px] text-black font-bold uppercase mb-9">
          Discover more NFTs
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <button className="bg-[#3D00B7] text-white px-5 py-2 rounded-[100px]">
              All Categories
            </button>
            {category.map((singleCategory, i) => (
              <button
                key={i}
                className="bg-[#DCDCDC33] text-black px-5 py-2 rounded-[100px]"
              >
                {singleCategory}
              </button>
            ))}
          </div>
          {/* dropdown */}
          <FilterDropdown />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 mt-10">
          {displayedNfts.map((data, i) => (
            <DiscoverCard key={i} data={data}></DiscoverCard>
          ))}
        </div>
        <div className="flex items-center justify-center mt-16">
          {!showAllNfts && allNft.length > 16 && (
            <button
              onClick={() => setShowAllNfts(true)}
              className="px-10 py-5 rounded-[50px] border-2 border-[#3D00B7] text-[#4F33A3] text-xl font-medium hover:bg-[#3D00B7] hover:text-white"
            >
              More NFTs
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscoverNft;
