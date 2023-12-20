import author from "../../../public/image/author-4848.png";
import nft1 from "../../../public/image/group-88.png";
import nft2 from "../../../public/image/nft-2.png";
import nft3 from "../../../public/image/nft-3.png";

const ImageList = () => {
  const imageData = [
    {
      name: "The Futr Abstr",
      image: author,
      nftImage: nft1,
      eth: "0.25",
      total: "1 of 8",
    },
    {
      name: "The Futr Abstr",
      image: author,
      nftImage: nft2,
      eth: "0.25",
      total: "1 of 8",
    },
    {
      name: "The Futr Abstr",
      image: author,
      nftImage: nft3,
      eth: "0.25",
      total: "1 of 8",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      {imageData.map((data, i) => (
        <div key={i} className="flex justify-between items-center gap-1">
          <img src={data?.nftImage} alt="" />
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold text-black">{data?.name}</p>
            <div className="flex justify-between items-center gap-1">
              <img src={data?.image} alt="" />
              <p className="flex justify-between items-center gap-2 rounded-lg text-[#00AC4F] border-2 border-[#00AC4F] p-2 text-xs font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="22"
                  viewBox="0 0 13 22"
                  fill="none"
                >
                  <g clipPath="url(#clip0_0_213)">
                    <path
                      d="M12.671 11.4564L6.50004 15.3231L0.325043 11.4564L6.50004 0.589722L12.671 11.4564ZM6.50004 16.5647L0.325043 12.6981L6.50004 21.9231L12.675 12.6981L6.50004 16.5647Z"
                      fill="#00AC4F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_213">
                      <rect
                        width="13"
                        height="21.3333"
                        fill="white"
                        transform="translate(0 0.589722)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>{data?.eth}</span> ETH
              </p>
              <p>{data?.total}</p>
            </div>
            <div>
              <button className="border-2 border-[#3D00B7] hover:bg-[#3D00B7] px-5 py-4 text-xs font-medium hover:text-white text-[#3D00B7] rounded-[50px]">
                Place a bid
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
``;

export default ImageList;
