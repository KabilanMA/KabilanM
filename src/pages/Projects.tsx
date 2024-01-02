import React from "react";

const Projects: React.FC = () => {
  return (
    <div
      className="container"
      style={{
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
          <h5 style={{ textAlign: "center" }}>P2P Torrent Client</h5>{" "}
          <span>2023/Dec - Present</span>
        </div>
        <div
          className="col-md-8"
          style={{
            borderBottom: "15px solid #2b3742",
            borderLeft: "5px solid #2b3742",
            padding: "20px 15px 15px 20px",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            A P2P Torrent Client to download files using .torrent file, and work
            in progress to support magnet links soon. Pre-release is available
            for simple usage.
            <br />
            Technologies Used: Go
          </p>
          <p>
            <a
              href="https://github.com/KabilanMA/p2p-torrent-client"
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Link
            </a>
            {"   "}
          </p>
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
          <h5 style={{ textAlign: "center" }}>Workflow Management System</h5>{" "}
          <span>2022/Sep - 2022/December</span>
        </div>
        <div
          className="col-md-8"
          style={{
            borderLeft: "5px solid #2b3742",
            borderBottom: "15px solid #2b3742",
            padding: "20px 15px 15px 20px",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            A workflow management system to prioritize and automate the
            traditional paperwork system of Galle Irrigation Department, Sri
            Lanka.
            <br />
            Technologies Used: React, NodeJS, MongoDB
          </p>
          <p>
            <a
              href="https://github.com/KabilanMA/workflow-management-system-frontend"
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Link 1
            </a>
            {"   "}
            <a
              href="https://github.com/pasan-SK/workflow-management-system-backend"
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Link 2
            </a>
            {"   "}
            <a
              href="https://deploy-preview-39--delightful-licorice-d3ecf6.netlify.app"
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Deployment
            </a>
            {"   "}
          </p>
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
            Flight Ticket Reservation System
          </h5>{" "}
          <span>2022/Feb - 2022/Jun</span>
        </div>
        <div
          className="col-md-8"
          style={{
            borderBottom: "15px solid #2b3742",
            borderLeft: "5px solid #2b3742",
            padding: "20px 15px 15px 20px",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            Led the creation of a semester project—Airline Ticket Booking
            System—demonstrating robust software development skills. The system
            showcases features like seat selection, reservation management, and
            many more except secure payment processing, highlighting practical
            application and proficiency.
            <br />
            Technologies Used: React, NodeJS, MySQL
          </p>
          <p>
            <a
              href="https://github.com/KabilanMA/airline-reservation"
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Link
            </a>
            {"   "}
          </p>
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
            Vehicle Accident Prediction System
          </h5>{" "}
          <span>2022/May - 2022/Aug</span>
        </div>
        <div
          className="col-md-8"
          style={{
            borderBottom: "15px solid #2b3742",
            borderLeft: "5px solid #2b3742",
            padding: "20px 15px 15px 20px",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            Built a system to detect vehicles using YOLO object detection model
            and to predict the motion to detect accident using Kalman Filter,
            that runs on CPU.
            <br />
            Technologies Used: Jupyter Notebook, Python, YOLO, Kalman Filter
          </p>
          <p>
            <a
              href="https://github.com/KabilanMA/Vehicle_Detection_YoloV3_CPU"
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Link
            </a>
            {"   "}
          </p>
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
            Sign Language Detection and <br />
            Classification Evaluation
          </h5>{" "}
          <span>2022/Feb - 2022/Jun</span>
        </div>
        <div
          className="col-md-8"
          style={{
            borderBottom: "15px solid #2b3742",
            borderLeft: "5px solid #2b3742",
            padding: "20px 15px 15px 20px",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            Sign language detection to detect ASL with trained custom data using
            different deep learning models to evaluate the best approach.
            <br />
            Technologies Used: Tensorflow, Jupyter Notebook, Python
          </p>
          <p>
            <a
              href="https://github.com/KabilanMA/Sign_language_Detection_Yolov3"
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Link 1
            </a>
            {"   "}
            <a
              href="https://github.com/KabilanMA/Sign_language_Detection_SSD_1"
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Link 2
            </a>
            {"   "}
          </p>
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
          <h5 style={{ textAlign: "center" }}>AudioMNIST-Classifier</h5>{" "}
          <span>2023/Sep - 2023/Nov</span>
        </div>
        <div
          className="col-md-8"
          style={{
            borderBottom: "15px solid #2b3742",
            borderLeft: "5px solid #2b3742",
            padding: "20px 15px 15px 20px",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            Utilized AudioMNIST and wav2vec transformer for feature extraction
            across 12 layers. Employed stacking, bagging, and blending with
            various models (Logistic Regression, Random Forest, SVM, XGBoost,
            Lasso, Ridge Regression, Feedforward Neural Network) for improved
            prediction scores.
            <br />
            Technologies Used: Python, Tensorflow, wav2vec
          </p>
          <p>
            <a
              href="https://github.com/KabilanMA/AudioMNIST-Classifier"
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Link
            </a>
            {"   "}
          </p>
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
          <h5 style={{ textAlign: "center" }}>Chess Game</h5>{" "}
          <span>2023/Jan - 2023/Jun</span>
        </div>
        <div
          className="col-md-8"
          style={{
            borderBottom: "15px solid #2b3742",
            borderLeft: "5px solid #2b3742",
            padding: "20px 15px 15px 20px",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            Python-based two-player chess game with standard rules, Pygame GUI,
            and keyboard controls. Features local multiplayer, graphical themes,
            and planned AI opponent. Easily runnable via Python or downloadable
            installer. Future plans include AI enhancement, UI improvements, and
            additional game modes. Open to contributions, licensed under MIT for
            personal and educational use.
            <br />
            Technologies Used: Python, Pygame, JavaScript
          </p>
          <p>
            <a
              href="https://github.com/KabilanMA/chess-game-ai"
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Link 1
            </a>
            {"   "}
            <a
              href="https://github.com/KabilanMA/chess-game-browser"
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Link 2
            </a>
            {"   "}
          </p>
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
            Docker Continer to Build Pintos
          </h5>{" "}
          <span>2023/Jan - 2023/Jun</span>
        </div>
        <div
          className="col-md-8"
          style={{
            borderBottom: "15px solid #2b3742",
            borderLeft: "5px solid #2b3742",
            padding: "20px 15px 15px 20px",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            Constructed a Docker container that streamlines the development
            process for the Pintos project originated by Stanford. The container
            encompasses a meticulously configured build environment and
            toolchain, providing a seamless and reproducible setup for Pintos
            development. This ensures a consistent and hassle-free environment
            for developers working on the Pintos project, facilitating efficient
            project completion.
            <br />
            Technologies Used: Bash, CMake, Docker
          </p>
          <p>
            <a
              href="https://hub.docker.com/r/kabilanmahathevan/pintos"
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Link
            </a>
            {"   "}
          </p>
        </div>
      </div>
      <hr style={{ color: "green" }}></hr>
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
            Health care database Management System
          </h5>{" "}
          <span>2021/Jul - 2021/Oct</span>
        </div>
        <div
          className="col-md-8"
          style={{
            borderBottom: "15px solid #2b3742",
            borderLeft: "5px solid #2b3742",
            padding: "20px 15px 15px 20px",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            A sample database management system of health care department to
            streamline the covid vaccination process and to query about hospital
            facility available as a semester project
            <br />
            Technologies Used: PHP, MySQL, JavaScript
          </p>
          <p>
            <a
              href="https://github.com/KabilanMA/CS2062"
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Link
            </a>
            {"   "}
          </p>
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
          <h5 style={{ textAlign: "center" }}>Hotel Room Reservation System</h5>{" "}
          <span>2022/Apr - 2021/May</span>
        </div>
        <div
          className="col-md-8"
          style={{
            borderBottom: "15px solid #2b3742",
            borderLeft: "5px solid #2b3742",
            padding: "20px 15px 15px 20px",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            An online hotel room booking system where customers can rent rooms
            and owners can advertise their property.
            <br />
            Technologies Used: React, NodeJS, MySQL, Heroku
          </p>
          <p>
            <a
              href="https://github.com/KabilanMA/hotel-management-system"
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Link
            </a>
            {"   "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
