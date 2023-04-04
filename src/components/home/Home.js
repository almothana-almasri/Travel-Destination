import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import './Home.css';

function Home() {
    return (
      <div>
        <Tours toursData={toursData} />
      </div>
    );
  }
  
  export default Home;