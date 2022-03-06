export const setLocal = (item, data) => {
  const getData = JSON.parse(localStorage.getItem(item) || "[]");
  console.log(getData);
  const temp = getData.filter((el) => el._id === data._id);
  if (temp.length >= 1) return "stop";
  getData.push(data);
  localStorage.setItem(item, JSON.stringify(getData));
};

export const removeLocal = (item, id) => {
  const temp = JSON.parse(localStorage.getItem(item)).filter(
    (el) => el._id !== id
  );
  localStorage.setItem(item, JSON.stringify(temp));
  return temp;
};
