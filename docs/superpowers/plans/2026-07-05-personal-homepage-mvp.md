# Personal Homepage MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static research-oriented personal homepage for Li Xinwei using the requested navigation order and content adapted from the existing Miaoda portfolio.

**Architecture:** The MVP is a plain static site with separate files for structure, styling, and small progressive enhancement logic. Content is rendered directly in semantic HTML so the page works without a build step or JavaScript. JavaScript only enhances active navigation and local fallback counters.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js for static checks.

---

## File Structure

- Create `index.html`: semantic homepage content, sidebar, navigation, section anchors, portfolio cases, publications empty state, honors, hobbies, and contact/social rows.
- Create `styles.css`: responsive academic homepage layout inspired by the reference site, including top navigation, desktop sidebar, mobile stacking, typography, cards, and disabled social link styling.
- Create `script.js`: active-section navigation highlighting, smooth internal anchor behavior, and static-site counter fallback for Visitors and Views.
- Create `tests/static-check.mjs`: dependency-free checks for required sections, navigation order, missing Blog Posts, sidebar fields, and key portfolio content.
- Create `package.json`: simple scripts for `npm test` and optional local serving with Python's built-in HTTP server.

## Task 1: Static HTML Content

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create the semantic page skeleton**

Add `index.html` with a top nav in the exact requested order, a sidebar with all requested fields, and main sections matching the anchors.

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>李欣慰 | Personal Homepage</title>
    <meta name="description" content="李欣慰的研究型个人主页，展示商业研究、投资分析、教育经历、实习经历、作品案例、发表成果与荣誉。">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <header class="site-header">
      <a class="site-title" href="#about-me">李欣慰's Homepage</a>
      <nav class="site-nav" aria-label="Primary">
        <a href="#about-me">About Me</a>
        <a href="#education">Education</a>
        <a href="#internships">Internships</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#publications">Publications</a>
        <a href="#honors">Honors</a>
        <a href="#hobbies">Hobbies</a>
      </nav>
    </header>
    <div class="page-shell">
      <aside class="author-sidebar" aria-label="Author profile">
        <!-- Sidebar content goes here in Step 2. -->
      </aside>
      <main class="content" id="main-content">
        <!-- Sections go here in Steps 3-8. -->
      </main>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Add sidebar content**

Replace the sidebar placeholder with avatar, profile details, social rows, and counter rows.

```html
<img class="author-avatar" src="https://miaoda-edit-image.cdn.bcebos.com/57ek5ziaduyp/IMG-5dkdfygt0jk0.png" alt="李欣慰头像">
<h1 class="author-name">李欣慰</h1>
<p class="author-tagline">Business Research & Investment Analysis</p>
<ul class="author-links">
  <li><span class="icon" aria-hidden="true">🏫</span><span>北京大学 汇丰商学院</span></li>
  <li><span class="icon" aria-hidden="true">✉</span><a href="mailto:lixinwei0523@163.com">lixinwei0523@163.com</a></li>
  <li><span class="icon" aria-hidden="true">in</span><a class="is-disabled" href="#" aria-disabled="true">LinkedIn</a></li>
  <li><span class="icon" aria-hidden="true">GH</span><a class="is-disabled" href="#" aria-disabled="true">GitHub</a></li>
  <li><span class="icon" aria-hidden="true">👥</span><span>Visitors: <strong id="visitor-count">--</strong></span></li>
  <li><span class="icon" aria-hidden="true">👁</span><span>Views: <strong id="view-count">--</strong></span></li>
</ul>
```

- [ ] **Step 3: Add About Me and Education**

Add the first two content sections inside `<main>`.

