import React, { useState, useEffect } from "react";
import api from "../api";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import "../style/custom.css";

const LecturePanel = () => {
  const dummyJson = [
    {
      _id: "1",
      date: "2024-06-01",
      course: {
        name: "Introduction to Computer Science",
      },
    },
    {
      _id: "2",
      date: "2024-06-02",
      course: {
        name: "Advanced Mathematics",
      },
    },
    {
      _id: "3",
      date: "2024-06-03",
      course: {
        name: "Physics for Engineers",
      },
    },
    {
      _id: "4",
      date: "2024-06-04",
      course: {
        name: "Chemistry 101",
      },
    },
    {
      _id: "5",
      date: "2024-06-05",
      course: {
        name: "English Literature",
      },
    },
  ];

  const dummyInstructorJson = [
    {
      _id: "1",

      name: "manish",
    },
    {
      _id: "2",
      name: "rishi",
    },
    {
      _id: "3",
      name: "mandar",
    },
    {
      _id: "4",
      name: "tushar",
    },
    {
      _id: "5",
      name: "sneha",
    },
  ];

  const [lectures, getLectures] = useState([]);
  const [lectureData, setLectures] = useState({
    course: "",
    instructor: "",
    date: "",
  });
  const [show, setShow] = useState(false);
  const [instructors, getInstructors] = useState([
    {
      id: 1,
      name: "diksha",
    },
    {
      id: 2,
      name: "xyzf",
    },
  ]);
  const [courses, getCourses] = useState(dummyInstructorJson);

  const geAlltLectures = async () => {
    const data = await api.get("/lecture/getAllLectures");
    console.log("data=======>", data);
    setLectures(data.data);
  };

  useEffect(() => {
    geAlltLectures();
  }, []);

  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    console.log("course detail --->", lectureData);
    getLectures((lecture) => [...lecture, lectureData]);
    setLectures({ course: "", instructor: "", date: "" });
    setShow(false);
    return;

    try {
      await api.post("/course", lectureData);
      setLectures({ name: "", level: "", description: "", image: "" });
    } catch (error) {
      console.error("Error adding course", error);
    }
  };

  const showPopup = () => {
    setShow(!show);
  };

  return (
    <>
      <Container>
        <div>
          <div className="d-flex justify-content-between my-4">
            <h1 className="">Lecture</h1>

            <span>
              <Button variant="primary" type="submit" onClick={showPopup}>
                Add
              </Button>
            </span>
          </div>
          <ul className="instructor_list" style={{ padding: "0rem" }}>
            {lectures.map((lecture) => (
              <li key={lecture._id}>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>lecture Name: {lecture.course.name}</span>
                    <span>Assigned to: xyzz</span>
                  </div>
                  <div>Lecture date: {lecture.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Modal show={show} onHide={showPopup}>
        <Modal.Header closeButton>
          <Modal.Title>Add Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleCourseSubmit}
            autoComplete="off"
            className="mb-4"
          >
            <Row>
              <Col md={6}>
                <Form.Group controlId="formLectureInstructor">
                  <Form.Label>Course:</Form.Label>
                  <Form.Control as="select" name="instructorId" required>
                    {courses.map((course) => (
                      <option key={course._id} value={course._id}>
                        {course.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formLectureInstructor">
                  <Form.Label>Instructor:</Form.Label>
                  <Form.Control as="select" name="instructorId" required>
                    {instructors.map((instructor) => (
                      <option key={instructor._id} value={instructor._id}>
                        {instructor.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formCourseDescription">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={lectureData.date}
                    onChange={(e) =>
                      setLectures({
                        ...lectureData,
                        date: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6}></Col>
            </Row>
            <div className="mt-4 ">
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LecturePanel;
