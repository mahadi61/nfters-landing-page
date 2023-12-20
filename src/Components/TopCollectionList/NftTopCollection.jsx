import Eth from "../../utilities/Eth";

const NftTopCollection = () => {
  const nftTopData = [
    {
      image: "../../../public/image/top-1.png",
      eth: "19,769.39",
      percentage: "+26.52",
      name: "CryptoFunks",
      verify: true,
    },
    {
      image: "../../../public/image/top-2.png",
      eth: "19,769.39",
      percentage: "+18.52",
      name: "Art Crypto",
      verify: false,
    },
    {
      image: "../../../public/image/top-3.png",
      eth: "19,769.39",
      percentage: "+10.52",
      name: "PunkArt",
      verify: false,
    },
    {
      image: "../../../public/image/top-4.png",
      eth: "19,769.39",
      percentage: "+16.52",
      name: "Frensware",
      verify: true,
    },
    {
      image: "../../../public/image/top-5.png",
      eth: "19,769.39",
      percentage: "+2.52",
      name: "Cryptix",
      verify: false,
    },
  ];

  return (
    <div>
      <h1 className="text-xl text-black uppercase font-bold">
        Top Collections over
      </h1>
      <p className="text-[18px] font-bold text-[#3D00B7]">Last 7 days</p>
      {/* map from api */}
      <table className="w-full border-collapse border-b mt-8">
        <tbody>
          {nftTopData.map((data, i) => (
            <tr key={i}>
              <td className="py-2 px-4 border-b-2">{i + 1}</td>
              <td className="py-2 px-4 border-b-2 flex justify-between items-center gap-2">
                <div className="relative">
                  <img src={data?.image} alt="" />
                  {data?.verify && (
                    <img
                      src="../../../public/image/verify-img.png"
                      alt=""
                      className="absolute -right-2 -top-2"
                    />
                  )}
                </div>
                <div>
                  <p>{data?.name}</p>
                  <Eth data={data?.eth} />
                </div>
              </td>
              <td
                className={`py-2 px-4 border-b-2 ${
                  Number(data?.percentage) < 11 && "text-[#FF002E]"
                } text-[#14C8B0]`}
              >{`${data?.percentage}%`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NftTopCollection;
