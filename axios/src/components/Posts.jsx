import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
import { Card } from "./Card";
import { Form } from "./Form";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  const getPostData = async () => {
    const res = await getPost();
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="total-wrap">
      <Form
        data={data}
        setData={setData}
        updateDataApi={updateDataApi}
        setUpdateDataApi={setUpdateDataApi}
      />
      <ol className="section-post">
        {data.map((curElem) => {
          return (
            <Card
              key={curElem.id}
              curElem={curElem}
              data={data}
              setData={setData}
              updateDataApi={updateDataApi}
              setUpdateDataApi={setUpdateDataApi}
            />
          );
        })}
      </ol>
    </div>
  );
};
