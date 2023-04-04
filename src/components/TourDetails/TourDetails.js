import { useParams } from 'react-router-dom';

function TourDetail(props) {
  const { id } = useParams();
  const [showDescription, setShowDescription] = useState(false);

  function getTourDetails() {
    const { toursData } = props;
    return toursData.find(tour => tour.id === Number(id));
  }

  const tour = getTourDetails();

  if (!tour) {
    return <div>Loading...</div>;
  }

  const { name, image, description } = tour;

  return (
    <div className="tour-detail">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{showDescription ? description : `${description.slice(0, 100)}...`}</p>
      <button onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}

export default TourDetail;
