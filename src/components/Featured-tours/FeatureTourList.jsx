import React from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  console.log(featuredTours);

  return (
    <>
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}

      {!loading && !error && featuredTours?.length > 0 ? (
        featuredTours.map((tour) => (
          tour ? ( // ✅ check if tour is defined
            <Col lg="3" className="mb-4" key={tour._id || tour.id}>
              <TourCard tour={tour} />
            </Col>
          ) : null
        ))
      ) : (
        <h4>No featured tours available.</h4>
      )}
    </>
  );
};

export default FeaturedTourList;
