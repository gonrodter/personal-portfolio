<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";

const assetMap = {
  "terron-logo.png": new URL("../assets/terron-logo.png", import.meta.url).href,
  "konecta-logo.jpeg": new URL("../assets/konecta-logo.jpeg", import.meta.url).href,
  "sngular-logo.webp": new URL("../assets/sngular-logo.webp", import.meta.url).href,
  "tuparty-logo.png": new URL("../assets/tuparty-logo.png", import.meta.url).href,
  "powerpool-logo.webp": new URL("../assets/powerpool-logo.webp", import.meta.url).href,
  "collecta-logo.webp": new URL("../assets/collecta-logo.webp", import.meta.url).href,
  "burntab-logo.png": new URL("../assets/burntab-logo.png", import.meta.url).href,
  "collecta-site.png": new URL("../assets/collecta-site.png", import.meta.url).href,
  "burntab-site.png": new URL("../assets/burntab-site.png", import.meta.url).href,
  "powerpool-site.png": new URL("../assets/powerpool-site.png", import.meta.url).href,
  "tuparty-site.png": new URL("../assets/tuparty-site.png", import.meta.url).href,
  "happy-face.png": new URL("../assets/happy-face.png", import.meta.url).href,
  "uxui.png": new URL("../assets/uxui.png", import.meta.url).href,
  "frontend.png": new URL("../assets/frontend.png", import.meta.url).href,
  "startup.png": new URL("../assets/startup.png", import.meta.url).href,
  "founder.png": new URL("../assets/founder.png", import.meta.url).href,
  "design.png": new URL("../assets/design.png", import.meta.url).href,
  "react-vue.png": new URL("../assets/react-vue.png", import.meta.url).href,
  "brackets.png": new URL("../assets/brackets.png", import.meta.url).href,
  "bbva-logo.webp": new URL("../assets/bbva-logo.webp", import.meta.url).href,
  "cambridge-logo.png": new URL("../assets/cambridge-logo.png", import.meta.url).href,
};

const asset = (file) => assetMap[file];

const email = "rodriguez.terron.gonzalo@gmail.com";
const phone = "+34 640 583 966";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gonzalorodriguezterron/",
    iconPath:
      "M4.98 3.5a2.48 2.48 0 1 1-4.96 0 2.48 2.48 0 0 1 4.96 0ZM.36 8.02h4.28V22H.36V8.02ZM8.03 8.02h4.1v1.9h.06c.57-1.08 1.97-2.22 4.06-2.22 4.34 0 5.14 2.86 5.14 6.57V22h-4.27v-6.85c0-1.63-.03-3.73-2.27-3.73-2.28 0-2.63 1.78-2.63 3.61V22H8.03V8.02Z",
    viewBox: "0 0 22 22",
  },
  {
    name: "GitHub",
    href: "https://github.com/gonrodter",
    iconPath:
      "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.14c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18A10.96 10.96 0 0 1 12 6.06c.98 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.13v3.15c0 .31.21.67.79.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z",
    viewBox: "0 0 24 24",
  },
  {
    name: "X",
    href: "https://x.com/Terr0nzz",
    iconPath:
      "M13.88 10.16 22.51.13h-2.04l-7.5 8.72L6.98.13H.08l9.05 13.17L.08 23.82h2.04l7.92-9.21 6.33 9.21h6.9l-9.39-13.66Zm-2.8 3.26-.92-1.31L2.87 1.67H6l5.89 8.43.92 1.31 7.66 10.97h-3.13l-6.26-8.96Z",
    viewBox: "0 0 24 24",
  },
  {
    name: "Product Hunt",
    href: "https://www.producthunt.com/@terr0nzz",
    iconPath:
      "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm1.38 14.36h-2.35v3.4H8.75V6.24h4.63a4.06 4.06 0 0 1 0 8.12Zm0-5.84h-2.35v3.56h2.35a1.78 1.78 0 0 0 0-3.56Z",
    viewBox: "0 0 24 24",
  },
];

const navItems = [
  { id: "top", label: "Home", href: "#top" },
  { id: "work", label: "Projects", href: "#work" },
  { id: "story", label: "Story", href: "#story" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "certifications", label: "Certifications", href: "#certifications" },
];

const companies = [
  { name: "Konecta", file: "konecta-logo.jpeg", rounded: true },
  { name: "SNGULAR", file: "sngular-logo.webp", rounded: true },
  { name: "TuParty", file: "tuparty-logo.png", rounded: true },
  { name: "PowerPool", file: "powerpool-logo.webp", rounded: true, white: true },
  { name: "Collecta", file: "collecta-logo.webp" },
  { name: "BurnTab", file: "burntab-logo.png" },
];

