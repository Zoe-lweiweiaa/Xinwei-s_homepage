import { existsSync, readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const css = readFileSync("styles.css", "utf8");
const js = readFileSync("script.js", "utf8");
const visibleText = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");

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

for (const field of ["Xinwei Li", "Peking University HSBC Business School", "lixinwei0523@163.com", "LinkedIn"]) {
  assert(html.includes(field), `Missing sidebar field: ${field}`);
}
assert(html.includes('href="https://www.linkedin.com/in/xinwei-li-lweiweiaa"'), "Missing real LinkedIn profile link");
for (const removedField of ["GitHub", "Visitors:", "Views:"]) {
  assert(!visibleText.includes(removedField), `Sidebar field should be removed: ${removedField}`);
}
assert(visibleText.includes("Oxford, UK / Shenzhen, China"), "Missing sidebar location line");
for (const iconClass of ["profile-icon-location", "profile-icon-school", "profile-icon-mail", "profile-icon-linkedin"]) {
  assert(html.includes(iconClass), `Missing sidebar icon class: ${iconClass}`);
}

assert(!html.includes("Blog Posts"), "Blog Posts should not appear in MVP");
assert(html.includes("AppLovin"), "Missing AppLovin portfolio case");
assert(html.includes("Dingdong Maicai"), "Missing Dingdong Maicai portfolio case");
assert(html.includes("AI-powered Diffuser Innovation"), "Missing AI-powered diffuser portfolio case");
assert(!html.includes("AI-powered Diffuser Innovation BD"), "AI-powered diffuser portfolio title should not include BD");
assert(html.includes("AI Investment Strategy Development"), "Missing AI investment strategy portfolio case");
assert(html.includes("Macro Data Forecasting"), "Missing macro forecasting portfolio case");
assert(html.includes("Pinhaofan Strategy Research"), "Missing Pinhaofan portfolio case");
assert(html.includes("National College Student Mathematical Modeling Competition"), "Missing mathematical modeling content");
assert(html.includes("🎨"), "Portfolio title should use the visual section icon");
assert(html.includes("portfolio-media"), "Portfolio cards should use a dedicated complete-image media area");
assert(html.includes("portfolio-content"), "Portfolio cards should use a dedicated content area");
assert(html.includes("portfolio-tags"), "Portfolio cards should include emphasized tags");
for (const portfolioText of [
  "Issued a Buy rating with a $555 target price.",
  "AI-powered ad flywheel",
  "40% take rate",
  "TP $555",
  "35%/21% Growth",
  "Issued a Buy rating with a $2.30 target price.",
  "front-end warehouse model",
  "7.5% net margin",
  "1,900 Orders/Warehouse",
  "Designed the commercialization strategy for an AI-powered smart fragrance diffuser",
  "$850 hardware price",
  "$400 annual consumables repurchase model",
  "$850 Hardware",
  "$400 Repurchase",
  "SOM Sizing",
  "Develop ETF investment strategies",
  "macroeconomic data acquisition",
  "LLM-based ranking",
  "32 trading days in total",
  "+ 0.70 to + 3.21 percentage points",
  "4/4 Positive Excess"
]) {
  assert(visibleText.includes(portfolioText), `Missing portfolio summary/tag text: ${portfolioText}`);
}
assert(html.includes("assets/diffuser-innovation-bd.png"), "Missing AI-powered diffuser portfolio image reference");
assert(existsSync("assets/diffuser-innovation-bd.png"), "AI-powered diffuser portfolio image asset is missing");
for (const asset of [
  "assets/ai-investment-strategy-1.png",
  "assets/ai-investment-strategy-2.png",
  "assets/ai-investment-strategy-3.png",
  "assets/ai-investment-strategy-4.png"
]) {
  assert(html.includes(asset), `Missing AI investment strategy image reference: ${asset}`);
  assert(existsSync(asset), `AI investment strategy image asset is missing: ${asset}`);
}
assert(html.includes("portfolio-media-grid"), "AI investment strategy images should use a 2x2 media grid");
assert(
  visibleText.indexOf("AI Investment Strategy Development") <
    visibleText.indexOf("AI-powered Diffuser Innovation") &&
    visibleText.indexOf("AI-powered Diffuser Innovation") <
      visibleText.indexOf("AppLovin (NASDAQ: APP.US)"),
  "AI investment strategy should appear first, followed by Diffuser, before AppLovin"
);
assert(
  !visibleText.includes("Selected research cases covering equity research, macro forecasting, strategy research, and quantitative problem solving."),
  "Portfolio section lead text should be removed"
);
assert(
  visibleText.indexOf("AI-powered Diffuser Innovation") <
    visibleText.indexOf("AppLovin (NASDAQ: APP.US)"),
  "AI-powered diffuser portfolio case should appear before AppLovin"
);
assert(
  visibleText.indexOf("AI Investment Strategy Development") <
    visibleText.indexOf("AI-powered Diffuser Innovation"),
  "AI investment strategy portfolio case should appear before Diffuser"
);
assert(css.includes("object-fit: contain"), "Portfolio images should display fully without cropping");
assert(css.includes(".portfolio-media-grid"), "Missing 2x2 portfolio media grid CSS");
assert(
  css.includes("width: min(1680px, calc(100% - 96px));"),
  "Page shell should use a wider desktop layout so all content sections can expand"
);
assert(
  css.includes("grid-template-columns: minmax(210px, 260px) minmax(0, 1fr);"),
  "Page shell should keep the author column compact and let the content column grow"
);
assert(
  css.includes("grid-template-columns: minmax(360px, 48%) minmax(0, 1fr);"),
  "Portfolio cards should give the media column more desktop space"
);
assert(css.includes("grid-template-rows: repeat(2, minmax(0, 1fr));"), "AI strategy images should use equal-height 2x2 rows");
assert(css.includes("padding: 10px;"), "Portfolio media should reduce padding so images appear larger");
assert(css.includes(".portfolio-card:hover"), "Portfolio cards should have Education-style hover interaction");
assert(css.includes("--accent: #d97352;"), "Accent color should match internship link orange");
assert(css.includes("--hover-border: rgba(217, 115, 82, 0.42);"), "Hover border should use the shared orange highlight");
assert(css.includes("background: var(--accent-soft);"), "Portfolio tags should use the light orange accent background");
assert(html.includes("🤔"), "About Me title should use the reference emoji icon");
assert(html.includes("AI-fluent finance professional"), "Missing approved About Me positioning");
assert(html.includes("capital markets, business fundamentals, and AI-enabled finance"), "Missing approved About Me focus");
assert(!html.includes("<span>Methods</span>"), "Methods fact card should be renamed to Research Focus");
assert(!html.includes("<strong>Capital Markets, Equity Research, Strategic Investment</strong>"), "Old Research Focus card should be removed");
assert(html.includes("<span>Research Focus</span><strong>Fundamental Analysis, Data Modeling, Field Research</strong>"), "Missing renamed Research Focus fact card");
assert(html.includes("<span>Tools</span><strong>Python, Stata, Wind, iFind, Capital IQ</strong>"), "Missing Tools fact card");
assert(html.includes("assets/pku-logo.png"), "Missing local PKU logo");
assert(html.includes("assets/cufe-logo.png"), "Missing local CUFE logo");
assert(existsSync("assets/pku-logo.png"), "PKU logo asset file is missing");
assert(existsSync("assets/cufe-logo.png"), "CUFE logo asset file is missing");
assert(html.includes("Peking University (PKU)"), "Missing PKU education entry");
assert(html.includes("📖"), "Education title should use the reference emoji icon");
assert(html.includes("HSBC Business School | M.A. | Major in Finance"), "Missing PKU degree details");
assert(html.includes("Oxford, UK, Shenzhen, China"), "Missing PKU locations");
assert(html.includes("Sep 2025 - Jun 2028"), "Missing PKU dates");
assert(html.includes("Central University of Finance & Economics (CUFE)"), "Missing CUFE education entry");
assert(html.includes("The College of Economics | B.A. | Major in Economics"), "Missing CUFE degree details");
assert(html.includes("Beijing, China"), "Missing CUFE location");
assert(html.includes("Sep 2021 - Jun 2025"), "Missing CUFE dates");
assert(html.includes("Honors and Awards"), "Honors section should use the reference title");
for (const honor of [
  "2026 | Best Practice Award in R&D Competition",
  "2026 | Top 100 of China Final of L'Oreal Brandstorm 2026",
  "2026 | Outstanding Executive Committee Member of Oxford Chinese Students and Scholars Association",
  "2025 | First-Class Comprehensive Development Scholarship",
  "2024 | National Scholarship",
  "2023 | National Second Prize, National College Student Mathematical Modeling Competition"
]) {
  assert(visibleText.includes(honor), `Missing honor entry: ${honor}`);
}
assert(
  visibleText.indexOf("2026 | Best Practice Award in R&D Competition") <
    visibleText.indexOf("2026 | Top 100 of China Final of L'Oreal Brandstorm 2026"),
  "Best Practice Award should appear before the L'Oreal Brandstorm honor"
);
assert(html.includes("honors-list"), "Honors should use the reference-style list");
assert(css.includes(".honors-list"), "Missing honors list CSS");
assert(css.includes(".honor-year"), "Missing bold honor year CSS");
assert(html.includes("📝"), "Publications title should use the reference emoji icon");
assert(visibleText.includes("Corporate Culture, Economic Uncertainty and Corporate Innovation"), "Missing publication title");
assert(visibleText.includes("Second Author"), "Missing publication author role");
assert(html.includes("https://kns.cnki.net/kcms2/article/abstract?"), "Missing CNKI publication link");
assert(html.includes("uniplatform=NZKPT"), "Missing CNKI publication platform parameter");
assert(html.includes("publication-list"), "Publications should use a concrete publication list");
assert(css.includes(".publication-item"), "Missing publication item CSS");
assert(css.includes(".publication-link"), "Missing publication link CSS");
for (const hobby of [
  "Presiding: Host of 2026 Oxford Spring Festival Gala, host of 2025 Freshers' Ball",
  "Swimming: Trained since age 5; proficiency in breaststroke, freestyle, and backstroke; avg. pace 2'50\"/100m",
  "Fitness: 3-day split training, shoulders, back &amp; glutes",
  "Singing &amp; Guitar: Member of Encore club"
]) {
  assert(visibleText.includes(hobby), `Missing hobby entry: ${hobby}`);
}
for (const icon of ["🎙️", "🏊", "🏋️", "🎸"]) {
  assert(html.includes(icon), `Missing hobby emoji: ${icon}`);
}
assert(html.includes("hobbies-list"), "Hobbies should use a one-row-per-hobby list");
assert(html.includes("🧡"), "Hobbies title should include the requested orange heart emoji");
assert(css.includes(".hobbies-list"), "Missing hobbies list CSS");
assert(css.includes(".hobby-name"), "Missing hobby name CSS");
for (const logo of [
  "assets/bytedance-logo.png",
  "assets/hengde-logo.png",
  "assets/swift-logo.png",
  "assets/meituan-logo.png",
  "assets/cicc-logo.png",
  "assets/shenwan-logo.png"
]) {
  assert(html.includes(logo), `Missing internship logo reference: ${logo}`);
  assert(existsSync(logo), `Internship logo asset file is missing: ${logo}`);
}
for (const internship of [
  "2026.04 - till now | ByteDance",
  "R&D Intern, Finance and Economy Sector",
  "2025.03 - 2025.06 | Hengde Capital",
  "Macroeconomic Research Intern, Investment Research Department",
  "2024.10 | Swift",
  "Core Support Volunteer, Event Operations",
  "2024.09 - 2025.01 | Meituan",
  "Industry Research and Analysis Intern, Strategic Investment Department",
  "2024.01 - 2024.04 | CCIG",
  "PE Investment Intern, Capital Management",
  "2023.07 - 2023.09 | Shenwan Hongyuan Securities",
  "Fixed Income Financing Intern, FICC"
]) {
  assert(visibleText.includes(internship), `Missing internship entry text: ${internship}`);
}
for (const link of [
  'href="https://www.bytedance.com/en/"',
  'href="http://www.hdamc.cn/menus"',
  'href="https://www.swift.com/"',
  'href="https://www.meituan.com/"',
  'href="https://www.ccifund.com/"',
  'href="https://www.swhysc.com/swhysc/"'
]) {
  assert(html.includes(link), `Missing internship company link: ${link}`);
}
assert(html.includes("internship-timeline"), "Internships should use the reference-style timeline");
assert(css.includes(".internship-timeline::before"), "Missing internship vertical timeline CSS");
assert(css.includes(".internship-node"), "Missing internship timeline node CSS");
assert(css.includes(".internship-company"), "Missing emphasized company CSS");
assert(!/[\u4e00-\u9fff]/.test(html), "Visible site HTML should be fully English with no Chinese characters");
assert(css.includes("@media (max-width: 860px)"), "Missing responsive tablet/mobile styles");
assert(css.includes(".education-item"), "Missing reference-style education item CSS");
assert(html.includes("education-main-row"), "Education entries should use a screenshot-style main row");
assert(html.includes("education-detail-row"), "Education entries should use a screenshot-style detail row");
assert(css.includes("grid-template-columns: 72px minmax(0, 1fr)"), "Education card should use logo plus content columns");
assert(css.includes(".education-meta-line"), "Education location/date should be styled as a right-side meta line");
assert(css.includes("border-radius: 18px"), "Education card should use large rounded screenshot-style corners");
assert(css.includes(".education-logo {\n  width: 64px;\n  height: 64px;"), "Education logos should use compact screenshot-style sizing");
assert(css.includes("background: transparent;"), "Education logos should not use a white badge background");
assert(css.includes("border-radius: 0;"), "Education logos should not use circular badge framing in the screenshot-style layout");
assert(js.includes("updateLocalCounters"), "Missing counter enhancement");

console.log("Static homepage checks passed.");
