import Login from "./Routes/AuthRoutes/Login";
import Layout from "./Components/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StudentLogin from "./Routes/AuthRoutes/StudentLogin";
import AdminLogin from "./Routes/AuthRoutes/AdminLogin";
import DashBoard from "./Routes/DashBoardRoute/DashBoard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/studentLogin" component={StudentLogin} exact />
          <Route path="/adminLogin" component={AdminLogin} exact />
          <Route path="/dashBoard" component={DashBoard} />
          <Route path="/" component={Login} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