const projects = [
  {
    name: "Collecta",
    href: "https://trycollecta.com/",
    image: "collecta-site.png",
    alt: "Collecta website screenshot",
    kicker: "Founder / creator mobile app",
    description:
      "Built a mobile app and landing page for saving inspiration and turning it into content for social media",
    tags: ["Mobile app", "Creator tools"],
  },
  {
    name: "BurnTab",
    href: "https://burntab.com/",
    image: "burntab-site.png",
    alt: "BurnTab website screenshot",
    kicker: "Founder / macOS utility",
    description:
      "Built the product and landing page for a macOS menu bar app that keeps API costs visible while developers work",
    tags: ["Product", "Landing page"],
  },
  {
    name: "PowerPool",
    href: "https://powerpool.io/",
    image: "powerpool-site.png",
    alt: "PowerPool mining software corporate website screenshot",
    kicker: "Freelance frontend dev / crypto mining software",
    description:
      "Designed and developed the corporate website, translating a technical product into a responsive web experience",
    tags: ["Website", "Frontend"],
  },
  {
    name: "TuParty",
    href: "https://tuparty.club/",
    image: "tuparty-site.png",
    alt: "TuParty website screenshot",
    kicker: "Co-founder & CMO / website + web app",
    description:
      "Designed and developed the website and web app for a QR-based song request and voting platform for events",
    tags: ["Landing page", "Web app"],
  },
];

const story = [
  "I started in consulting, building custom software products for clients. In 2024 I moved closer to the full product loop by co-founding TuParty, and later building BurnTab and Collecta.",
  "That changed how I work. I care about the interface, but also about the product decision behind it, the distribution path after launch and whether the final experience is simple enough for people to actually use.",
];

const freelanceProjects = [
  {
    index: "01",
    name: "PowerPool",
    description:
      "Designed and built the corporate website for a crypto mining product, making a technical offer easier to understand and explore",
  },
  {
    index: "02",
    name: "LOOK",
    description:
      "Helped shape the MVP with frontend fixes, translations, image preview canvas, payment flow work and automated delivery for buyers",
  },
  {
    index: "03",
    name: "Vertical Group",
    description:
      "Developed the El Publicista newsletter with a focus on dependable rendering, clean layout and campaign-ready presentation",
  },
];

const experience = [
  {
    date: "2026 - Present",
    role: "Founder, BurnTab",
    description:
      "Built a native macOS menu bar product for tracking API spending in real time, plus the landing page, product positioning and early distribution",
  },
  {
    date: "2026 - Present",
    role: "Founder, Collecta",
    description:
      "Building a mobile app for creators who save inspiration across platforms and need to turn it into hooks, scripts, checklists and content plans",
  },
  {
    date: "2025",
    role: "Lanzadera startup acceleration program",
    description:
      "Selected with my own project and worked on product strategy, growth and focus with mentors and other founders",
  },
  {
    date: "2024 - Present",
    role: "Co-founder & CMO, TuParty",
    description:
      "Designed and developed the company website and mobile UI for a QR-based song request platform, while collaborating on product strategy and new verticals",
  },
  {
    date: "2023 - Present",
    role: "Freelance frontend developer",
    description:
      "Building custom websites, applications and software platforms for clients, with a focus on clean interfaces, responsiveness and production-ready delivery",
    projects: freelanceProjects,
  },
  {
    date: "Jun 2023 - Jul 2024",
    role: "Full-stack developer, SNGULAR",
    description:
      "Worked on Vitaly's mobile application in an eight-person team, leading frontend UI tasks and contributing across frontend, backend and stack migrations",
  },
  {
    date: "2022 - 2023",
    role: "Software developer, Konecta Group",
    description:
      "Built Java and Spring systems for high-load file processing and banking-related POS contracting workflows using DB2, Oracle and AWS deployment routines",
  },
];

const certifications = [
  {
    date: "Oct 2022",
    title: "BBVA Hackathon",
    description: "Winner of Microsoft’s technological challenge",
    logo: "bbva-logo.webp",
    institution: "BBVA",
  },
  {
    date: "Nov 2020",
    title: "Certificate in Advanced English",
    description: "University of Cambridge",
    logo: "cambridge-logo.png",
    institution: "Cambridge English",
  },
  {
    date: "Jun 2016",
    title: "First Certificate in English",
    description: "University of Cambridge",
    logo: "cambridge-logo.png",
    institution: "Cambridge English",
  },
];

