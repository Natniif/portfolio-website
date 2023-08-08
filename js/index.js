function scrollToTop() {
  const div = document.querySelector("a.anchor");
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

fetch("json/blog.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const output = document.querySelector(".blog-out");
    data.Blogs.forEach((post) => {
      const out = addBlog(post);
      output.innerHTML += out;
    });
  });

function addBlog(post) {
  let out = "";
  out += `<a href="${post.link}">${post.name}</a> 
  <p>Date Added: ${post.date}</p>
  `;

  return out;
}

function addProjects(project) {
  let out = "";
  out += `
    <div class="port-div">
      <div class="port-img-div" 
        style="background-image: url('${project.img}')"
      ></div>
      <div class="port-text-div">
        <h2>${project.name}</h2>
        <p>${project.desc}</p>
        <a href="${project.link}">GitHub link to Project</a>
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
