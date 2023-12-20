import Eth from "../../utilities/Eth";

const BannerRight = () => {
  return (
    <div>
      <div className="relative ">
        <img src="./image/banner-image.png" alt="" />
        <img
          src="./../../public/image/bdge.png"
          alt=""
          className="absolute  top-1/3 -left-20"
        />
        <div className="absolute top-4 left-4 flex flex-col justify-between h-[90%] w-[78%]">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Abstr Gradient NFT
            </h1>
            <div className="flex items-center gap-3 mt-2">
              <img src="./../../public/image/collection/author.png" alt="" />
              <p className="text-xl font-semibold text-white">Arkhan17</p>
            </div>
          </div>
          {/* bottom */}

          <div className="bg-[#FFFFFF33] flex justify-between items-center p-6 rounded-xl text-white ">
            <div>
              <p className="mb-1">Current Bid</p>
              <Eth data={"0.25 ETH"} color={"text-white"} />
            </div>
            <div>
              <p className="text-xl font-normal">Ends in</p>
              <p>12h 43m 42s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerRight;
