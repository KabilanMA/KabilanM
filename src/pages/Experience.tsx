import React from "react";

const Experience: React.FC = () => {
  return (
    <div
      className="container"
      style={{
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "red",
      }}
    >
      <div className="row" style={{ backgroundColor: "#242424" }}>
        <div
          className="col-md-3"
          style={{
            borderBottom: "15px solid #2b3742",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h5>Teaching Assistant</h5> <span>2023/July - 2023/December</span>
        </div>
        <div
          className="col-md-9"
          style={{
            borderLeft: "5px solid #2b3742",
            borderBottom: "15px solid #2b3742",
            padding: "20px 15px 15px 20px",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            As a Teaching Assistant at the University of Moratuwa in the
            Department of Computer Science and Engineering, I collaborated with
            Dr. Sapumal for the Database Management module and Dr. Buddhika for
            the Operating Systems module. In this role, I facilitated engaging
            lab activities, providing hands-on experience to students. I played
            a pivotal role in project evaluation and assessments, ensuring a
            comprehensive understanding of course material. My responsibilities
            included organizing and overseeing lab sessions, fostering a
            collaborative learning environment, and providing valuable
            assistance to students in mastering both Database Management and
            Operating Systems concepts.
          </p>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "#242424" }}>
        <div
          className="col-md-3"
          style={{
            borderBottom: "15px solid #2b3742",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h5>Software Engineer Intern</h5>{" "}
          <span>2023/January - 2023/June</span>
        </div>
        <div
          className="col-md-9"
          style={{
            borderBottom: "15px solid #2b3742",
            borderLeft: "5px solid #2b3742",
            padding: "20px 15px 15px 20px",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            During my Software Development Engineer Internship at The Software
            Practice Pte Ltd, I played a pivotal role in a dynamic team,
            focusing on UI regression testing for a construction sector project.
            Collaborating closely with my supervisor, I ensured software
            reliability and quality by developing automated test cases and
            implementing fixes based on test results. Proficient in agile
            methodologies and version control systems, I successfully delivered
            high-quality software within project timelines. Key tools and
            technologies utilized include Playwright, Bitbucket, Jira, .NET,
            JavaScript, TypeScript, and C#.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