```html
<section id="about-me" class="page-section">
  <h2>About Me</h2>
  <p>我是李欣慰，目前就读于北京大学汇丰商学院，关注商业研究、权益投研与战略投资。我相信数据不仅是数字的排列，更是企业价值与产业变化的线索。</p>
  <p>我的研究兴趣集中在产业结构、商业模式、公司竞争优势与宏观数据之间的关系，希望用扎实的资料搜集、数据分析和一手调研，为投资判断和战略决策提供可验证的依据。</p>
  <div class="compact-facts">
    <div><span>Research Focus</span><strong>Equity Research, Strategic Investment</strong></div>
    <div><span>Methods</span><strong>Industry Research, Data Analysis, Field Survey</strong></div>
    <div><span>Tools</span><strong>Python, Stata, Wind, iFind, Capital IQ</strong></div>
  </div>
</section>

<section id="education" class="page-section">
  <h2>Education</h2>
  <article class="timeline-item">
    <div class="item-meta">Beijing, China</div>
    <div class="item-body">
      <h3>北京大学 汇丰商学院</h3>
      <p>硕士在读，研究方向聚焦商业研究、投资分析与战略判断。</p>
    </div>
  </article>
</section>
```

- [ ] **Step 4: Add Internships**

Add a high-level internships section without inventing employer names or dates.

```html
<section id="internships" class="page-section">
  <h2>Internships</h2>
  <article class="timeline-item">
    <div class="item-meta">Research-oriented internships</div>
    <div class="item-body">
      <h3>商业研究与投资分析相关实习</h3>
      <p>累计完成 4 段研究导向实习，训练了行业研究框架、资料交叉验证、财务与经营数据拆解、调研问卷设计和投资建议表达能力。</p>
      <ul>
        <li>围绕公司竞争优势、行业挑战和市场分歧建立研究框架。</li>
        <li>结合公开资料、数据库和一手调研形成商业判断。</li>
        <li>在多线程任务中拆解优先级并推进研究产出。</li>
      </ul>
    </div>
  </article>
</section>
```

- [ ] **Step 5: Add Portfolio cases**

Add portfolio content adapted from the existing Miaoda site's research cases.

```html
<section id="portfolio" class="page-section">
  <h2>Portfolio</h2>
  <p class="section-lead">Selected research cases covering equity research, macro forecasting, strategy research, and quantitative problem solving.</p>
  <div class="portfolio-grid">
    <article class="portfolio-card">
      <img src="https://miaoda-conversation-file.cdn.bcebos.com/user-528msli3pb7k/conv-57ek5ziaduyq/20260301/file-9ytt1dc2uw3k.png" alt="AppLovin research visual">
      <div>
        <p class="eyebrow">Equity Research</p>
        <h3>AppLovin</h3>
        <p>从第一性原理出发，讨论流量、第三方广告、一手游戏数据与算法优势之间的关系，并审视 AppLovin 长期竞争力。</p>
        <ul>
          <li>研究 ATT 隐私政策、AI Agent、OpenAI 广告等行业变化。</li>
          <li>关注做空观点，包括广告作弊、数据窃取、非法追踪和洗钱争议。</li>
        </ul>
      </div>
    </article>
    <article class="portfolio-card">
      <img src="https://miaoda-conversation-file.cdn.bcebos.com/user-528msli3pb7k/conv-57ek5ziaduyq/20251216/file-89sbevoz4glc.jpg" alt="Dingdong Maicai research visual">
      <div>
        <p class="eyebrow">Equity Research</p>
        <h3>叮咚买菜</h3>
        <p>从市场主要分歧出发，研究前置仓重资产运营有效性与跨区域复制可行性。</p>
        <ul>
          <li>分析独立事业部、农业品牌、全国供给端布局与前置仓 UE 结构。</li>
          <li>讨论二线及以上城市拓展、江浙沪渗透率提升和 2B 业务增长空间。</li>
        </ul>
      </div>
    </article>
    <article class="portfolio-card">
      <img src="https://miaoda-edit-image.cdn.bcebos.com/57ek5ziaduyp/IMG-59lu21y74qv4.png" alt="Macro forecasting visual">
      <div>
        <p class="eyebrow">Macro Research</p>
        <h3>宏观数据预测</h3>
        <p>使用月度同比方法预测宏观数据，基于数据定义构建 ARIMA 时间序列模型。</p>
        <div class="metrics"><span>CPI 预测误差 <strong>0.68%</strong></span><span>覆盖年限 <strong>自 2015</strong></span></div>
      </div>
    </article>
    <article class="portfolio-card">
      <img src="https://miaoda-edit-image.cdn.bcebos.com/57ek5ziaduyp/IMG-5dl5z9w49q0w.png" alt="Strategy research visual">
      <div>
        <p class="eyebrow">Strategy Research</p>
        <h3>拼好饭项目研究</h3>
        <p>围绕直营和下沉市场运行情况，从商家画像、店铺结构和渠道心智设计调研问卷，并拆解商家经营效率。</p>
        <div class="metrics"><span>城市 <strong>12</strong></span><span>商家样本 <strong>80+</strong></span><span>菜品样本 <strong>160+</strong></span></div>
      </div>
    </article>
    <article class="portfolio-card">
      <img src="https://miaoda-edit-image.cdn.bcebos.com/57ek5ziaduyp/IMG-5dkdw6hybdog.png" alt="Mathematical modeling visual">
      <div>
        <p class="eyebrow">Problem Solving</p>
        <h3>全国大学生数学建模竞赛</h3>
        <p>围绕蔬菜销售、定价和补货策略建立非线性规划模型，结合小波分析和 BP 神经网络进行趋势与补货预测。</p>
        <div class="metrics"><span>样本 <strong>8,000+</strong></span><span>荣誉 <strong>全国二等奖</strong></span></div>
      </div>
    </article>
  </div>
</section>
```

