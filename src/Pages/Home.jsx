import Banner from "../Components/Banner/Banner";
import Collection from "../Components/Collection/Collection";
import DiscoverNft from "../Components/Discover/DiscoverNft";
import Feature from "../Components/Feature/Feature";
import GetYourNft from "../Components/GetNft/GetYourNft";
import TopCollection from "../Components/TopCollectionList/TopCollection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <TopCollection />
      <Collection />
      <GetYourNft />
      <DiscoverNft />
    </div>
  );
};

export default Home;
