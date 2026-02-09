import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get data
export const getPostData = () => {
  return api.get("/posts");
};

// delete data
export const deletePostData = (id) => {
  return api.delete(`/posts/${id}`);
};

// post method
export const postData = (post) => {
  return api.post("/posts", post);
};

// PUT method
export const updateData = (id, post) => {
  return api.put(`/posts/${id}`, post);
};
