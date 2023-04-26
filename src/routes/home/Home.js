//Assets

//Imports

//Components/Sections
import ScrollTo from '../../components/ScrollTo';
import Section1 from '../../pages/Section1/Section1';

function Home() {
    return (
      <div className="Home">
        <Section1 />
        
        <ScrollTo />
      </div>
    );
}
  
export default Home;