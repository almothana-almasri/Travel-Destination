import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import './Home.css';

function Home(props) {
    return (
        <div className="home-container">
            <Header />
            <Tours toursData={props.toursData} />
            <Footer />
        </div>
    );
}

export default Home;