<!-- jQuery program to fade in and fade out text using buttons -->
<!DOCTYPE html>
<html>
<head>
  <title>Fade In Fade Out</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
  <p id="text" style="display:none; font-size:24px;">Hello, this is fading text!</p>
  <button id="fadeIn">Fade In</button>
  <button id="fadeOut">Fade Out</button>

  <script>
    // Fade in text on button click
    $("#fadeIn").click(function () {
      $("#text").fadeIn(1000);
    });

    // Fade out text on button click
    $("#fadeOut").click(function () {
      $("#text").fadeOut(1000);
    });
  </script>
</body>
</html>






<!-- jQuery program to append and prepend list items dynamically -->
<!DOCTYPE html>
<html>
<head>
  <title>Append Prepend</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
  <ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  <button id="appendBtn">Append Item</button>
  <button id="prependBtn">Prepend Item</button>

  <script>
    let appendCount = 3;
    let prependCount = 0;

    // Append new item at end of list
    $("#appendBtn").click(function () {
      $("#myList").append("<li>Appended Item " + appendCount++ + "</li>");
    });

    // Prepend new item at beginning of list
    $("#prependBtn").click(function () {
      $("#myList").prepend("<li>Prepended Item " + prependCount++ + "</li>");
    });
  </script>
</body>
</html>







// Node.js program to create a simple HTTP server displaying welcome message
const http = require('http');

const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Send welcome message
  res.end('<h1>Welcome to MCA Department</h1>');
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});









// Node.js app using File System module to create, write, and read a file
const fs = require('fs');

const fileName = 'myfile.txt';
const content = 'Hello! This is data written into the file.';

// Create and write data into the file
fs.writeFile(fileName, content, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File created and data written successfully.');

  // Read and display the file contents
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File Contents:', data);
  });
});









// Node.js app to perform CRUD operations on student data using an array

let students = [
  { id: 1, name: 'Alice', course: 'MCA' },
  { id: 2, name: 'Bob', course: 'BCA' }
];

// CREATE - Add a new student
function createStudent(id, name, course) {
  students.push({ id, name, course });
  console.log('Student added:', { id, name, course });
}

// READ - Display all students
function readStudents() {
  console.log('All Students:', students);
}

// UPDATE - Update student name by ID
function updateStudent(id, newName) {
  const student = students.find(s => s.id === id);
  if (student) {
    student.name = newName;
    console.log('Student updated:', student);
  } else {
    console.log('Student not found');
  }
}

// DELETE - Remove student by ID
function deleteStudent(id) {
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    const removed = students.splice(index, 1);
    console.log('Student deleted:', removed);
  } else {
    console.log('Student not found');
  }
}

// Test CRUD operations
readStudents();
createStudent(3, 'Charlie', 'MCA');
updateStudent(1, 'Alicia');
deleteStudent(2);
readStudents();







// Employee entity mapped to database table
// Employee.java
package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String department;
    private double salary;

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    public double getSalary() { return salary; }
    public void setSalary(double salary) { this.salary = salary; }
}
// Repository interface to fetch employee records from MySQL
// EmployeeRepository.java
package com.example.demo.repository;

import com.example.demo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // JpaRepository provides built-in CRUD methods
}
// REST controller to expose endpoint for fetching employees
// EmployeeController.java
package com.example.demo.controller;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // Fetch all employees from database
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}
# application.properties - MySQL database configuration
spring.datasource.url=jdbc:mysql://localhost:3306/employeedb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true







<%-- JSP program to accept username from form and display welcome message --%>

<%-- index.jsp - Form to accept user name --%>
<!DOCTYPE html>
<html>
<head><title>Welcome Form</title></head>
<body>
  <h2>Enter Your Name</h2>
  <form action="welcome.jsp" method="post">
    Name: <input type="text" name="username" required />
    <input type="submit" value="Submit" />
  </form>
</body>
</html>
<%-- welcome.jsp - Display welcome message using submitted name --%>
<!DOCTYPE html>
<html>
<head><title>Welcome</title></head>
<body>
  <%
    // Retrieve username from form submission
    String name = request.getParameter("username");
  %>
  <h2>Welcome, <%= name %>! to MCA Department.</h2>
</body>
</html>






<%-- JSP page demonstrating implicit objects: request, response, session --%>
<!DOCTYPE html>
<html>
<head><title>Implicit Objects</title></head>
<body>
  <%
    // Using request implicit object to get parameter
    String user = request.getParameter("user");
    if (user == null) user = "Guest";

    // Using session implicit object to store and retrieve data
    session.setAttribute("username", user);
    String sessionUser = (String) session.getAttribute("username");

    // Using response implicit object to set content type
    response.setContentType("text/html");
  %>

  <h2>Request Object</h2>
  <p>User from Request: <%= user %></p>

  <h2>Session Object</h2>
  <p>User stored in Session: <%= sessionUser %></p>

  <h2>Response Object</h2>
  <p>Content Type set via response: text/html</p>

  <h2>Out Implicit Object</h2>
  <% out.println("<p>This is printed using out implicit object.</p>"); %>
