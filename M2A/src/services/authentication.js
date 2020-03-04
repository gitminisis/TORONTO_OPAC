export function isLogged() {
  if (!document.getElementById("userid")) {
    return false;
  }
  let user = document.getElementById("userid").innerHTML;
  if (user === "") {
    return false;
  }
  return true;
}

export function invalidLogin() {
  if (!document.getElementById("invalid-login")) {
    return false;
  }
  return true;
}
