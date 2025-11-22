import React, { useEffect, useState } from "react";
import CourseService from "../services/CourseService";
import { useHistory, useParams } from "react-router-dom";

const ViewCourseComponent = () => {
  const { id } = useParams();
  const history = useHistory();

  const [course, setCourse] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    CourseService.getCourseById(id).then((res) => {
      setCourse(res.data);
    });
  }, [id]);

  const backToList = () => {
    history.push("/courses");
  };

  return (
    <div className="container mt-4">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "500px", margin: "auto" }}
      >
        <h3 className="text-center mb-4">Course Details</h3>

        <div className="mb-3">
          <strong>Course Title:</strong>
          <p className="form-control">{course.title}</p>
        </div>

        <div className="mb-3">
          <strong>Description:</strong>
          <p className="form-control">{course.description}</p>
        </div>

        <button className="btn btn-primary w-100" onClick={backToList}>
          Back to Course List
        </button>
      </div>
    </div>
  );
};

export default ViewCourseComponent;
