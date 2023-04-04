import './Tours.css';

function Tours(props) {
    return (
        <div className="tours-container">
            {props.toursData.map(tour => (
                <div key={tour.id}>
                    <h2>{tour.name}</h2>
                    <img src={tour.image} alt={tour.name} />
                </div>
            ))}
        </div>
    );
}

export default Tours;