import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "0 20px 20px 20px",
        padding: "5px 20px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1 style={{ color: "#096fab", margin: 0 }}>Kabilan Mahathevan</h1>
        <p style={{ margin: 0 }}>Undergraduate, Programmer</p>
      </div>

      <div style={{ marginLeft: "auto" }}>
        <a
          href="https://medium.com/@kabilanMahathevan"
          style={{ margin: "0 10px 0 0", color: "#096fab" }}
        >
          <i className="fab fa-medium"></i>
        </a>
        <a
          href="https://github.com/KabilanMA"
          style={{ margin: "0 10px 0 0", color: "#096fab" }}
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/kabilan-mahathevan-a862441aa/"
          style={{ margin: "0 10px 0 0", color: "#096fab" }}
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/Kabilan77114589"
          style={{ margin: "0 10px 0 0", color: "#096fab" }}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.facebook.com/mahathevan.kabilan"
          style={{ margin: "0 10px 0 0", color: "#096fab" }}
        >
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
