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

for (const field of ["李欣慰", "北京大学 汇丰商学院", "lixinwei0523@163.com", "LinkedIn", "GitHub", "Visitors:", "Views:"]) {
  assert(html.includes(field), `Missing sidebar field: ${field}`);
}

assert(!html.includes("Blog Posts"), "Blog Posts should not appear in MVP");
assert(html.includes("AppLovin"), "Missing AppLovin portfolio case");
assert(html.includes("叮咚买菜"), "Missing Dingdong Maicai portfolio case");
assert(html.includes("宏观数据预测"), "Missing macro forecasting portfolio case");
assert(html.includes("拼好饭项目研究"), "Missing Pinhaofan portfolio case");
assert(html.includes("全国大学生数学建模竞赛"), "Missing mathematical modeling content");
assert(css.includes("@media (max-width: 860px)"), "Missing responsive tablet/mobile styles");
assert(js.includes("updateLocalCounters"), "Missing counter enhancement");

console.log("Static homepage checks passed.");
