import { useEffect, useState } from "react";
import faq from "../API/faq.json";
import { FAQ } from "./UI/FAQ";

export const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);

  const handleButton = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };

  return (
    <div className="accordion_container">
      <h1 className="heading">The Accordion</h1>
      <ul>
        {data.map((curElm) => {
          return (
            <FAQ
              key={curElm.id}
              curData={curElm}
              isActive={activeId === curElm.id}
              onToggle={() => handleButton(curElm.id)}
            />
          );
        })}
      </ul>
    </div>
  );
};
