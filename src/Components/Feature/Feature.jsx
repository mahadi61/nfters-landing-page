const Feature = () => {
  return (
    <div className="bg-[#D9E0EC33] h-[326px] flex justify-between items-center">
      <h1 className="text-3xl font-bold text-black max-w-sm uppercase">
        The amazing NFT art of the world here
      </h1>

      <div className="flex gap-3 max-w-xs">
        <img src="./public/icon/card-tick-1.png" alt="" className="w-9 h-9" />
        <div>
          <h1 className="text-xl font-bold text-black mb-3">
            Fast Transaction
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            etiam viverra tellus imperdiet.
          </p>
        </div>
      </div>

      <div className="flex gap-3 max-w-xs">
        <img
          src="./public/icon/chart-square-2.png"
          alt=""
          className="w-9 h-9"
        />
        <div>
          <h1 className="text-xl font-bold text-black mb-3">
            Growth Transaction
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            etiam viverra tellus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
