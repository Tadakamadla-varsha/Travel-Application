import { useState, useEffect } from "react";
import "./Testimonial.css";

// ✅ Import avatars correctly
import ava1 from "../../assets/images/ava-1.jpg";
import ava2 from "../../assets/images/ava-2.jpg";
import ava3 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const testimonials = [
    {
      id: 1,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nemo! Velit facilis magni ab, animi odio vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Peter Alice",
      role: "Customer",
      avatar: ava1,
    },
    {
      id: 2,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nemo! Velit facilis magni ab, animi odio vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Jhon Deo",
      role: "Customer",
      avatar: ava2,
    },
    {
      id: 3,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nemo! Velit facilis magni ab, animi odio vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Jhon Deo",
      role: "Customer",
      avatar: ava3,
    },
    {
      id: 4,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nemo! Velit facilis magni ab, animi odio vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Cathrine Jo",
      role: "Customer",
      avatar: ava1,
    },
  ];

  /* ===============================
     Responsive Slides Count
  =============================== */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) setSlidesToShow(1);
      else if (window.innerWidth < 992) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ===============================
     Auto Slide
  =============================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const visibleTestimonials = Array.from(
    { length: slidesToShow },
    (_, i) => testimonials[(currentSlide + i) % testimonials.length]
  );

  return (
    <section className="bg-white py-5 testimonials-section">
      <div className="container">

        {/* Testimonials */}
        <div className="row g-4">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-lg-4 col-md-6">
              <div className="testimonial-card h-100">

                {/* ✅ 5-line clamped text */}
                <p className="testimonial-text mb-4">
                  {testimonial.text}
                </p>

                {/* Avatar */}
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div>
                    <h6 className="fw-semibold mb-1">
                      {testimonial.name}
                    </h6>
                    <small className="text-muted">
                      {testimonial.role}
                    </small>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="d-flex justify-content-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
