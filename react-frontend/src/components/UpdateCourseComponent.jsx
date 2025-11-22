import React, { useEffect, useState } from "react";
import CourseService from "../services/CourseService";
import { useHistory, useParams } from "react-router-dom";

const UpdateCourseComponent = () => {
  const { id } = useParams();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    CourseService.getCourseById(id).then((res) => {
      setTitle(res.data.title);
      setDescription(res.data.description);
    });
  }, [id]);

  const updateCourse = (e) => {
    e.preventDefault();

    const course = { title, description };

    CourseService.updateCourse(id, course).then(() => {
      history.push("/courses");
    });
  };

  const cancel = () => {
    history.push("/courses");
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h3 className="text-center">Update Course</h3>

        <form>
          <div className="form-group mb-3">
            <label>Course Title</label>
            <input
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label>Description</label>
            <input
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button className="btn btn-success" onClick={updateCourse}>
            Update
          </button>

          <button className="btn btn-danger ms-3" type="button" onClick={cancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourseComponent;
