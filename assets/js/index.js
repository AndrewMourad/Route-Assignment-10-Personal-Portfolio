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

var filterBtns = document.querySelectorAll(".portfolio-filter");
var portfolioItems = document.querySelectorAll(".portfolio-item");

for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function () {
    var selectedFilter = this.getAttribute("data-filter");
    for (let j = 0; j < filterBtns.length; j++) {
      filterBtns[j].classList.remove(
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
        "active",
      );
      filterBtns[j].classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "border-slate-300",
        "dark:border-slate-700",
      );
    }
    this.classList.remove(
      "bg-white",
      "dark:bg-slate-800",
      "text-slate-600",
      "dark:text-slate-300",
      "border",
      "border-slate-300",
      "dark:border-slate-700",
    );
    this.classList.add(
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
      "active",
    );
    for (let k = 0; k < portfolioItems.length; k++) {
      var itemCategory = portfolioItems[k].getAttribute("data-category");
      if (selectedFilter === "all" || itemCategory === selectedFilter) {
        portfolioItems[k].style.display = "block";
      } else {
        portfolioItems[k].style.display = "none";
      }
    }
  });
}

var carousel = document.getElementById("testimonials-carousel");
var prevBtn = document.getElementById("prev-testimonial");
var nextBtn = document.getElementById("next-testimonial");
var indicators = document.querySelectorAll(".carousel-indicator");

var currentIndex = 0;
var totalSlides = 4;

function updateCarousel() {
  var translateValue = currentIndex * 33.333;
  carousel.style.transform = `translateX(${translateValue}%)`;
}

function updateIndicators() {
  for (var i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("bg-accent");
    indicators[i].classList.add("bg-slate-400", "dark:bg-slate-600");
  }
  indicators[currentIndex].classList.remove(
    "bg-slate-400",
    "dark:bg-slate-600",
  );
  indicators[currentIndex].classList.add("bg-accent");
}

nextBtn.addEventListener("click", function () {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
  updateIndicators();
});

prevBtn.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1;
  }
  updateCarousel();
  updateIndicators();
});

for (var i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener("click", function () {
    currentIndex = parseInt(this.getAttribute("data-index"));
    updateCarousel();
    updateIndicators();
  });
}
