import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListCoursesComponent from './components/ListCoursesComponent';
import CreateCourseComponent from './components/CreateCourseComponent';
import UpdateCourseComponent from './components/UpdateCourseComponent';
import ViewCourseComponent from './components/ViewCourseComponent';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">

          <Switch>

            {/* List all courses */}
            <Route path="/" exact component={ListCoursesComponent}></Route>

            <Route path="/courses" component={ListCoursesComponent}></Route>

            {/* Create a course */}
            <Route path="/add-course" component={CreateCourseComponent}></Route>

            {/* Update a course */}
            <Route path="/update-course/:id" component={UpdateCourseComponent}></Route>

            {/* View a single course */}
            <Route path="/view-course/:id" component={ViewCourseComponent}></Route>

          </Switch>

        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
