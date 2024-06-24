const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const courseRoute = require("./routes/courseRoute");
const instructorRoute = require("./routes/instructorsRoute");
const lectureRoute = require("./routes/lectureRoute");
const authRoute = require("./routes/authRoute");
const sequelize = require("./db-config/database");
var cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Routes Defined
app.use("/auth", authRoute);
app.use("/courses", courseRoute); // Courses routes
app.use("/instructor", instructorRoute); // instructor routes
app.use("/lecture", lectureRoute); // lecture routes

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
