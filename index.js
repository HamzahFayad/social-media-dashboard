{
    "use strict";

    console.log("...");

    var html = document.querySelector("html");

    function check() {
        var switcher = document.querySelector('input[type=checkbox]');

        if (switcher.checked) {
            html.classList.add("theme-light");
            html.classList.remove("theme-dark");
        }
        else {
            html.classList.remove("theme-light");
            html.classList.add("theme-dark");

        }
    }

}