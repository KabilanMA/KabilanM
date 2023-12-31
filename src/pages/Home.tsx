import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imgStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    borderRight: viewportWidth <= 767 ? "none" : "5px solid #2b3742",
    padding: "0 0 10px 0",
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#242424",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="row">
        <div className="col-md-3 col-sm-12" style={imgStyle}>
          <img
            src="/image.png"
            alt="Kabilan Mahathevan"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-9 col-sm-12 mt-md-5 mt-sm-2">
          <p>
            I'm a passionate Computer Science and Engineering student at the
            University of Moratuwa, Sri Lanka, set to graduate in June 2024 with
            an impressive CGPA of 3.91. My expertise spans Machine Learning,
            DevOps, Software Development, and a special affinity for Cloud
            Computing. I thrive on the transformative potential of these fields
            and actively engage in shaping the future of technology. Eager to
            contribute my skills and enthusiasm to innovative projects, I'm a
            perpetual learner and a dedicated explorer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
