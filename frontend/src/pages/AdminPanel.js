import React, { useState, useEffect } from "react";
import api from "../api";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();

  const dummyJson = [
    {
      name: "John Doe",
      level: "Intermediate",
      description: "A placeholder description for a sample object.",
      image: "https://picsum.photos/200",
    },
    {
      name: "Jane Smith",
      level: "Beginner",
      description: "Another sample description for a different object.",
      image: "https://picsum.photos/200",
    },
    {
      name: "Alice Johnson",
      level: "Advanced",
      description: "This is a description for Alice's profile.",
      image: "https://picsum.photos/200",
    },
    {
      name: "Bob Brown",
      level: "Expert",
      description: "Description for Bob's profile object.",
      image: "https://picsum.photos/200",
    },
    {
      name: "Charlie Green",
      level: "Intermediate",
      description: "Charlie's intermediate level profile description.",
      image: "https://picsum.photos/200",
    },
    {
      name: "Diana White",
      level: "Beginner",
      description: "Diana is a beginner level user.",
      image: "https://picsum.photos/200",
    },
    {
      name: "Evan Black",
      level: "Advanced",
      description: "Evan's profile with advanced level details.",
      image: "https://picsum.photos/200",
    },
    {
      name: "Fiona Blue",
      level: "Expert",
      description: "Fiona's expert level profile description.",
      image: "https://picsum.photos/200",
    },
    {
      name: "George Yellow",
      level: "Intermediate",
      description: "George has an intermediate level profile.",
      image: "https://picsum.photos/200",
    },
    {
      name: "Hannah Purple",
      level: "Beginner",
      description: "Hannah is a beginner in this sample data.",
      image: "https://picsum.photos/200",
    },
  ];

  const [courses, setCourses] = useState(dummyJson);
  const [instructors, setInstructors] = useState([]);
  const [newCourse, setNewCourse] = useState({
    name: "",
    level: "",
    description: "",
    image: "",
  });

  useEffect(() => {}, []);

  const navigatePages = (url) => {
    console.log(url);
    navigate("/" + url);
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
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        {/* <h1 className="my-4 titleIdea">IdeaMagix</h1> */}
        {/* <span>
            <Button variant="primary" type="submit" onClick={showPopup}>
              Add Course
            </Button>
          </span> */}
      </div>

      <Row className="admin-card mt-3">
        <Col md={4} onClick={() => navigatePages("courses")}>
          <Card className="course-card">
            <Card.Body>
              <p>Courses (10)</p>
              {/* Display courses here */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} onClick={() => navigatePages("instructor")}>
          <Card className="instructor-card">
            <Card.Body>
              <p>Instructors (20)</p>
              {/* Display instructors here */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} onClick={() => navigatePages("lectures")}>
          <Card className="lecture-card">
            <Card.Body>
              <p>Lectures (6)</p>
              {/* Display lectures here */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
