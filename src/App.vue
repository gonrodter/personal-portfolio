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

const productWordImage = computed(() => (isMobile.value ? "design.png" : "startup.png"));
const productWordAlt = computed(() => (isMobile.value ? "Design" : "Startup"));

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
  requestActiveSectionUpdate();
}

function handleKeydown(event) {
  if (event.key === "Escape") {
    setMobileMenuOpen(false);
  }
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
  setActiveSection();
});

onBeforeUnmount(() => {
  contentRef.value?.removeEventListener("scroll", requestActiveSectionUpdate);
  window.removeEventListener("scroll", requestActiveSectionUpdate);
  window.removeEventListener("resize", requestActiveSectionUpdate);
  window.removeEventListener("keydown", handleKeydown);
  mobileQuery.value?.removeEventListener("change", handleMediaChange);
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
        </nav>
      </div>

      <div class="sidebar-bottom">
        <div class="sidebar-companies" aria-label="Companies and projects">
          <p class="rail-label"><span class="rail-label-lighter">Worked with</span> 8+ companies</p>
          <div class="company-logo-grid">
            <img
              v-for="company in companies"
              :key="company.name"
              :class="{ 'logo-rounded': company.rounded, 'logo-white': company.white }"
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
      </div>

      <div class="sidebar-bottom">
        <div class="sidebar-companies" aria-label="Companies and projects">
          <p class="rail-label"><span class="rail-label-lighter">Worked with</span> 8+ companies</p>
          <div class="company-logo-grid">
            <img
              v-for="company in companies"
              :key="company.name"
              :class="{ 'logo-rounded': company.rounded, 'logo-white': company.white }"
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
              <span class="portfolio-owner">Gonzalo’s</span>
              <h1>Portfolio</h1>
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
