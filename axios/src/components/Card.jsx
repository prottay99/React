import { deletePost } from "../api/PostApi";

export const Card = ({ curElem, data, setData }) => {
  const { id, title, body } = curElem;

  const handlePostDelete = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const updatedPost = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(updatedPost);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className="card">
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <div className="buttons">
        <button className="btn">Edit</button>
        <button className="btn" onClick={() => handlePostDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
