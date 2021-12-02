import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import "../../styles/AuthRouthStyles/AdminLogin.css";
function AdminLogin() {
  const history = useHistory();
  return (
    <div>
      <div className="mainBody">
        <div elevation={0} className="paper">
          <form className="form">
            <TextField
              id="standard-basic"
              label="Admin name"
              variant="standard"
              className="textField"
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
              className="textField"
            />
            <Button
              variant="contained"
              color="success"
              className="submitButton"
              onClick={() => {
                // history.push("/dashBoard");
              }}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
