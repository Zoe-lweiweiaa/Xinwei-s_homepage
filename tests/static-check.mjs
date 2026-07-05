import { readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const css = readFileSync("styles.css", "utf8");
const js = readFileSync("script.js", "utf8");

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

const navLabels = ["About Me", "Education", "Internships", "Portfolio", "Publications", "Honors", "Hobbies"];
let lastIndex = -1;

for (const label of navLabels) {
  const index = html.indexOf(`>${label}</a>`);
  assert(index > lastIndex, `Navigation label missing or out of order: ${label}`);
  lastIndex = index;
}

for (const id of ["about-me", "education", "internships", "portfolio", "publications", "honors", "hobbies"]) {
  assert(html.includes(`id="${id}"`), `Missing section id: ${id}`);
}

for (const field of ["Xinwei Li", "Peking University HSBC Business School", "lixinwei0523@163.com", "LinkedIn", "GitHub", "Visitors:", "Views:"]) {
  assert(html.includes(field), `Missing sidebar field: ${field}`);
}

assert(!html.includes("Blog Posts"), "Blog Posts should not appear in MVP");
assert(html.includes("AppLovin"), "Missing AppLovin portfolio case");
assert(html.includes("Dingdong Maicai"), "Missing Dingdong Maicai portfolio case");
assert(html.includes("Macro Data Forecasting"), "Missing macro forecasting portfolio case");
assert(html.includes("Pinhaofan Strategy Research"), "Missing Pinhaofan portfolio case");
assert(html.includes("National College Student Mathematical Modeling Competition"), "Missing mathematical modeling content");
assert(html.includes("AI-fluent finance professional"), "Missing approved About Me positioning");
assert(html.includes("capital markets, business fundamentals, and AI-enabled finance"), "Missing approved About Me focus");
assert(!/[\u4e00-\u9fff]/.test(html), "Visible site HTML should be fully English with no Chinese characters");
assert(css.includes("@media (max-width: 860px)"), "Missing responsive tablet/mobile styles");
assert(js.includes("updateLocalCounters"), "Missing counter enhancement");

console.log("Static homepage checks passed.");
