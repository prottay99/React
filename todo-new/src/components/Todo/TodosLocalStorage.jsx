const todoKey = "todoList";

export const getLocalStorageData = () => {
  const getDataFromLS = localStorage.getItem(todoKey);
  if (!getDataFromLS) return [];
  return JSON.parse(getDataFromLS);
};

export const setLocalStorageData = (todos) => {
  return localStorage.setItem(todoKey, JSON.stringify(todos));
};
