const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setActiveLink = () => {
  const current = sections
    .filter((section) => section.getBoundingClientRect().top <= 120)
    .pop() || sections[0];

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${current.id}`);
  });
};

const updateLocalCounters = () => {
  const viewNode = document.getElementById("view-count");
  const visitorNode = document.getElementById("visitor-count");
  if (!viewNode || !visitorNode) return;

  const viewKey = "xinwei-homepage-views";
  const visitorKey = "xinwei-homepage-visitor";
  const nextViews = Number(localStorage.getItem(viewKey) || "0") + 1;
  localStorage.setItem(viewKey, String(nextViews));

  if (!localStorage.getItem(visitorKey)) {
    localStorage.setItem(visitorKey, "1");
  }

  viewNode.textContent = nextViews.toLocaleString("en-US");
  visitorNode.textContent = localStorage.getItem(visitorKey);
};

window.addEventListener("scroll", setActiveLink, { passive: true });
window.addEventListener("resize", setActiveLink);
setActiveLink();
updateLocalCounters();
