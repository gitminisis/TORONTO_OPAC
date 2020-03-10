import { message } from "antd";
export function save(search) {
  if (!localStorage.getItem("search")) {
    localStorage.setItem("search", "[]");
  }

  let searches = localStorage.getItem("search");
  searches = JSON.parse(searches);
  if (searches.filter(e => e.search_term === search.search_term).length > 0) {
    message.warning("This search has already been saved");
    return false;
  }

  searches.unshift(search);
  console.log(searches);
  searches = JSON.stringify(searches);
  localStorage.setItem("search", searches);
  message.success("This search was succesfully saved !");
  return true;
}

export function deleteItem(search) {
  let searches = localStorage.getItem("search");

  searches = JSON.parse(searches);
  searches = searches.filter(e => {
    return e.search_term !== search.search_term;
  });
  searches = JSON.stringify(searches);

  localStorage.setItem("search", searches);
}
export function getAll() {
  if (!localStorage.getItem("search")) {
    localStorage.setItem("search", "[]");
    return [];
  }

  let searches = localStorage.getItem("search");
  searches = JSON.parse(searches);

  return searches;
}

export function removeAll() {
  localStorage.setItem("search", "[]");
  return true;
}
