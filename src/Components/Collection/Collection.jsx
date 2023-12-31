import { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";

const Collection = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetch("./data/collection.json")
      .then((res) => res.json())
      .then((data) => setCollection(data));
  }, []);

  return (
    <div className="bg-[#D9E0EC33] py-10  md:h-[619px] flex items-center justify-center">
      <div className="w-11/12 lg:max-w-7xl mx-auto">
        <h1 className="text-black text-2xl md:text-3xl font-bold uppercase mb-14">
          Collection Featured NFTs
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {collection.map((nftData, i) => (
            <CollectionCard key={i} nftData={nftData}></CollectionCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
