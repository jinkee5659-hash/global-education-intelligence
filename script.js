const sections = [...document.querySelectorAll(".month-section")];
const links = [...document.querySelectorAll(".timeline__link")];

const setActiveLink = (id) => {
  links.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setActiveLink(visible.target.id);
    }
  },
  {
    rootMargin: "-18% 0px -58% 0px",
    threshold: [0.12, 0.24, 0.5],
  },
);

sections.forEach((section) => observer.observe(section));

links.forEach((link) => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href").slice(1);
    setActiveLink(id);
  });
});
