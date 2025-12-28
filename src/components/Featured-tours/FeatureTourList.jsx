import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import tours from "../../assets/data/tours";

const FeaturedTourList = () => {

  const allTours = tours.slice(0, 8);

  if (!allTours || allTours.length === 0) {
    return (
      <Col lg="12" className="text-center py-5">
        No tours found
      </Col>
    );
  }

  return (
    <>
      {allTours.map((tour) => (
        <Col lg="3" md="6" sm="6" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;