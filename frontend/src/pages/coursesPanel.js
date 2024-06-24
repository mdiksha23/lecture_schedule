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

const CoursesPanel = () => {
  const [course, setcourse] = useState([]);
  const [show, setShow] = useState(false);

  const [newCourse, setNewCourse] = useState({
    name: "",
    level: "",
    description: "",
    image: "",
  });

  const getLinearGradient = (index) => {
    const gradients = [
      "radial-gradient(circle at 10% 20%, rgba(91, 173, 254, 0.46) 0%, rgba(91, 224, 254, 0.46) 47.2%, rgba(170, 254, 235, 0.43) 90%);",
      "linear-gradient(to top, #dfe9f3 0%, white 100%);",
      "radial-gradient(253px at 12.6% 77.9%, rgb(221, 255, 214) 0.3%, rgb(214, 254, 254) 90.5%)",
      "linear-gradient(109.6deg, rgb(204, 228, 247) 11.2%, rgb(237, 246, 250) 100.2%)",
    ];

    const randomIndex = index % gradients.length;
    return gradients[randomIndex];
  };

  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    console.log("course detail --->", newCourse);
    setcourse((course) => [...course, newCourse]);
    setNewCourse({ name: "", level: "", description: "", image: "" });
    setShow(false);
    return;

    try {
      await api.post("/course", newCourse);
      setNewCourse({ name: "", level: "", description: "", image: "" });
    } catch (error) {
      console.error("Error adding course", error);
    }
  };

  const getCourses = async () => {
    const data = await api.get("/courses/getAllCourses");
    setcourse(data.data);
  };

  useEffect(() => {
    getCourses();
  }, []);

  const showPopup = () => {
    setShow(!show);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result;
      setNewCourse({ ...newCourse, image: base64Image });
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Container>
        <div className="d-flex justify-content-between my-4">
          <h1 className="">Courses</h1>

          <span>
            <Button variant="primary" type="submit" onClick={showPopup}>
              Add Course
            </Button>
          </span>
        </div>
        <Row>
          {course.length &&
            course.map((course, index) => (
              <Col md={3} key={course?._id}>
                <Card
                  className="mb-4"
                  style={{
                    minHeight: "10rem",
                    background: getLinearGradient(index),
                  }}
                >
                  {/* <Card.Img
                variant="top"
                src={course.image || "https://via.placeholder.com/150"}
              /> */}
                  <Card.Body>
                    <Card.Title>{course.courseName}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
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
                <Form.Group controlId="formCourseName">
                  <Form.Label>Course Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newCourse.name}
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, name: e.target.value })
                    }
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formCourseLevel">
                  <Form.Label>Level</Form.Label>
                  <Form.Control
                    type="text"
                    value={newCourse.level}
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, level: e.target.value })
                    }
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formCourseDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    value={newCourse.description}
                    onChange={(e) =>
                      setNewCourse({
                        ...newCourse,
                        description: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formCourseImage">
                  <Form.Label>Image Upload</Form.Label>
                  <Form.Control type="file" onChange={handleImageUpload} />
                </Form.Group>
              </Col>
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

export default CoursesPanel;
