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
    <div className="bg-[#D9E0EC33] h-[619px]">
      <div className="w-11/12 lg:max-w-7xl mx-auto">
        <h1 className="text-black text-3xl font-bold uppercase mb-14">
          Collection Featured NFTs
        </h1>
        <div className="flex justify-between gap-8">
          {collection.map((nftData, i) => (
            <CollectionCard key={i} nftData={nftData}></CollectionCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
