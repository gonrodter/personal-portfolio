const sectionLinks = Array.from(document.querySelectorAll("[data-section-link]"));
const observedSections = Array.from(document.querySelectorAll("[data-section]"));
const scrollRoot = document.querySelector(".content");

let navFrame = 0;

function getScrollTop() {
  return window.matchMedia("(max-width: 820px)").matches
    ? window.scrollY
    : scrollRoot.scrollTop;
}

function getSectionTop(section) {
  return window.matchMedia("(max-width: 820px)").matches
    ? section.getBoundingClientRect().top + window.scrollY
    : section.offsetTop;
}

function setActiveSection() {
  if (!sectionLinks.length || !observedSections.length) return;

  const anchor = getScrollTop() + 160;
  let current = observedSections[0].dataset.section;

  observedSections.forEach((section) => {
    if (anchor >= getSectionTop(section)) {
      current = section.dataset.section;
    }
  });

  const maxedDesktopScroll =
    !window.matchMedia("(max-width: 820px)").matches &&
    scrollRoot.scrollTop + scrollRoot.clientHeight >= scrollRoot.scrollHeight - 24;
  const maxedPageScroll =
    window.matchMedia("(max-width: 820px)").matches &&
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 24;

  if (maxedDesktopScroll || maxedPageScroll) {
    current = observedSections[observedSections.length - 1].dataset.section;
  }

  sectionLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.sectionLink === current);
  });
}

function requestActiveSectionUpdate() {
  if (navFrame) return;
  navFrame = requestAnimationFrame(() => {
    navFrame = 0;
    setActiveSection();
  });
}

if (scrollRoot) {
  scrollRoot.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
  window.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
  window.addEventListener("resize", requestActiveSectionUpdate);
  setActiveSection();
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target || !scrollRoot || window.matchMedia("(max-width: 820px)").matches) return;

    event.preventDefault();
    scrollRoot.scrollTo({
      top: target.offsetTop - 24,
      behavior: "smooth",
    });
  });
});
