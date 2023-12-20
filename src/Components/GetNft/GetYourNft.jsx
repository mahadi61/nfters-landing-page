import Button from "../../utilities/Button";
import NftPhoto from "./NftPhoto";

const GetYourNft = () => {
  return (
    <div className="md:h-[790px] w-11/12 lg:max-w-7xl mx-auto flex justify-center items-center my-6 md:my-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="md:w-1/2">
          <NftPhoto />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-extrabold text-black mb-10 uppercase">
            Create and <br /> sell your NFTs
          </h1>
          <p className="text-[#636363] text-[18px] font-normal mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </p>
          <Button title={"Sign Up Now"} type={true}></Button>
        </div>
      </div>
    </div>
  );
};

export default GetYourNft;
