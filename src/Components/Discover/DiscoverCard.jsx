import Eth from "../../utilities/Eth";

const DiscoverCard = ({ data }) => {
  console.log(data);
  const { image, name, ETH, time_left, total_items_left, people } = data;
  return (
    <div className="bg-white p-3 rounded-xl ">
      <div className="relative">
        <img src={image} alt="" className="h-[222px] w-[247px] object-cover" />
        <div className="flex items-center absolute left-5 -bottom-3">
          <img
            src="../../../public/image/collection/author.png"
            alt=""
            className="border-2 border-[#ffff] rounded-[30px] w-[30px] h-[30px] -ms-2"
          />
          <img
            src="../../../public/image/collection/author.png"
            alt=""
            className="border-2 border-[#ffff] rounded-[30px] w-[30px] h-[30px] -ms-2"
          />
          <img
            src="../../../public/image/collection/author.png"
            alt=""
            className="border-2 border-[#ffff] rounded-[30px] w-[30px] h-[30px] -ms-2"
          />
        </div>
      </div>
      <div>
        <p className="text-[19px] text-black font-bold mt-[15px]">{name}</p>
        <div className="flex justify-between items-center my-3">
          <Eth
            data={`${ETH} ETH`}
            color={"text-[#00AC4F]"}
            fill={"#00AC4F"}
          ></Eth>
          <p className="text-[#838383]">1 of 321</p>
        </div>
        <div className="flex items-center justify-between font-semibold text-[#4F33A3]">
          <p className="bg-[#DCDCDC33] px-[10px] py-1 rounded-[109px]">
            3h 50m 2s left
          </p>
          <button>Place a bid</button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
