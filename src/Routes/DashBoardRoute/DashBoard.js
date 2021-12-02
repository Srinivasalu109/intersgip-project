import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../../Components/Layout";
import Attendence from "../sidebarRoutes/Student/Attendence";
import BookMarks from "../sidebarRoutes/Student/BookMarks";
import Calender from "../sidebarRoutes/Student/Calender";
import ContactUs from "../sidebarRoutes/Student/ContactUs";
import CourseEnrolled from "../sidebarRoutes/Student/CourseEnrolled";
import LogOut from "../sidebarRoutes/Student/LogOut";
import NewCourses from "../sidebarRoutes/Student/NewCourses";
import Notifications from "../sidebarRoutes/Student/Notifications";
import StudyMaterial from "../sidebarRoutes/Student/StudyMaterial";
import Tests from "../sidebarRoutes/Student/Tests";
const dashBoardInfo = [
  "Course Enrolled",
  "New Courses",
  "Study Material",
  "Attendence",
  "Tests",
  "Notifications",
  "Book Marks",
  "Calender",
  "Log Out",
  "Contact Us",
];
const components = [
  CourseEnrolled,
  NewCourses,
  StudyMaterial,
  Attendence,
  Tests,
  Notifications,
  BookMarks,
  Calender,
  LogOut,
  ContactUs,
];
function DashBoard(props) {
  console.log(props.match.path);
  var a = 10;
  return (
    <div>
      {/* <BrowserRouter> */}
      <Layout dashBoardInfo={dashBoardInfo}>
        {console.log("running..")}

        <Switch>
          {dashBoardInfo.map((routeComponent, index) => {
            // {
            //   console.log(
            //     `${props.match.path}/${routeComponent.replace(/ /g, "")}`
            //   );
            // }

            return (
              <Route
                path={`${props.match.path}/${routeComponent.replace(/ /g, "")}`}
                component={components[index]}
                exact
              />
            );
          })}
        </Switch>
      </Layout>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default DashBoard;
