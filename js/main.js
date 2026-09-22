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
  document.querySelectorAll(".pricing-tier__durations").forEach(function (group) {
    var tier = group.closest(".pricing-tier");
    if (!tier) return;
    var minutesEl = tier.querySelector(".pricing-tier__minutes");
    var amountEl = tier.querySelector(".pricing-tier__amount");
    var singleEl = tier.querySelector(".pricing-tier__price--single");
    var buttons = group.querySelectorAll(".pricing-tier__duration");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) {
          b.classList.remove("is-active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        if (minutesEl) minutesEl.textContent = btn.dataset.minutes;
        if (amountEl) amountEl.textContent = btn.dataset.price;
        if (singleEl) {
          var isSingleDuration = btn.dataset.minutes === singleEl.dataset.minutesOnly;
          singleEl.hidden = !isSingleDuration;
        }
      });
    });
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

  document.querySelectorAll(".work__card-video:not([data-autoplay])").forEach(function (video) {
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

(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var statusEl = document.getElementById("contact-form-status");
  var progressFill = document.getElementById("contact-form-progress");
  var allSteps = Array.prototype.slice.call(form.querySelectorAll(".contact-form__step"));
  var step1 = form.querySelector('.contact-form__step[data-step="1"]');
  var step3 = form.querySelector('.contact-form__step[data-step="3"]');
  var visiblePath = [step1];

  function hasServiceChoice() {
    return !!form.querySelector('input[name="service"][type="radio"]');
  }

  function totalSteps() {
    if (!hasServiceChoice()) return 2;
    var selected = form.querySelector('input[name="service"]:checked');
    if (selected && selected.value === "Inne") return 2;
    return 3;
  }

  function updateProgress() {
    if (!progressFill) return;
    var ratio = Math.max(0, Math.min(1, (visiblePath.length - 1) / totalSteps()));
    progressFill.style.transform = "scaleX(" + ratio + ")";
  }

  function showStep(step) {
    allSteps.forEach(function (s) {
      s.hidden = true;
    });
    step.hidden = false;
    updateProgress();
  }

  function goNext(fromStep) {
    if (fromStep === step1 && hasServiceChoice()) {
      var selected = form.querySelector('input[name="service"]:checked');
      if (!selected) {
        form.querySelector('input[name="service"]').reportValidity();
        return;
      }
      var branch = form.querySelector('.contact-form__step[data-step="2"][data-branch="' + selected.value + '"]');
      var target = branch || step3;
      visiblePath.push(target);
      showStep(target);
      return;
    }
    visiblePath.push(step3);
    showStep(step3);
  }

  function goBack() {
    if (visiblePath.length < 2) return;
    visiblePath.pop();
    showStep(visiblePath[visiblePath.length - 1]);
  }

  updateProgress();

  form.addEventListener("click", function (e) {
    if (e.target.matches("[data-next]")) {
      goNext(e.target.closest(".contact-form__step"));
    }
    if (e.target.matches("[data-back]")) {
      goBack();
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    statusEl.textContent = "Wysyłanie...";

    var unvisitedFields = [];
    allSteps.forEach(function (step) {
      if (visiblePath.indexOf(step) !== -1) return;
      step.querySelectorAll("input, select, textarea").forEach(function (field) {
        unvisitedFields.push(field);
        field.disabled = true;
      });
    });

    var formData = new FormData(form);
    unvisitedFields.forEach(function (field) {
      field.disabled = false;
    });

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    })
      .then(function (response) {
        if (response.ok) {
          submitBtn.classList.add("is-sent");
          if (progressFill) progressFill.style.transform = "scaleX(1)";
          var backBtn = form.querySelector("[data-back]");
          if (backBtn) backBtn.disabled = true;
          statusEl.textContent = "Dziękuję za wiadomość! Odezwę się najszybciej jak to możliwe.";
        } else {
          statusEl.textContent = "Coś poszło nie tak. Spróbuj ponownie lub zadzwoń.";
          submitBtn.disabled = false;
        }
      })
      .catch(function () {
        statusEl.textContent = "Coś poszło nie tak. Spróbuj ponownie lub zadzwoń.";
        submitBtn.disabled = false;
      });
  });
})();
