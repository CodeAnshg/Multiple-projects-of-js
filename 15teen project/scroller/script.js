let about = document.querySelector(".about");
let btn = document.querySelectorAll(".tab-btn");
let article = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  let id = e.target.dataset.id;
  if (id) {
    btn.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    article.forEach(function (article) {
      article.classList.remove("active");
    });
    let element = document.getElementById(id);
    element.classList.add("active");
  }
});