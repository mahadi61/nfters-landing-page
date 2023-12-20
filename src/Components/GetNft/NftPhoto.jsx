const NftPhoto = () => {
  return (
    <div className="flex justify-between gap-10">
      {/* left side two image */}
      <div className="flex flex-col gap-14">
        <div className="relative">
          <img src="./../../../public/image/get-your-nft-3.png" alt="" />
          <img
            src="./../../../public/image/ellipse-95.png"
            alt=""
            className="-right-6 -bottom-7 absolute"
          />
        </div>
        <div className="self-end relative">
          <img src="./../../../public/image/get-your-nft-1.png" alt="" />
          <img
            src="./../../../public/image/ellipse-96.png"
            alt=""
            className="-right-6 -bottom-7 absolute"
          />
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="relative">
          <img src="./../../../public/image/get-your-nft-2.png" alt="" />
          <img
            src="./../../../public/image/ellipse-96.png"
            alt=""
            className="-right-6 -bottom-7 absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default NftPhoto;
