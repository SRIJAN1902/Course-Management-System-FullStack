import React, { useState } from "react";
import CourseService from "../services/CourseService";
import { useHistory } from "react-router-dom";

const CreateCourseComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  const saveCourse = (e) => {
    e.preventDefault();
    let course = { title, description };

    CourseService.createCourse(course).then(() => {
      history.push("/courses");
    });
  };

  const cancel = () => {
    history.push("/courses");
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h3 className="text-center">Add Course</h3>

        <form>
          <div className="form-group mb-3">
            <label>Course Title</label>
            <input
              className="form-control"
              placeholder="Enter course title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label>Description</label>
            <input
              className="form-control"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button className="btn btn-success" onClick={saveCourse}>
            Save
          </button>

          <button
            className="btn btn-danger ms-3"
            onClick={cancel}
            type="button"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCourseComponent;
