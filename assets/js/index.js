var sections = document.querySelectorAll("section");
var navLi = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
  var current = "";
  for (let i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  }
  for (let i = 0; i < navLi.length; i++) {
    var li = navLi[i];
    li.classList.remove("active");
    if (li.getAttribute("href") === "#" + current) {
      li.classList.add("active");
    }
  }
});

var themeToggle = document.getElementById("theme-toggle-button");

themeToggle.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "light") {
  document.documentElement.classList.remove("dark");
}
