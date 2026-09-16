(function () {
  var header = document.getElementById("site-header");
  var toggle = document.getElementById("nav-toggle");

  if (!header || !toggle) return;

  toggle.addEventListener("click", function () {
    var isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggle.setAttribute("aria-label", isOpen ? "Zamknij menu" : "Otwórz menu");
  });
})();

(function () {
  var heroVideo = document.querySelector(".hero__video");
  if (!heroVideo) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    heroVideo.removeAttribute("autoplay");
    heroVideo.pause();
  }
})();

(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  document.querySelectorAll(".work__card-video").forEach(function (video) {
    var card = video.closest(".work__card");
    if (!card) return;

    card.addEventListener("mouseenter", function () {
      video.currentTime = 0;
      video.play().catch(function () {});
    });
    card.addEventListener("mouseleave", function () {
      video.pause();
    });
    card.addEventListener("focus", function () {
      video.currentTime = 0;
      video.play().catch(function () {});
    });
    card.addEventListener("blur", function () {
      video.pause();
    });
  });
})();
