function Tour(props) {
    const { id, name, image } = props;
  
    return (
      <Link to={`/city/${id}`} className="tour">
        <img src={image} alt={name} />
        <h2>{name}</h2>
      </Link>
    );
  }
  
  export default Tour;