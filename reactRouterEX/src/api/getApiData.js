export const getApiData = async () => {
  try {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await fetch(`${import.meta.env.VITE_API_LINK}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
