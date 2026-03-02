import { useEffect, useState } from "react";
import tabData from "./tabContent.json";

export const Tabs = () => {
  const [currentTabId, setCurrentTabId] = useState(1);

  const handleTab = (id) => {
    setCurrentTabId(id);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabData.map((tabItem) => {
          return (
            <div
              key={tabItem.id}
              onClick={() => handleTab(tabItem.id)}
              className="tab-item"
            >
              {tabItem.label}
            </div>
          );
        })}
      </div>
      <div className="tab-content">
        {tabData.map((tabItem) => {
          return currentTabId === tabItem.id ? (
            <div key={tabItem.id} className="content">
              {tabItem.content}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};
