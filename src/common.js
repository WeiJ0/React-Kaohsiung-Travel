export const getLsItem = (name) => localStorage.getItem(name);
export const setLsItem = (name, value) => localStorage.setItem(name, value);

export const getHistory = () =>
  getLsItem("history") ? JSON.parse(getLsItem("history")) : [];

export const setHistory = (id) => {
  let history = getLsItem("history") ? JSON.parse(getLsItem("history")) : [];
  setLsItem("history", JSON.stringify(Array.from(new Set([...history, id]))));
};
