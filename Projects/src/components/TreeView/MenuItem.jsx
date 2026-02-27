import { useState } from "react";
import { MenuList } from "./MenuList";

export const MenuItem = ({ item }) => {
  const [displayCurrentChild, setDisplayCurrentChild] = useState({});

  const handleToggleClick = (getCurrentLabel) => {
    setDisplayCurrentChild({
      ...displayCurrentChild,
      [getCurrentLabel]: !displayCurrentChild[getCurrentLabel],
    });
  };

  return (
    <li>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleClick(item.label)}>+</span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChild[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};
