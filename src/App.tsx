import Container from "./components/Container";

// import "./App.css";
import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Header from "./components/Header";
import Footer from "./components/footer";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";

function App() {
  const clearfixStyle: React.CSSProperties = {
    content: "",
    display: "table",
    clear: "both" as "both",
    backgroundColor: "#2b3742",
    top: 0,
    borderRadius: "8px",
    padding: "20px 0 10px 0",
  };

  return (
    <Container>
      <Router>
        <div className="container" style={clearfixStyle}>
          <Header />
          <NavBar />
          <div style={{ padding: "20px 10px 5px 10px" }}>
            <Routes>
              <Route path="/" element={<Navigate to="/Home" replace />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Experience" element={<Experience />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Education" element={<Education />} />
              <Route path="/*" element={<Navigate to="/Home" replace />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </Container>
  );
}

export default App;
