import { message } from "antd";

export function save(src) {
  if (!localStorage.getItem("asset")) {
    localStorage.setItem("asset", "[]");
  }

  let assets = localStorage.getItem("asset");

  assets = JSON.parse(assets);
  if (assets.filter(e => e === src).length > 0) {
    
    return false;
  }
  assets.unshift(src);
  assets = JSON.stringify(assets);
  localStorage.setItem("asset", assets);

  return true;
}

export function deleteItem(src) {
  let assets = localStorage.getItem("asset");

  assets = JSON.parse(assets);
  assets = assets.filter(e => {
   
    return e !== src;
  });
  assets = JSON.stringify(assets);

  localStorage.setItem("asset", assets);
}

export function getAll() {
  if (!localStorage.getItem("asset")) {
    localStorage.setItem("asset", "[]");
    return [];
  }

  let assets = localStorage.getItem("asset");
  assets = JSON.parse(assets);
  console.log(assets);
  return assets;
}

export function removeAll() {
  localStorage.setItem("asset", "[]");
  return true;
}
export function copyURL(domId) {
  let url = document.getElementById(domId);
  url.select();
  document.execCommand("copy");

  message.success("URL Copied");
}
