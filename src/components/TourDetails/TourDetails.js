import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './TourDetails.css';
const toursData = require("../../data/db.json");

const TourDetail = () => {
    const { id } = useParams();
    const [showFullDescription, setShowFullDescription] = useState(false);
  
    const tour = toursData.find((tour) => tour.id === id);
  
    const description =
      showFullDescription || tour.info.length <= 200
        ? tour.info
        : `${tour.info.slice(0, 200)}...`;
  
    const toggleDescription = () => {
      setShowFullDescription((prevState) => !prevState);
    };
  
    return (
      <div className="TourDetail">
        <h2>{tour.name}</h2>
        <img src={tour.image} alt={tour.name} />
        <p className={showFullDescription ? "" : "description"}>{description}</p>
        {tour.info.length > 200 && (
          <button className={showFullDescription ? "show-less" : "show-more"} onClick={toggleDescription}>
            {showFullDescription ? "See less" : "See more"}
          </button>
        )}
      </div>
    );
  };
  
  export default TourDetail;