- [ ] **Step 6: Add Publications, Honors, and Hobbies**

Add the remaining requested sections.

```html
<section id="publications" class="page-section">
  <h2>Publications</h2>
  <div class="empty-state">
    <p>Selected publications will be updated soon.</p>
  </div>
</section>

<section id="honors" class="page-section">
  <h2>Honors</h2>
  <ul class="plain-list">
    <li><strong>全国大学生数学建模竞赛 全国二等奖</strong> - 基于非线性规划、小波分析与 BP 神经网络完成销售、定价和补货策略建模。</li>
  </ul>
</section>

<section id="hobbies" class="page-section">
  <h2>Hobbies</h2>
  <div class="empty-state">
    <p>This section will be updated with personal interests and long-term side projects.</p>
  </div>
</section>
```

## Task 2: Styling

**Files:**
- Create: `styles.css`

- [ ] **Step 1: Add responsive academic layout CSS**

Create `styles.css` with a restrained off-white theme, fixed top navigation, desktop sidebar, and mobile stacking.

```css
:root {
  --bg: #fcfaf7;
  --panel: #fffdf9;
  --text: #342f29;
  --muted: #6f665d;
  --line: #ddd6cc;
  --accent: #7b3f2c;
  --accent-soft: #f3e8df;
  --shadow: 0 12px 30px rgba(52, 47, 41, 0.08);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  line-height: 1.65;
}
a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 28px;
  min-height: 64px;
  padding: 0 44px;
  background: rgba(252, 250, 247, 0.94);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(14px);
}
.site-title {
  flex: 0 0 auto;
  color: var(--text);
  font-size: 18px;
  font-weight: 700;
}
.site-title::after {
  display: block;
  width: 100%;
  height: 2px;
  margin-top: 10px;
  background: var(--text);
  content: "";
}
.site-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
}
.site-nav a {
  color: var(--muted);
  white-space: nowrap;
}
.site-nav a.is-active,
.site-nav a:hover {
  color: var(--text);
  text-decoration: none;
}
.page-shell {
  display: grid;
  grid-template-columns: minmax(190px, 230px) minmax(0, 900px);
  gap: 44px;
  width: min(1180px, calc(100% - 56px));
  margin: 36px auto 80px;
}
.author-sidebar {
  position: sticky;
  top: 96px;
  align-self: start;
  font-size: 14px;
}
.author-avatar {
  width: 148px;
  height: 148px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}
.author-name {
  margin: 18px 0 4px;
  font-size: 22px;
  line-height: 1.25;
}
.author-tagline {
  margin: 0 0 18px;
  color: var(--muted);
}
.author-links {
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.author-links li {
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr);
  align-items: start;
  gap: 8px;
  color: var(--muted);
}
.author-links .icon {
  color: var(--text);
  font-size: 12px;
  font-weight: 700;
  text-align: center;
}
.is-disabled {
  color: var(--muted);
  cursor: default;
  opacity: 0.75;
}
.is-disabled:hover { text-decoration: none; }
.content {
  min-width: 0;
  padding-bottom: 40px;
}
.page-section {
  padding: 28px 0 34px;
  border-bottom: 1px solid var(--line);
  scroll-margin-top: 86px;
}
.page-section:first-child { padding-top: 0; }
.page-section h2 {
  margin: 0 0 18px;
  font-size: 25px;
  line-height: 1.25;
}
.page-section h3 {
  margin: 0 0 8px;
  font-size: 18px;
}
.section-lead {
  max-width: 720px;
  color: var(--muted);
}
.compact-facts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 22px;
}
.compact-facts div,
.empty-state {
  padding: 14px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
}
.compact-facts span,
.eyebrow,
.item-meta {
  display: block;
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 0;
}
.compact-facts strong {
  display: block;
  margin-top: 4px;
  font-size: 14px;
}
.timeline-item {
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 22px;
  padding: 18px 0;
}
.timeline-item ul,
.portfolio-card ul {
  padding-left: 20px;
  margin: 10px 0 0;
}
.portfolio-grid {
  display: grid;
  gap: 18px;
}
.portfolio-card {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 18px;
  padding: 16px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
}
.portfolio-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid var(--line);
  background: var(--accent-soft);
}
.eyebrow {
  margin: 0 0 4px;
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
}
.metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}
.metrics span {
  padding: 6px 10px;
  background: var(--accent-soft);
  border-radius: 999px;
  color: var(--muted);
  font-size: 13px;
}
.plain-list {
  padding-left: 20px;
}
.empty-state p {
  margin: 0;
  color: var(--muted);
}

@media (max-width: 860px) {
  .site-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    padding: 14px 22px;
  }
  .site-title::after { margin-top: 5px; }
  .site-nav { gap: 12px 16px; font-size: 14px; }
  .page-shell {
    display: block;
    width: min(100% - 32px, 720px);
    margin-top: 24px;
  }
  .author-sidebar {
    position: static;
    padding-bottom: 24px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--line);
  }
  .author-avatar {
    width: 112px;
    height: 112px;
  }
  .compact-facts,
  .timeline-item,
  .portfolio-card {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .site-nav { max-height: 96px; overflow: auto; }
  .page-section h2 { font-size: 22px; }
  .portfolio-card { padding: 12px; }
}
```