const skills = [
  "React",
  "Vue",
  "Claude",
  "Codex",
  "JavaScript",
  "HTML",
  "CSS",
  "Java",
  "Spring",
  "Supabase",
  "SQL",
  "Postgres",
  "Oracle",
  "AWS",
  "Git",
  "Scrum",
];

const activeSection = ref("top");
const isMobile = ref(false);
const mobileMenuOpen = ref(false);
const contentRef = ref(null);
const mobileQuery = ref(null);
let navFrame = 0;
let revealObserver = null;

const productWordImage = computed(() => (isMobile.value ? "design.png" : "startup.png"));
const productWordAlt = computed(() => (isMobile.value ? "Design" : "Startup"));
const heroOwnerLetters = "Gonzalo’s".split("");
const heroTitleLetters = "Portfolio".split("");
const heroOwnerAnimating = ref(false);
const heroTitleAnimating = ref(false);
const companyLogosAnimating = ref(false);
let heroOwnerAnimationTimer = null;
let heroTitleAnimationTimer = null;
let companyLogosAnimationTimer = null;

function getScrollTop() {
  return isMobile.value ? window.scrollY : contentRef.value?.scrollTop ?? 0;
}

function getSectionTop(section) {
  return isMobile.value
    ? section.getBoundingClientRect().top + window.scrollY
    : section.offsetTop;
}

function setActiveSection() {
  const sections = Array.from(document.querySelectorAll("[data-section]"));
  if (!sections.length) return;

  const anchor = getScrollTop() + 160;
  let current = sections[0].dataset.section;

  sections.forEach((section) => {
    if (anchor >= getSectionTop(section)) {
      current = section.dataset.section;
    }
  });

  const scrollRoot = contentRef.value;
  const maxedDesktopScroll =
    !isMobile.value &&
    scrollRoot &&
    scrollRoot.scrollTop + scrollRoot.clientHeight >= scrollRoot.scrollHeight - 24;
  const maxedPageScroll =
    isMobile.value &&
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 24;

  activeSection.value = maxedDesktopScroll || maxedPageScroll ? sections.at(-1).dataset.section : current;
}

function requestActiveSectionUpdate() {
  if (navFrame) return;
  navFrame = requestAnimationFrame(() => {
    navFrame = 0;
    setActiveSection();
  });
}

function setMobileMenuOpen(isOpen) {
  mobileMenuOpen.value = isOpen;
  document.body.classList.toggle("mobile-menu-open", isOpen);
}

function handleAnchorClick(event) {
  const href = event.currentTarget.getAttribute("href");
  const target = href ? document.querySelector(href) : null;

  if (mobileMenuOpen.value) {
    setMobileMenuOpen(false);
  }

  if (!target || !contentRef.value || isMobile.value) return;

  event.preventDefault();
  contentRef.value.scrollTo({
    top: target.offsetTop - 24,
    behavior: "smooth",
  });
}

function handleMediaChange(event) {
  isMobile.value = event.matches;
  if (!event.matches) {
    setMobileMenuOpen(false);
  }
  setupRevealObserver();
  requestActiveSectionUpdate();
}

function handleKeydown(event) {
  if (event.key === "Escape") {
    setMobileMenuOpen(false);
  }
}

function triggerHeroWordAnimation(word) {
  const isOwner = word === "owner";
  const animationRef = isOwner ? heroOwnerAnimating : heroTitleAnimating;
  const existingTimer = isOwner ? heroOwnerAnimationTimer : heroTitleAnimationTimer;

  if (existingTimer) {
    window.clearTimeout(existingTimer);
  }

  animationRef.value = false;
  window.requestAnimationFrame(() => {
    animationRef.value = true;
    const timer = window.setTimeout(() => {
      animationRef.value = false;
      if (isOwner) {
        heroOwnerAnimationTimer = null;
      } else {
        heroTitleAnimationTimer = null;
      }
    }, 1120);

    if (isOwner) {
      heroOwnerAnimationTimer = timer;
    } else {
      heroTitleAnimationTimer = timer;
    }
  });
}

