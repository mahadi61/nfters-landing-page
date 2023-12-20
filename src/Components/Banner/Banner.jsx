import Button from "../../utilities/Button";

const Banner = () => {
  return (
    <div className="flex justify-center items-center h-fit">
      <div className="w-11/12 lg:max-w-7xl flex justify-between items-center">
        <div className="w-1/2 flex flex-col">
          <h1 className="text-5xl text-black font-bold mb-4">
            Discover, and collect Digital Art NFTs{" "}
          </h1>
          <p className="text-[#565656] text-xl mb-10">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <div>
            <Button title={"Explore Now"}></Button>
          </div>
          <div className="flex items-center gap-6 mt-8">
            <p>
              <span className="text-5xl text-black font-bold">98k+</span> <br />
              <span className="text-xl font-normal">Artwork</span>
            </p>
            <p>
              <span className="text-5xl text-black font-bold">12k+</span> <br />
              <span className="text-xl font-normal">Auction</span>
            </p>
            <p>
              <span className="text-5xl text-black font-bold">15k+</span> <br />
              <span className="text-xl font-normal">Artist</span>
            </p>
          </div>
        </div>
        {/* banner right side image */}
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
