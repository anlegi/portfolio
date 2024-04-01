function loadProject() {
  const content = document.querySelector(".content");
  const headline = document.createElement("h1");
  const container = document.createElement("div")
  container.classList.add("title")
  headline.textContent = "My Projects";
  content.appendChild(headline);
  content.appendChild(container)
}

export default loadProject;
