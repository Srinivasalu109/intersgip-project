import "../styles/ComponentsStyles/sidebar.css";

export default function Sidebar({ dashBoardInfo, selected, handleSelected }) {
  const ulr =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  return (
    <div>
      <ul>
        {dashBoardInfo.map((sidebarItem, index) => (
          <div>
            <li
              className={
                sidebarItem.replace(/ /g, "") === ulr
                  ? "selected"
                  : "not-selected"
              }
              key={index}
              onClick={() => handleSelected(index, sidebarItem)}
            >
              {sidebarItem}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
