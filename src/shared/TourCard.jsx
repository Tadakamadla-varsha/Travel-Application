import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./tour-card.css";
import calculateAvgRating from "../utils/avgRating";

const TourCard = ({ tour }) => {
  const { _id, id, title, city, photo, price, featured, reviews } = tour;

console.log("Tour Data:", tour);
console.log("_id =", _id);
console.log("id =", id);
  // Use MongoDB _id or local id
  const tourId = _id || id;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt={title} />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i>
              {city}
            </span>

            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-line"></i>
              {avgRating === 0 ? "Not Rated" : avgRating}
              {totalRating > 0 && <span>({reviews.length})</span>}
            </span>
          </div>

          <h5 className="tour__title">
            <Link to={`/tours/${id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price}
              <span> /per person</span>
            </h5>

            <Link to={`/tours/${id}`} className="btn booking__btn">
             Book Now
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;