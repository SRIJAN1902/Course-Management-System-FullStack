# Course Management System (Full-Stack) 🚀  
A complete full-stack CRUD application built with **Spring Boot** (backend) and **React** (frontend) — converted from a template and rewritten into a modern **Course Management System**.

---

## 🎯 Project Overview  
This project allows users to manage courses (add / edit / view / delete) through a web interface.  
It demonstrates full-stack skills: REST API backend, client-side UI, in-memory database, routing, and data flow.

---

## 🛠 Tech Stack  

**Backend**
- Spring Boot 3  
- Java 17  
- Spring Data JPA  

**Database**
- H2 (in-memory, auto-created on app start)

**Frontend**
- React  
- React Router v5  
- Axios  
- Bootstrap 4  

**Other**
- Git & GitHub  
- Maven  
- Node.js + npm  

---

## ✅ Features  

- 📚 **Course CRUD**
  - Create a course (title + description)
  - Edit course details
  - View course details
  - Delete course

- 🌐 **REST API**
  - Clean, versioned endpoints under `/api/v1/courses`

- 💻 **Frontend UI**
  - Course list page
  - Add Course page
  - Update Course page
  - View Course details page

- 🗄 **H2 In-Memory DB**
  - No manual DB setup needed
  - Great for demos / portfolio

---

## 🔧 Backend Setup (Spring Boot)  

### 1️⃣ Go to backend folder  

```bash
cd springboot-backend
2️⃣ Run the application
bash
Copy code
./mvnw spring-boot:run
By default, backend runs at:
👉 http://localhost:8080

3️⃣ REST API Endpoints
GET /api/v1/courses – list all courses

POST /api/v1/courses – create a new course

GET /api/v1/courses/{id} – get a single course

PUT /api/v1/courses/{id} – update a course

DELETE /api/v1/courses/{id} – delete a course

🎨 Frontend Setup (React)
1️⃣ Go to frontend folder
bash
Copy code
cd react-frontend
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ (For Node 18+ / 20+ users – required)
bash
Copy code
export NODE_OPTIONS=--openssl-legacy-provider    # Git Bash / Linux / Mac
# or
set NODE_OPTIONS=--openssl-legacy-provider       # Windows CMD
4️⃣ Start the React app
bash
Copy code
npm start
Frontend runs at:
👉 http://localhost:3000

Make sure backend (8080) is running before using the UI.

📁 Project Structure
text
Copy code
Course-Management-System-FullStack/
│
├── springboot-backend/
│   ├── src/main/java/net/javaguides/springboot/
│   │   ├── controller/        # CourseController
│   │   ├── model/             # Course entity
│   │   └── repository/        # CourseRepository
│   └── src/main/resources/
│       └── application.properties  # H2 DB + JPA config
│
└── react-frontend/
    ├── src/components/
    │   ├── ListCoursesComponent.jsx
    │   ├── CreateCourseComponent.jsx
    │   ├── UpdateCourseComponent.jsx
    │   └── ViewCourseComponent.jsx
    ├── src/services/
    │   └── CourseService.js
    └── src/App.js
🎓 Why This Project is Strong for University / Jobs
Shows real full-stack ability (backend + frontend)

Uses modern technologies (Java 17, Spring Boot 3, React)

Clean REST API with clear endpoints

Proper Git branching (feat/domain-course → merged into master)

Separated frontend and backend with clear responsibilities

Easy to clone and run, which is great for reviewers / professors

You can mention this in your CV / SOP as:

“Implemented a full-stack Course Management System using Spring Boot (Java 17), React, and H2 database, including complete CRUD operations and RESTful APIs.”

🌟 Future Improvements
Add authentication (Spring Security + JWT)

Replace H2 with MySQL / PostgreSQL

Add search, filter, and pagination for courses

Dockerize backend and frontend

Deploy to Render / Railway / Netlify / Vercel

🚀 How to Run Everything Together
Start backend:

bash
Copy code
cd springboot-backend
./mvnw spring-boot:run
Start frontend (in another terminal):

bash
Copy code
cd react-frontend
export NODE_OPTIONS=--openssl-legacy-provider
npm start
Open browser:

API test: http://localhost:8080/api/v1/courses

UI: http://localhost:3000

Made with ❤️ by @SRIJAN1902
