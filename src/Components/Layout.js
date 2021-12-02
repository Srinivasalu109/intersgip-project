import React from "react";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

function Layout({ children, dashBoardInfo }) {
  const ulr =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  const [selected, setSelected] = useState(null);
  const [path, setPath] = useState(null);
  const [count, setCount] = useState(0);
  const history = useHistory();

  console.log(children);
  const handleSelected = (index, Path) => {
    setSelected(index);
    setPath(Path.replace(/ /g, ""));
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(path);
    if (count)
      if (count === 1 || ulr === "dashBoard") history.push(`dashBoard/${path}`);
      else {
        history.push(path);
      }
    console.log(history);
  }, [selected]);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <Sidebar
            dashBoardInfo={dashBoardInfo}
            selected={selected}
            handleSelected={handleSelected}
          />
        </div>
        <div style={{ margin: "auto" }}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