## Task 3: JavaScript Enhancements

**Files:**
- Create: `script.js`

- [ ] **Step 1: Add active navigation and local fallback counters**

Create `script.js`.

```javascript
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
```

## Task 4: Static Checks

**Files:**
- Create: `package.json`
- Create: `tests/static-check.mjs`

- [ ] **Step 1: Add package scripts**

Create `package.json`.

```json
{
  "name": "xinwei-homepage",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "test": "node tests/static-check.mjs",
    "serve": "python3 -m http.server 51837"
  }
}
```

- [ ] **Step 2: Add dependency-free static check**

Create `tests/static-check.mjs`.

```javascript
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
```

## Task 5: Verify

**Files:**
- Modify: none unless verification reveals an issue.

- [ ] **Step 1: Run static checks**

Run:

```bash
npm test
```

Expected:

```text
Static homepage checks passed.
```

- [ ] **Step 2: Serve the site locally**

Run:

```bash
npm run serve
```

Expected:

```text
Serving HTTP on :: port 51837
```

- [ ] **Step 3: Browser verification**

Open `http://localhost:51837` and verify:

- Desktop layout has top nav, left sidebar, right content column.
- Mobile width stacks sidebar above content and keeps navigation readable.
- Navigation order is About Me, Education, Internships, Portfolio, Publications, Honors, Hobbies.
- Blog Posts is absent.
- Sidebar shows avatar, name, school, email, LinkedIn, GitHub, Visitors, and Views.
- Portfolio content is readable and does not overflow.

## Self-Review

The plan covers all design requirements: requested navigation order, removal of Blog Posts, sidebar fields, visitor/view display, research-oriented positioning, portfolio cases from existing content, publications and hobbies empty states, responsive styling, and verification. It contains no ambiguous implementation steps or invented social/publication details.
