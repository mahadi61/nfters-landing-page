import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-between gap-24 my-16">
        <div>
          <h2 className="text-2xl text-black font-bold">NFTERS</h2>
          <p className="mt-7 mb-8 text-[#565656] text-[14px]">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <div className="flex gap-4">
            <img src="./public/social-icon/facebook.png" alt="" />
            <img src="./public/social-icon/twitter.png" alt="" />
            <img src="./public/social-icon/linkedin.png" alt="" />
          </div>
        </div>

        <div>
          <h1 className="mb-6 text-xl font-bold text-black">Market Place</h1>
          <ul className="flex flex-col w-36 gap-1 text-[#3D3D3D]">
            <Link className="hover:underline">All NFTs</Link>
            <Link className="hover:underline">New</Link>
            <Link className="hover:underline"> Art</Link>
            <Link className="hover:underline">Sports</Link>
            <Link className="hover:underline">Utility</Link>
            <Link className="hover:underline">Music</Link>
            <Link className="hover:underline">Domain Name</Link>
          </ul>
        </div>
        <div>
          <h1 className="mb-6 text-xl font-bold text-black">My Account</h1>

          <ul className="flex flex-col w-36 gap-1 text-[#3D3D3D]">
            <Link className="hover:underline">Profile</Link>
            <Link className="hover:underline">Favorite</Link>
            <Link className="hover:underline">My Collections</Link>
            <Link className="hover:underline">Settings</Link>
          </ul>
        </div>
        <div className="">
          <h1 className="text-xl font-bold text-black mb-6">
            Stay in the loop
          </h1>
          <p className="mt-7 mb-8 text-[#565656] text-[14px]">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>

          <div className="relative">
            <input
              type="text"
              className="border border-gray-300 px-4 py-3 rounded-[45.595px] w-full pr-16 text-sm"
              placeholder="Enter your email address.."
            />
            <button className="absolute top-2 right-2 bg-[#2639ED] text-xs font-bold text-white px-4 py-2 rounded-[45.595px]">
              Subscibe Now
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
