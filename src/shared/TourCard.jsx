import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./tour-card.css";
import calculateAvgRating from "../utils/avgRating";

const TourCard = ({ tour }) => {
  
  if (!tour) return null;

  const { _id, title, city, photo, price, featured, reviews } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo || "tour-img"} alt={title || "tour-img"} />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city || "Unknown"}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-line"></i> {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>
          <h5 className="tour__title">
            <Link to={_id ? `/tours/${_id}` : "#"}>{title || "Untitled Tour"}</Link>
          </h5>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price || 0} <span>/per person</span>
            </h5>
            <Link to={_id ? `/tours/${_id}` : "#"} className="btn booking__btn">
              Book Now
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
