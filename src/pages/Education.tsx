import React from "react";

const Education: React.FC = () => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#242424",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="row" style={{ backgroundColor: "#242424" }}>
        <div
          className="col-md-4"
          style={{
            borderBottom: "15px solid #2b3742",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h5 style={{ textAlign: "center" }}>
            BSc. Engineering <br />
            Specilized in Computer Science and Engineering
          </h5>{" "}
          <span>2020/Jan - Present</span>
        </div>
        <div
          className="col-md-8"
          style={{
            borderBottom: "15px solid #2b3742",
            borderLeft: "5px solid #2b3742",
            padding: "20px 15px 15px 20px",
          }}
        >
          <div style={{ marginRight: "60px" }}>
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                style={{
                  color: "rgba(255, 255, 255, 0.87)",
                  backgroundColor: "#242424",
                }}
              >
                University of Moratuwa, Sri Lanka.
              </li>
              <li
                className="list-group-item"
                style={{
                  color: "rgba(255, 255, 255, 0.87)",
                  backgroundColor: "#242424",
                }}
              >
                Current GPA : <strong>3.91</strong>
              </li>
              <li
                className="list-group-item"
                style={{
                  color: "rgba(255, 255, 255, 0.87)",
                  backgroundColor: "#242424",
                }}
              >
                Dean's List in 5 Semesters.
              </li>
              <li
                className="list-group-item"
                style={{
                  color: "rgba(255, 255, 255, 0.87)",
                  backgroundColor: "#242424",
                }}
              >
                Batch Representative for the 5th and 6th Semesters.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row" style={{ backgroundColor: "#242424" }}>
        <div
          className="col-md-4"
          style={{
            borderBottom: "15px solid #2b3742",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h5 style={{ textAlign: "center" }}>
            GCE Advance Level
            <br />
            Physical Science Stream
          </h5>{" "}
          <span>2016/Jun - 2018/Aug</span>
        </div>
        <div
          className="col-md-8"
          style={{
            borderBottom: "15px solid #2b3742",
            borderLeft: "5px solid #2b3742",
            padding: "20px 15px 15px 20px",
          }}
        >
          <div style={{ marginRight: "60px" }}>
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                style={{
                  color: "rgba(255, 255, 255, 0.87)",
                  backgroundColor: "#242424",
                }}
              >
                V/Vavuniya Tamil Madhya Maha Vidyalam, Vavuniya, Sri Lanka
              </li>
              <li
                className="list-group-item"
                style={{
                  color: "rgba(255, 255, 255, 0.87)",
                  backgroundColor: "#242424",
                }}
              >
                Z-Score : <strong>1.9835</strong>
              </li>
              <li
                className="list-group-item"
                style={{
                  color: "rgba(255, 255, 255, 0.87)",
                  backgroundColor: "#242424",
                }}
              >
                Island Rank: 557
              </li>
              <li
                className="list-group-item"
                style={{
                  color: "rgba(255, 255, 255, 0.87)",
                  backgroundColor: "#242424",
                }}
              >
                District Rank: 6 (Vavuniya)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
