import express from "express";

const app = express();
const PORT = 3000;

// /home route
app.get("/home", (req, res) => {
  res.send(`
    
      Welcome to the Home Page
    
  `);
});

// /about route
app.get("/about", (req, res) => {
  res.send("This is the about page");
});

// /students/:studentId route
app.get("/students/:studentId", (req, res) => {
  const { studentId } = req.params;
  const { department } = req.query;

  const student = {
    id: studentId,
    department: department || "Not specified",
    status: "Active"
  };

  res.json(student);
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
