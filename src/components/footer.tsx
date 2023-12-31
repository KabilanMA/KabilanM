import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
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

  return (
    <div
      style={{
        borderTop: "1px solid #000",
        margin: "10px 0 0 0",
        padding: "10px 40px 10px 30px",
        textAlign: viewportWidth <= 767 ? "center" : "right",
      }}
    >
      <p style={{ margin: "10px 0 0 0" }}>
        Copyright &copy; 2024{" "}
        <Link
          className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          to={"/"}
        >
          Kabilan Mahathevan
        </Link>
      </p>
    </div>
  );
};

export default Footer;
