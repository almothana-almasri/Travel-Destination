import './Tours.css';

import Tour from './Tour';

function Tours(props) {
  const { toursData } = props;

  return (
    <div className="tours">
      {toursData.map(tour => (
        <Tour key={tour.id} {...tour} />
      ))}
    </div>
  );
}

export default Tours;