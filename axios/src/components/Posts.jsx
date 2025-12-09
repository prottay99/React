import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
import { Card } from "./Card";

export const Posts = () => {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      <ol className="section-post">
        {data.map((curElem) => {
          return (
            <Card
              key={curElem.id}
              curElem={curElem}
              data={data}
              setData={setData}
            />
          );
        })}
      </ol>
    </>
  );
};
