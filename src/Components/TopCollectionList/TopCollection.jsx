import ImageList from "./ImageList";

const TopCollection = () => {
  return (
    <div className="h-[800px] flex items-center justify-center">
      <div className="w-11/12 lg:max-w-7xl mx-auto grid grid-cols-3 gap-12">
        <div>
          <img src="../../../public/image/top-collection-1.png" alt="" />
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-2">
              <img src="../../../public/image/author-4848.png" alt="" />
              <div>
                <p className="text-black text-xl font-bold">The Futr Abstr</p>
                <p>10 in the stock</p>
              </div>
            </div>
            <div>
              <p className="text-[#3A3A3A] text-[12px] font-medium">
                Highest Bid
              </p>
              <p className="flex justify-between items-center gap-2 text-[#3A3A3A] text-xs font-bold">
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
                      fill="#3A3A3A"
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
                0.25 ETH
              </p>
            </div>
          </div>
        </div>
        {/* image list */}
        <div>
          <ImageList />
        </div>
        {/* top nft list */}
        <div>list</div>
      </div>
    </div>
  );
};

export default TopCollection;
