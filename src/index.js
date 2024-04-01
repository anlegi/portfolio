import loadHome from "./home";
import loadProject from "./project";
import "./style.css"

document.addEventListener("DOMContentLoaded", () => {
  loadHome();
})

function clearContent() {
  document.querySelector(".content").innerHTML = '';
}

document.getElementById("homeBtn").addEventListener("click", () => {
  clearContent();
  loadHome();
})

document.getElementById("projectBtn").addEventListener("click", () => {
  clearContent();
  loadProject();
})
