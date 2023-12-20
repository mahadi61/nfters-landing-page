import Collection from "../Components/Collection/Collection";
import Feature from "../Components/Feature/Feature";
import GetYourNft from "../Components/GetNft/GetYourNft";
import TopCollection from "../Components/TopCollectionList/TopCollection";

const Home = () => {
  return (
    <div>
      <Feature />
      <TopCollection />
      <Collection />
      <GetYourNft />
    </div>
  );
};

export default Home;
