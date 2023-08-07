function scrollToTop() {
  const div = document.querySelector(".about-me");
  div.scrollIntoView({ behavior: "smooth" });
}

fetch("json/portfolio.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const output = document.querySelector(".portfolio");
    data.project.forEach((project) => {
      const out = addProjectsToPage(project);
      output.innerHTML += out;
    });
  });

function addProjects() {
  // retrieve json and format to web page
  const out = "";
}

document.querySelector(".form").addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  const emailInput = document.querySelector("#email").value;
  const messageInput = document.querySelector("#message").value;
  console.log("button clicked");
  if (emailInput.length != 0 && messageInput.length != 0) {
    console.log("form submitted");
  } else {
    console.log("error");
    e.preventDefault();
  }
}