function triggerCompanyLogoAnimation() {
  if (companyLogosAnimationTimer) {
    window.clearTimeout(companyLogosAnimationTimer);
  }

  companyLogosAnimating.value = false;
  window.requestAnimationFrame(() => {
    companyLogosAnimating.value = true;
    companyLogosAnimationTimer = window.setTimeout(() => {
      companyLogosAnimating.value = false;
      companyLogosAnimationTimer = null;
    }, 1080);
  });
}

function setupRevealObserver() {
  revealObserver?.disconnect();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = Array.from(
    document.querySelectorAll(
      [
        ".section-observe .section-heading",
        ".hero-sketch > *",
        ".project-card",
        ".story-copy p",
        ".timeline-item",
        ".certification-card",
        ".skill-cloud span",
      ].join(", ")
    )
  );

  targets.forEach((target, index) => {
    target.classList.add("scroll-reveal");
    target.style.setProperty("--reveal-delay", `${Math.min(index % 8, 7) * 70}ms`);
  });

  const heroTargets = Array.from(document.querySelectorAll(".hero-sketch > .scroll-reveal"));
  window.requestAnimationFrame(() => {
    heroTargets.forEach((target, index) => {
      window.setTimeout(() => target.classList.add("is-visible"), index * 90);
    });
  });

  if (reduceMotion || !targets.length) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const rootBounds = isMobile.value
    ? { top: 0, bottom: window.innerHeight }
    : contentRef.value?.getBoundingClientRect();

  targets.forEach((target) => {
    const bounds = target.getBoundingClientRect();
    if (rootBounds && bounds.top < rootBounds.bottom && bounds.bottom > rootBounds.top) {
      const delay = Number.parseFloat(target.style.getPropertyValue("--reveal-delay")) || 0;
      window.setTimeout(() => target.classList.add("is-visible"), delay);
    }
  });

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = Number.parseFloat(entry.target.style.getPropertyValue("--reveal-delay")) || 0;
        window.setTimeout(() => entry.target.classList.add("is-visible"), delay);
        revealObserver?.unobserve(entry.target);
      });
    },
    {
      root: isMobile.value ? null : contentRef.value,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    }
  );

  targets.forEach((target) => revealObserver.observe(target));
}

onMounted(async () => {
  await nextTick();
  mobileQuery.value = window.matchMedia("(max-width: 820px)");
  isMobile.value = mobileQuery.value.matches;
  mobileQuery.value.addEventListener("change", handleMediaChange);

  contentRef.value?.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
  window.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
  window.addEventListener("resize", requestActiveSectionUpdate);
  window.addEventListener("keydown", handleKeydown);
  setupRevealObserver();
  setActiveSection();
});

onBeforeUnmount(() => {
  contentRef.value?.removeEventListener("scroll", requestActiveSectionUpdate);
  window.removeEventListener("scroll", requestActiveSectionUpdate);
  window.removeEventListener("resize", requestActiveSectionUpdate);
  window.removeEventListener("keydown", handleKeydown);
  mobileQuery.value?.removeEventListener("change", handleMediaChange);
  revealObserver?.disconnect();
  if (heroOwnerAnimationTimer) window.clearTimeout(heroOwnerAnimationTimer);
  if (heroTitleAnimationTimer) window.clearTimeout(heroTitleAnimationTimer);
  if (companyLogosAnimationTimer) window.clearTimeout(companyLogosAnimationTimer);
  document.body.classList.remove("mobile-menu-open");
  if (navFrame) cancelAnimationFrame(navFrame);
});
</script>

