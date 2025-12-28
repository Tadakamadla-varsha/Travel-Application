import React from "react";
import "../styles/Home.css";
import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import SearhBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeatureTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <br /><br /><br /><br /><br />

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">

                {/* 🔥 REPLACED SUBTITLE SECTION */}
                <div className="hero__subtitle d-flex align-items-center gap-2 mb-3">
                  <span className="badge know-badge px-4 py-2">
                    Know before you go
                  </span>

                  <img
                    src={worldImg}
                    alt="World"
                    style={{ width: "35px", height: "35px" }}
                  />
                </div>

                <h1>
                  Travelling opens the doors to creating{" "}
                  <span className="highlight">memories</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  consequatur dolore nam modi labore facere id ut veniam itaque
                  quasi, sunt unde? Mollitia id soluta animi repudiandae omnis
                  quibusdam illo blanditiis possimus ex sint cupiditate corrupti
                  labore non, qui est porro excepturi quasi labor.
                </p>
              </div>
            </Col>
            

            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg} alt="Hero 1" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box hero__video-box mt-4">
                <video src={heroVideo} controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="Hero 2" />
              </div>
              <br /><br />
            </Col>
            <SearhBar/>
          </Row>
        </Container>
      </section>

      <br /><br /><br /><br /><br />

      {/* ================= SERVICES SECTION ================= */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle ">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <br /><br /><br /><br /><br />

      {/* ================= FEATURED TOURS ================= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h5 className="services__subtitle">Explore</h5>
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      <br /><br /><br />

      {/* ================= EXPERIENCE SECTION ================= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <h5 className="services__subtitle">Experience</h5>
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  <br />
                  Officiis iure molestiae dolorem, repellendus blanditiis.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="Experience" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <br /><br /><br />

      {/* ================= GALLERY SECTION ================= */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h5 className="services__subtitle">Gallery</h5>
              <h2 className="gallary__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      <br /><br /><br />

      {/* ================= TESTIMONIAL SECTION ================= */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h5 className="services__subtitle">Clients Love</h5>
              <h2 className="testimonial__title">
                What our clients say about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Home;
