function loadHome() {
  const content = document.querySelector(".content");
  const container = document.createElement("div")
  const headline = document.createElement("h1");
  const animatedText = document.createElement("h3")
  const para = document.createElement("p")

  container.classList.add("name")
  animatedText.classList.add("typing")
  headline.textContent = "Anh Nam Le Giang";
  animatedText.textContent = "";
  para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  content.appendChild(container)
  container.appendChild(headline);
  container.appendChild(animatedText)
  container.appendChild(para)
}



export default loadHome;