<template>
  <div class="app-shell">
    <aside class="sidebar" aria-label="Portfolio navigation">
      <div class="sidebar-top">
        <a class="brand" href="#top" aria-label="Gonzalo Rodríguez Terrón portfolio home" @click="handleAnchorClick">
          <img class="brand-mark" :src="asset('terron-logo.png')" alt="" aria-hidden="true" />
          <span class="brand-text">Gonzalo's Portfolio</span>
        </a>

        <div class="rule"></div>

        <nav class="rail-nav">
          <a
            v-for="item in navItems"
            :key="item.id"
            class="rail-link"
            :class="{ 'is-active': activeSection === item.id }"
            :href="item.href"
            @click="handleAnchorClick"
          >
            <span>{{ item.label }}</span>
          </a>
          <a class="sidebar-contact-button" :href="`mailto:${email}`">
            <span>Contact me</span>
          </a>
          <div class="social-links" aria-label="Social links">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              class="social-link"
              :href="link.href"
              :aria-label="link.name"
              target="_blank"
              rel="noreferrer"
            >
              <svg aria-hidden="true" :viewBox="link.viewBox" focusable="false">
                <path :d="link.iconPath" />
              </svg>
            </a>
          </div>
        </nav>
      </div>

      <div class="sidebar-bottom">
        <div class="sidebar-companies" aria-label="Companies and projects">
          <p class="rail-label"><span class="rail-label-lighter">Worked with</span> 8+ companies</p>
          <div
            class="company-logo-grid"
            :class="{ 'is-animating': companyLogosAnimating }"
            @pointerenter="triggerCompanyLogoAnimation"
          >
            <img
              v-for="(company, index) in companies"
              :key="company.name"
              :class="{ 'logo-rounded': company.rounded, 'logo-white': company.white }"
              :style="{ '--logo-index': index }"
              :src="asset(company.file)"
              :alt="company.name"
            />
          </div>
        </div>
        <p class="rail-meta">{{ email }}<br />{{ phone }}</p>
      </div>
    </aside>

    <header class="mobile-header" :class="{ 'is-open': mobileMenuOpen }">
      <a class="brand compact" href="#top" aria-label="Gonzalo Rodriguez Terron portfolio home" @click="handleAnchorClick">
        <span class="brand-mark">
          <img :src="asset('terron-logo.png')" alt="" aria-hidden="true" />
        </span>
        <span class="brand-text">Gonzalo's Portfolio</span>
      </a>

      <button
        class="mobile-menu-toggle"
        type="button"
        :aria-label="mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        :aria-expanded="String(mobileMenuOpen)"
        aria-controls="mobile-menu"
        @click="setMobileMenuOpen(!mobileMenuOpen)"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>

    <nav id="mobile-menu" class="mobile-menu" :class="{ 'is-open': mobileMenuOpen }" aria-label="Mobile navigation">
      <div>
        <a
          v-for="item in navItems"
          :key="item.id"
          class="mobile-menu-link"
          :class="{ 'is-active': activeSection === item.id }"
          :href="item.href"
          @click="handleAnchorClick"
        >
          <span>{{ item.label }}</span>
        </a>
        <a class="mobile-menu-contact" :href="`mailto:${email}`" @click="setMobileMenuOpen(false)">
          Contact me
        </a>
        <div class="mobile-social-links" aria-label="Social links">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            class="social-link"
            :href="link.href"
            :aria-label="link.name"
            target="_blank"
            rel="noreferrer"
            @click="setMobileMenuOpen(false)"
          >
            <svg aria-hidden="true" :viewBox="link.viewBox" focusable="false">
              <path :d="link.iconPath" />
            </svg>
          </a>
        </div>
      </div>

      <div class="sidebar-bottom">
        <div class="sidebar-companies" aria-label="Companies and projects">
          <p class="rail-label"><span class="rail-label-lighter">Worked with</span> 8+ companies</p>
          <div
            class="company-logo-grid"
            :class="{ 'is-animating': companyLogosAnimating }"
            @pointerenter="triggerCompanyLogoAnimation"
          >
            <img
              v-for="(company, index) in companies"
              :key="company.name"
              :class="{ 'logo-rounded': company.rounded, 'logo-white': company.white }"
              :style="{ '--logo-index': index }"
              :src="asset(company.file)"
              :alt="company.name"
            />
          </div>
        </div>
        <p class="rail-meta">{{ email }}<br />{{ phone }}</p>
      </div>
    </nav>

    <main id="top" ref="contentRef" class="content">
      <div class="main-panel">
        <section class="hero section-observe" data-section="top">
          <div class="hero-sketch" aria-label="Portfolio hero with handwritten technology notes">
            <p class="portfolio-label">
              <span class="availability-dot"></span>
              Websites, apps & product interfaces
            </p>

            <div class="portfolio-wordmark">
              <span
                class="portfolio-owner"
                :class="{ 'is-animating': heroOwnerAnimating }"
                aria-label="Gonzalo’s"
                @pointerenter="triggerHeroWordAnimation('owner')"
              >
                <span
                  v-for="(letter, index) in heroOwnerLetters"
                  :key="`owner-${letter}-${index}`"
                  class="hero-title-letter"
                  :style="{ '--letter-index': index }"
                  aria-hidden="true"
                >
                  {{ letter }}
                </span>
              </span>
              <h1
                aria-label="Portfolio"
                :class="{ 'is-animating': heroTitleAnimating }"
                @pointerenter="triggerHeroWordAnimation('title')"
              >
                <span
                  v-for="(letter, index) in heroTitleLetters"
                  :key="`${letter}-${index}`"
                  class="hero-title-letter"
                  :style="{ '--letter-index': index }"
                  aria-hidden="true"
                >
                  {{ letter }}
                </span>
              </h1>
              <img class="sketch-word word-frontend" :src="asset('uxui.png')" alt="UI/UX" />
              <img class="sketch-word word-product" :src="asset(productWordImage)" :alt="productWordAlt" />
              <img class="sketch-word word-api" :src="asset('frontend.png')" alt="Frontend" />
              <img class="sketch-word word-react" :src="asset('react-vue.png')" alt="React plus Vue" />
              <img class="sketch-word word-founder" :src="asset('founder.png')" alt="Founder" />
              <img class="sketch-word word-ship" :src="asset('design.png')" alt="Design" />

              <img class="doodle doodle-braces" :src="asset('brackets.png')" alt="" aria-hidden="true" />
              <img class="svg-doodle happy-face" :src="asset('happy-face.png')" alt="" aria-hidden="true" />
            </div>

            <p class="hero-text">
              I’m Gonzalo Rodríguez Terrón, a software engineer with 5+ years of experience across
              client platforms, startup products, landing pages and more.
            </p>

            <div class="hero-actions" aria-label="Primary actions">
              <a class="button primary" href="#work" @click="handleAnchorClick">
                View Projects
                <span class="button-arrow" aria-hidden="true"></span>
              </a>
              <a class="button secondary" :href="`mailto:${email}`">Contact me</a>
            </div>
          </div>
        </section>

        <section id="work" class="section section-observe" data-section="work">
          <div class="section-heading">
            <h2>Projects</h2>
          </div>

          <div class="project-grid">
            <article v-for="project in projects" :key="project.name" class="project-card">
              <a
                class="project-image-link"
                :href="project.href"
                target="_blank"
                rel="noreferrer"
                :aria-label="`Open ${project.name}`"
              >
                <img :src="asset(project.image)" :alt="project.alt" />
              </a>
              <div class="project-body">
                <div>
                  <p class="project-kicker">{{ project.kicker }}</p>
                  <h3>{{ project.name }}</h3>
                  <p>{{ project.description }}</p>
                  <div class="project-tags">
                    <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
                  </div>
                </div>
                <a class="text-link" :href="project.href" target="_blank" rel="noreferrer">Open live site</a>
              </div>
            </article>
          </div>
        </section>

        <section id="story" class="section story-section section-observe" data-section="story">
          <div class="section-heading">
            <h2>My Story</h2>
          </div>
          <div class="story-copy">
            <p v-for="paragraph in story" :key="paragraph">{{ paragraph }}</p>
          </div>
        </section>

        <section id="experience" class="section section-observe" data-section="experience">
          <div class="section-heading">
            <h2>Experience</h2>
          </div>

          <div class="timeline">
            <article v-for="item in experience" :key="`${item.date}-${item.role}`" class="timeline-item">
              <div class="timeline-date">{{ item.date }}</div>
              <div class="timeline-body">
                <h3>{{ item.role }}</h3>
                <p>{{ item.description }}</p>
                <div v-if="item.projects" class="experience-projects" aria-label="Selected freelance projects">
                  <p class="experience-projects-label">Selected client work</p>
                  <article
                    v-for="project in item.projects"
                    :key="project.name"
                    class="experience-project"
                    :class="{ 'is-last': project === item.projects.at(-1) }"
                  >
                    <span class="experience-project-index">{{ project.index }}</span>
                    <div>
                      <h4>{{ project.name }}</h4>
                      <p>{{ project.description }}</p>
                    </div>
                  </article>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="certifications" class="section certification-section section-observe" data-section="certifications">
          <div class="section-heading">
            <h2>Certifications</h2>
          </div>

          <div class="certification-grid" aria-label="Certifications and recognitions">
            <article v-for="certification in certifications" :key="certification.title" class="certification-card">
              <div class="certification-top">
                <div class="certification-date">{{ certification.date }}</div>
                <img class="certification-logo" :src="asset(certification.logo)" :alt="certification.institution" />
              </div>
              <div>
                <h3>{{ certification.title }}</h3>
                <p>{{ certification.description }}</p>
              </div>
            </article>
          </div>
        </section>

        <section class="section skill-section">
          <div class="section-heading">
            <h2>Stack</h2>
          </div>
          <div class="skill-cloud" aria-label="Skills">
            <span v-for="skill in skills" :key="skill">{{ skill }}</span>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
