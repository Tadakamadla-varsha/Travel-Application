import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

import CommonSection from "../shared/CommonSection";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/NewsLetter";
import TourCard from "../shared/TourCard";
import CubeLoader from "../pages/CubeLoader";

import toursData from "../assets/data/tours";
import "../styles/tour.css";

/* ✅ EXTRA TOUR DATA (SAME STRUCTURE AS TourCard) */
const extraTour = {
  id: "extra-01",
  title: "Westminster Bridge",
  city: "London",
  price: 99,
  featured: true,
  reviews: [{ rating: 4.6 }],
  avgRating: 4.6,
  photo:
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
};

const Tours = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const toursPerPage = 8;

  /* ✅ FORCE 2 BUTTONS */
  const pageCount = 2;

  /* PAGINATION SLICE */
  const startIndex = page * toursPerPage;
  const endIndex = startIndex + toursPerPage;
  const displayedTours = toursData.slice(startIndex, endIndex);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 400);

    return () => clearTimeout(timer);
  }, [page]);

  return (
    <>
      {/* ================= COMMON SECTION ================= */}
      <CommonSection title="All Tours" />
<br /><br /><br />
      {/* ================= SEARCH ================= */}
      <section className="pt-0">
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <br /><br /><br />

      {/* ================= TOURS ================= */}
      <section>
        <Container>
          {loading && <CubeLoader />}

          {!loading && (
            <>
              <Row>
                {/* PAGE DATA */}
                {displayedTours.map((tour) => (
                  <Col lg="3" md="6" sm="6" className="mb-4" key={tour.id}>
                    <TourCard tour={tour} />
                  </Col>
                ))}

                {/* ✅ EXTRA CARD ONLY ON PAGE 2 */}
                {page === 1 && (
                  <Col lg="3" md="6" sm="6" className="mb-4">
                    <TourCard tour={extraTour} />
                  </Col>
                )}
              </Row>

              {/* ================= PAGINATION ================= */}
              <Row>
                <Col lg="12">
                  <div className="pagination d-flex justify-content-center gap-3 mt-4">
                    {[0, 1].map((number) => (
                      <button
                        key={number}
                        onClick={() => setPage(number)}
                        className={`page-btn ${
                          page === number ? "active__page" : ""
                        }`}
                      >
                        {number + 1}
                      </button>
                    ))}
                  </div>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Tours;