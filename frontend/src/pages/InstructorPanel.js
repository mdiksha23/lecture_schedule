import React, { useState, useEffect } from "react";
import api from "../api";
import { Container } from "react-bootstrap";
import "../style/custom.css";

const InstructorPanel = () => {
  const [instructor, setInstructors] = useState([]);

  const getInstructors = async () => {
    const data = await api.get("/instructor/getAllInstructors");
    setInstructors(data.data);
  };

  useEffect(() => {
    getInstructors();
  }, []);

  useEffect(() => {}, []);

  return (
    <Container>
      <div>
        <div className="d-flex justify-content-between my-4">
          <h1 className="">Instructors</h1>

          <span>
            {/* <Button variant="primary" type="submit" onClick={showPopup}>
            Add Course
          </Button> */}
          </span>
        </div>
        <ul className="instructor_list" style={{ padding: "0rem" }}>
          {instructor.map((d) => (
            <li key={d.id}>
              <div>
                <div className="d-flex justify-content-between">
                  <span>Name: {`${d.firstName} ${d.lastName}`}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default InstructorPanel;
