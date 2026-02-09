import { useEffect, useState } from "react";
import { deletePostData, getPostData } from "../api/PostApi";
import { Form } from "./Form";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  const postData = async () => {
    const res = await getPostData();
    setData(res.data);
  };

  const handleDeleteData = async (id) => {
    try {
      const res = await deletePostData(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((currPost) => {
          return currPost.id !== id;
        });
        setData(newUpdatedPosts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePost = (currElm) => setUpdateDataApi(currElm);

  useEffect(() => {
    postData();
  }, []);

  return (
    <>
      <div className="post_form">
        <Form
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </div>
      <div>
        <ol className="gird_view">
          {data.map((currElm) => {
            const { id, title, body } = currElm;
            return (
              <li key={id} className="post_single">
                <p>ID: {id}</p>
                <p>
                  <span>Title:</span> {title}
                </p>
                <p>
                  <span>Body:</span> {body}
                </p>
                <div className="btns">
                  <button
                    className="btn"
                    onClick={() => handleUpdatePost(currElm)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn delBtn"
                    onClick={() => handleDeleteData(id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};
