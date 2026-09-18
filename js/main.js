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

    video.addEventListener("loadeddata", function () {
      video.currentTime = 0;
    });

    function play() {
      video.play().catch(function () {});
    }
    function stop() {
      video.pause();
      video.currentTime = 0;
    }

    card.addEventListener("mouseenter", play);
    card.addEventListener("mouseleave", stop);
    card.addEventListener("focus", play);
    card.addEventListener("blur", stop);
  });
})();

(function () {
  var revealEls = document.querySelectorAll("[data-reveal], [data-reveal-fade]");
  if (!revealEls.length) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
})();

(function () {
  var wrappers = document.querySelectorAll(".about-photo");
  if (!wrappers.length) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    wrappers.forEach(function (wrapper) {
      wrapper.classList.add("about-photo--no-effect");
    });
    return;
  }

  var isDesktop = window.matchMedia("(min-width: 768px)").matches;
  if (!isDesktop) return;

  var ticking = false;

  function update() {
    wrappers.forEach(function (wrapper) {
      var rect = wrapper.getBoundingClientRect();
      var scrollable = rect.height - window.innerHeight;
      var progress = scrollable > 0 ? -rect.top / scrollable : 0;
      progress = Math.min(1, Math.max(0, progress));
      wrapper.style.setProperty("--expand", progress);
    });
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
})();
