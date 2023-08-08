function scrollToTop() {
  const div = document.querySelector(".about-me");
  div.scrollIntoView({ behavior: "smooth" });
}

document.querySelector(".chevron").addEventListener("click", scrollToTop);

fetch("json/portfolio.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const output = document.querySelector(".port-out");
    data.Projects.forEach((project) => {
      const out = addProjects(project);
      output.innerHTML += out;
    });
  });

function addProjects(project) {
  // retrieve json and format to web page

  let out = "";

  out += `
    <div class="port-div">
      <div class="port-img-div" 
        style="background-image: url('${project.img}')"
      ></div>
      <div>
        <h2>${project.name}</h3>
        <p>${project.desc}</p>
      </div>
    </div>
  `;
  return out;
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