</body>
</html>











<%-- login.jsp - Login form for username and password --%>
<!DOCTYPE html>
<html>
<head><title>Login</title></head>
<body>
  <h2>Login Page</h2>
  <form action="validate.jsp" method="post">
    Username: <input type="text" name="username" required /><br/><br/>
    Password: <input type="password" name="password" required /><br/><br/>
    <input type="submit" value="Login" />
  </form>
</body>
</html>
<%-- validate.jsp - Validates username and password using scriptlet --%>
<!DOCTYPE html>
<html>
<head><title>Validation</title></head>
<body>
  <%
    // Retrieve form data
    String username = request.getParameter("username");
    String password = request.getParameter("password");

    // Hardcoded credentials for validation
    String validUser = "admin";
    String validPass = "1234";

    if (username.equals(validUser) && password.equals(validPass)) {
      // Store user in session on successful login
      session.setAttribute("user", username);
      out.println("<h2>Login Successful! Welcome, " + username + "</h2>");
    } else {
      out.println("<h2>Invalid Username or Password. <a href='login.jsp'>Try Again</a></h2>");
    }
  %>
</body>
</html>





<!-- HTML form for student registration with validation -->
<!DOCTYPE html>
<html>
<head>
  <title>Student Registration</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    label { display: block; margin-top: 10px; }
    input, select { padding: 6px; width: 250px; }
    .error { color: red; font-size: 13px; }
    button { margin-top: 15px; padding: 8px 20px; }
  </style>
</head>
<body>
  <h2>Student Registration Form</h2>
  <form id="regForm" onsubmit="return validate()">

    <!-- Name field -->
    <label>Name:</label>
    <input type="text" id="name" placeholder="Enter your name" />
    <span class="error" id="nameErr"></span>

    <!-- Email field -->
    <label>Email:</label>
    <input type="email" id="email" placeholder="Enter your email" />
    <span class="error" id="emailErr"></span>

    <!-- Course field -->
    <label>Course:</label>
    <select id="course">
      <option value="">-- Select Course --</option>
      <option>MCA</option>
      <option>BCA</option>
      <option>BSc CS</option>
    </select>
    <span class="error" id="courseErr"></span>

    <!-- Gender field -->
    <label>Gender:</label>
    Male <input type="radio" name="gender" value="Male" />
    Female <input type="radio" name="gender" value="Female" />
    Other <input type="radio" name="gender" value="Other" />
    <span class="error" id="genderErr"></span>

    <!-- Submit button -->
    <button type="submit">Register</button>
  </form>

  <script>
    function validate() {
      let valid = true;

      // Validate name
      const name = document.getElementById('name').value.trim();
      document.getElementById('nameErr').textContent = name === '' ? 'Name is required.' : '';
      if (name === '') valid = false;

      // Validate email
      const email = document.getElementById('email').value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      document.getElementById('emailErr').textContent = !emailPattern.test(email) ? 'Valid email is required.' : '';
      if (!emailPattern.test(email)) valid = false;

      // Validate course selection
      const course = document.getElementById('course').value;
      document.getElementById('courseErr').textContent = course === '' ? 'Please select a course.' : '';
      if (course === '') valid = false;

      // Validate gender selection
      const gender = document.querySelector('input[name="gender"]:checked');
      document.getElementById('genderErr').textContent = !gender ? 'Please select a gender.' : '';
      if (!gender) valid = false;

      if (valid) alert('Registration Successful!');
      return false;
    }
  </script>
</body>
</html>












