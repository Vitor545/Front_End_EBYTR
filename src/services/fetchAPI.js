export const getTask = async () => {
  const getTasks = `http://localhost:5000/`;
  const response = await fetch(getTasks);
  const userTask = await response.json();
  return userTask;
};
