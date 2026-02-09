import { useEffect, useState } from "react";
import { postData, updateData } from "../api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(updateDataApi).length === 0;

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addPostData = async () => {
    try {
      const res = await postData(addData);

      if (res.status === 201) {
        setData([...data, res.data]);
        setAddData({ title: "", body: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updatePostData = async () => {
    try {
      const res = await updateData(updateDataApi.id, addData);

      if (res.status === 200) {
        setData((prev) => {
          return prev.map((currElm) => {
            return currElm.id === updateDataApi.id ? res.data : currElm;
          });
        });
        setAddData({ title: "", body: "" });
        setUpdateDataApi({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
  };

  // get the updated data and add into input field

  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);

  return (
    <>
      <form className="form__part" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            autoComplete="off"
            id="title"
            name="title"
            placeholder="Add Title"
            value={addData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="body"></label>
          <input
            type="text"
            autoComplete="off"
            id="body"
            name="body"
            placeholder="Add body text"
            value={addData.body}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn" type="submit" value={isEmpty ? "Add" : "Edit"}>
          {isEmpty ? "Add" : "Edit"}
        </button>
      </form>
    </>
  );
};
