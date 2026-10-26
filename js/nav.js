(function () {
  var header = document.querySelector(".site-header");
  if (header) {
    function markScrolled() {
      header.classList.toggle("is-scrolled", window.scrollY > 4);
    }
    markScrolled();
    window.addEventListener("scroll", markScrolled, { passive: true });
  }

  var button = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");

  if (button && nav) {
    var label = button.querySelector(".visually-hidden");

    function setOpen(open) {
      button.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("is-open", open);
      if (label) {
        label.textContent = open ? "Close menu" : "Menu";
      }
    }

    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") !== "true";
      setOpen(open);
      if (open) {
        var first = nav.querySelector("a");
        if (first) {
          first.focus();
        }
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        button.focus();
      }
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setOpen(false);
      }
    });

    var desktop = window.matchMedia("(min-width: 960px)");
    function closeIfDesktop() {
      if (desktop.matches) {
        setOpen(false);
      }
    }
    if (typeof desktop.addEventListener === "function") {
      desktop.addEventListener("change", closeIfDesktop);
    }
  }

  var params = new URLSearchParams(window.location.search);
  if (params.get("checkup") === "1") {
    var box = document.getElementById("free-margin-check-up");
    if (box) {
      box.checked = true;
    }
  }
})();
