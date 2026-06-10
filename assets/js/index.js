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
