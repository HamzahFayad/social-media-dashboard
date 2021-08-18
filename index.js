{
  ("use strict");

  console.log("...");

  var html = document.querySelector("html");

  function check() {
    let switcher = document.querySelector("input[type=checkbox]");
    let card1 = document.querySelector(".card1");

    if (switcher.checked) {
      html.classList.add("theme-light");
      html.classList.remove("theme-dark");
    } else {
      html.classList.remove("theme-light");
      html.classList.add("theme-dark");
    }
  }
}
