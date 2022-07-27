export const getUserData = (id) => {
  return fetch(`https://api.stage.targemy.com/v1/user/${id}`)
    .then((response) => response.json())
    .then((data) => data);
};
