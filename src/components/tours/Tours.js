import './Tours.css';

function Tours(props) {
    return (
        <div>
            {props.toursData.map(tour => (
                <div key={tour.id}>
                    {/* i have added key={tour.id} because of the following error that appeared in tghe browser: Warning: Each child in a list should have a unique "key" prop. Check the render method of `Tours`. See https://reactjs.org/link/warning-keys for more information. */}
                    <h2>{tour.name}</h2>
                    <img src={tour.image} alt={tour.name} />
                </div>
            ))}
        </div>
    );
}

export default Tours;