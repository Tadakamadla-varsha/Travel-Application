import { useEffect, useRef, useState, useContext } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/booking/Booking";
import { BASE_URL, token } from "../utils/config";
import { AuthContext } from "../context/AuthContext";
import toursData from "../assets/data/tours";


const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  console.log("Tour ID from URL:", id);

  // Get tour from local tours.js
  const tour = toursData.find((tour) => tour.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  if (!tour) {
    return <h2 className="text-center pt-5">Tour Not Found</h2>;
  }

  const {
    title,
    city,
    photo,
    price,
    address,
    distance,
    maxGroupSize,
    reviews = [],
    desc,
  } = tour;

  const { avgRating, totalRating } = calculateAvgRating(reviews);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login to submit a review");
      return;
    }

    const reviewText = reviewMsgRef.current.value;

    const reviewObj = {
      username: user?.username,
      reviewText,
      rating: tourRating,
    };

    try {
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reviewObj),
        credentials: "include",
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
        return;
      }

      alert(result.message);
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          {/* LEFT SIDE */}
          <Col lg="8">
            <div className="tour__content">
              <img src={photo} alt={title} />

              <div className="tour__info">
                <h2>{title}</h2>

                <div className="d-flex align-items-center gap-5">
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i
                      className="ri-star-line"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>

                    {avgRating || "Not rated"}

                    {totalRating > 0 && (
                      <span> ({reviews.length})</span>
                    )}
                  </span>

                  <span>
                    <i className="ri-map-pin-user-fill"></i> {address}
                  </span>
                </div>

                <div className="tour__extra-details">
                  <span>
                    <i className="ri-map-pin-2-line"></i> {city}
                  </span>

                  <span>
                    <i className="ri-money-dollar-circle-line"></i> ${price}
                  </span>

                  <span>
                    <i className="ri-map-pin-time-line"></i> {distance} km
                  </span>

                  <span>
                    <i className="ri-group-line"></i> {maxGroupSize} people
                  </span>
                </div>

                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              {/* REVIEWS */}
              <div className="tour__reviews mt-4">
                <h4>Reviews ({reviews.length})</h4>

                <Form onSubmit={submitHandler}>
                  <div className="review__input">
                    <input
                      type="text"
                      ref={reviewMsgRef}
                      placeholder="Share your thoughts"
                      required
                    />

                    <button className="btn primary__btn text-white">
                      Submit
                    </button>
                  </div>
                </Form>

                <ListGroup className="user__reviews">
                  {reviews.map((review, index) => (
                    <div className="review__item" key={index}>
                      <img src={avatar} alt="" />

                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>{review.name || review.username}</h5>

                            <p>
                              {review.createdAt
                                ? new Date(
                                    review.createdAt
                                  ).toLocaleDateString(
                                    "en-US",
                                    options
                                  )
                                : "No Date"}
                            </p>
                          </div>

                          <span className="d-flex align-items-center">
                            {review.rating}
                            <i className="ri-star-s-fill"></i>
                          </span>
                        </div>

                        <h6>
                          {review.reviewText || "No review text"}
                        </h6>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg="4">
            <Booking tour={tour} avgRating={avgRating} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetails;