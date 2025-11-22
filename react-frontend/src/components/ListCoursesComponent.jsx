import React, { useEffect, useState } from "react";
import CourseService from "../services/CourseService";
import { useHistory } from "react-router-dom";

const ListCoursesComponent = () => {
  const [courses, setCourses] = useState([]);
  const history = useHistory();

  useEffect(() => {
    CourseService.getCourses().then((res) => {
      setCourses(res.data);
    });
  }, []);

  const addCourse = () => {
    history.push("/add-course");
  };

  const editCourse = (id) => {
    history.push(`/update-course/${id}`);
  };

  const viewCourse = (id) => {
    history.push(`/view-course/${id}`);
  };

  const deleteCourse = (id) => {
    CourseService.deleteCourse(id).then(() => {
      setCourses(courses.filter((c) => c.id !== id));
    });
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4">Course List</h2>
      <button className="btn btn-primary mb-3" onClick={addCourse}>
        Add Course
      </button>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {courses.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">No courses found</td>
            </tr>
          ) : (
            courses.map((course) => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>
                  <button className="btn btn-info mx-2" onClick={() => viewCourse(course.id)}>
                    View
                  </button>

                  <button className="btn btn-warning mx-2" onClick={() => editCourse(course.id)}>
                    Edit
                  </button>

                  <button className="btn btn-danger mx-2" onClick={() => deleteCourse(course.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListCoursesComponent;
