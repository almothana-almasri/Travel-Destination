import './Tours.css';
import { Link } from "react-router-dom"

function Tours(props) {
    return (
        <div className="tours-container">
            {props.toursData.map(tour => (
                <div key={tour.id}>
                    <Link to={`/city/${tour.id}`}>
                        <h2>{tour.name}</h2>
                        <img src={tour.image} alt={tour.name} />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Tours;