<!-- Semantic HTML5 webpage using header, nav, section, article, footer -->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Semantic HTML5 Page</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
    header { background: #333; color: white; padding: 15px; text-align: center; }
    nav { background: #555; padding: 10px; text-align: center; }
    nav a { color: white; margin: 0 15px; text-decoration: none; }
    section { padding: 20px; }
    article { background: #f4f4f4; margin: 10px 0; padding: 15px; border-radius: 5px; }
    footer { background: #333; color: white; text-align: center; padding: 10px; }
  </style>
</head>
<body>

  <!-- Header section -->
  <header>
    <h1>MCA Department Portal</h1>
  </header>

  <!-- Navigation bar -->
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Courses</a>
    <a href="#">Contact</a>
  </nav>

  <!-- Main content section -->
  <section>
    <h2>Latest News</h2>

    <!-- Individual article -->
    <article>
      <h3>Semester Exams Announced</h3>
      <p>The semester exams will begin from next month. Students are advised to prepare accordingly.</p>
    </article>

    <!-- Another article -->
    <article>
      <h3>New Course Added</h3>
      <p>A new elective on Artificial Intelligence has been introduced for MCA students.</p>
    </article>
  </section>

  <!-- Footer section -->
  <footer>
    <p>&copy; 2025 MCA Department. All Rights Reserved.</p>
  </footer>

</body>
</html>







<!-- HTML page that embeds audio and video -->
<!DOCTYPE html>
<html>
<head>
  <title>Audio and Video</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 30px; }
    h2 { color: #333; }
  </style>
</head>
<body>

  <h1>Media Embedding Example</h1>

  <!-- Embedded Audio -->
  <h2>Audio Player</h2>
  <audio controls>
    <source src="audio.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>

  <br/><br/>

  <!-- Embedded Video -->
  <h2>Video Player</h2>
  <video width="480" height="270" controls>
    <source src="video.mp4" type="video/mp4" />
    Your browser does not support the video element.
  </video>

</body>
</html>








<!-- CSS3 animation to move a box from left to right continuously -->
<!DOCTYPE html>
<html>
<head>
  <title>CSS3 Box Animation</title>
  <style>
    body {
      margin: 0;
      padding: 40px;
      background: #f0f0f0;
    }

    /* Animated box */
    .box {
      width: 100px;
      height: 100px;
      background-color: #e74c3c;
      border-radius: 8px;
      position: relative;

      /* Apply moving animation infinitely */
      animation: moveLeftRight 2s linear infinite;
    }

    /* Keyframes to move box from left to right */
    @keyframes moveLeftRight {
      0%   { left: 0px; }
      50%  { left: 80%; }
      100% { left: 0px; }
    }
  </style>
</head>
<body>
  <h2>Box Moving Left to Right</h2>
  <div class="box"></div>
</body>
</html>









<!-- Navigation menu with hover effects and dropdown using CSS3 -->
<!DOCTYPE html>
<html>
<head>
  <title>Nav Menu with Dropdown</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body { font-family: Arial, sans-serif; }

    /* Main navigation bar */
    nav {
      background-color: #2c3e50;
    }

    nav ul {
      list-style: none;
      display: flex;
    }

    nav ul li {
      position: relative;
    }

    /* Navigation links */
    nav ul li a {
      display: block;
      padding: 15px 20px;
      color: white;
      text-decoration: none;
      transition: background 0.3s;
    }

    /* Hover effect on nav items */
    nav ul li a:hover {
      background-color: #e74c3c;
    }

    /* Dropdown menu - hidden by default */
    nav ul li .dropdown {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #34495e;
      min-width: 160px;
      z-index: 100;
    }

    /* Dropdown items */
    nav ul li .dropdown li a {
      padding: 12px 15px;
      display: block;
    }

    /* Show dropdown on hover */
    nav ul li:hover .dropdown {
      display: block;
    }
  </style>
</head>
<body>

  <nav>
    <ul>
      <li><a href="#">Home</a></li>

      <!-- Courses with dropdown -->
      <li>
        <a href="#">Courses ▾</a>
        <ul class="dropdown">
          <li><a href="#">MCA</a></li>
          <li><a href="#">BCA</a></li>
          <li><a href="#">BSc CS</a></li>
        </ul>
      </li>

      <!-- About with dropdown -->
      <li>
        <a href="#">About ▾</a>
        <ul class="dropdown">
          <li><a href="#">Faculty</a></li>
          <li><a href="#">History</a></li>
        </ul>
      </li>

      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

</body>
</html>








<!-- Navigation menu with hover effects and dropdown using CSS3 -->
<!DOCTYPE html>
<html>
<head>
  <title>Nav Menu with Dropdown</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body { font-family: Arial, sans-serif; }

    /* Main navigation bar */
    nav {
      background-color: #2c3e50;
    }

    nav ul {
      list-style: none;
      display: flex;
    }

    nav ul li {
      position: relative;
    }

    /* Navigation links */
    nav ul li a {
      display: block;
      padding: 15px 20px;
      color: white;
      text-decoration: none;
      transition: background 0.3s;
    }

    /* Hover effect on nav items */
    nav ul li a:hover {
      background-color: #e74c3c;
    }

    /* Dropdown menu - hidden by default */
    nav ul li .dropdown {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #34495e;
      min-width: 160px;
      z-index: 100;
    }

    /* Dropdown items */
    nav ul li .dropdown li a {
      padding: 12px 15px;
      display: block;
    }

    /* Show dropdown on hover */
    nav ul li:hover .dropdown {
      display: block;
    }
  </style>
</head>
<body>

  <nav>
    <ul>
      <li><a href="#">Home</a></li>

      <!-- Courses with dropdown -->
      <li>
        <a href="#">Courses ▾</a>
        <ul class="dropdown">
          <li><a href="#">MCA</a></li>
          <li><a href="#">BCA</a></li>
          <li><a href="#">BSc CS</a></li>
        </ul>
      </li>

      <!-- About with dropdown -->
      <li>
        <a href="#">About ▾</a>
        <ul class="dropdown">
          <li><a href="#">Faculty</a></li>
          <li><a href="#">History</a></li>
        </ul>
      </li>

      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

</body>
</html>
