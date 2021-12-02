import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useHistory } from "react-router";
import styles from "../../styles/AuthRouthStyles/StudentLogin.module.css";
// import "../../styles/AuthRouthStyles/StudentLogin.css";
function StudentLogin() {
  const history = useHistory();
  return (
    <div className={styles.mainbody}>
      <div className={styles.maincontainer}>
        <Form
          classname={styles.studentLoginForm}
          onSubmit={() => {
            history.push("/dashBoard");
          }}
        >
          <Form.Field>
            <label style={{ color: "white" }}>First Name</label>
            <input placeholder="User Name" required />
          </Form.Field>
          <Form.Field>
            <label style={{ color: "white" }}>Password</label>
            <input placeholder="Enter Password" type="password" required />
          </Form.Field>

          <Button type="submit">LOGIN</Button>
        </Form>
      </div>
    </div>
  );
}

export default StudentLogin;
