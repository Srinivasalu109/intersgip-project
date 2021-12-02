import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import "../../styles/AuthRouthStyles/Login.css";
export default function Login() {
  const history = useHistory();
  return (
    <div>
      <div className="container">
        <Button
          variant="contained"
          onClick={() => {
            // history.push("/adminLogin");
          }}
        >
          ADMIN LOGIN
        </Button>
        <Button
          className="but"
          variant="contained"
          onClick={() => {
            history.push("/studentLogin");
          }}
        >
          STUDENT LOGIN
        </Button>
      </div>
    </div>
  );
}
