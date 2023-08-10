function scrollToTop() {
  const div = document.querySelector("a.anchor");
  div.scrollIntoView({ behavior: "smooth" });
}

// --------------------- Typing animation ------------------------
const textElement1 = document.querySelector("#title");
const textToType1 = "Welcome to My Web Page!";

const textElement2 = document.querySelector("#title2");
const textToType2 =
  "My name is Fintan and I am currently training to be a fullstack developer!";

function typeText(textEl, textTo, charIndex = 0) {
  if (charIndex < textTo.length) {
    textEl.textContent += textTo.charAt(charIndex);
    charIndex++;
    setTimeout(function () {
      typeText(textEl, textTo, charIndex);
    }, 35);
  } else {
    textEl.classList.add("typing-animation");
  }
}

typeText(textElement1, textToType1);
typeText(textElement2, textToType2);

// --------------------- Chevron animation ------------------------
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
  out += ` 
    <div class="flex gap-2"> 
      <a href="${post.link}" target="_blank">${post.name}</a> 
      <p>Date Added: ${post.date}</p>
    </div>
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
        <h3><strong>${project.name}</strong></h3>
        <p>${project.desc}</p>
        <a href="${project.link}" target="_blank">GitHub link to Project</a>
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
