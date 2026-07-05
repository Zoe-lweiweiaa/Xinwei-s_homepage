# Personal Homepage MVP Design

## Goal

Build a static personal homepage for Li Xinwei that follows the research-oriented structure and restrained visual style of `https://zyp-up.github.io/`, while using content extracted from the existing Miaoda portfolio site.

## Positioning

The site should read as a long-term research personal homepage, not a marketing landing page. It should emphasize academic/professional identity, research output, education, internships, selected research cases, publications, honors, and personal interests. The tone should be concise, credible, and suitable for investment research, strategic investment, and related recruiting contexts.

## Navigation

The top navigation must use this order:

1. About Me
2. Education
3. Internships
4. Portfolio
5. Publications
6. Honors
7. Hobbies

There is no Blog Posts section in the MVP.

## Sidebar

The left author sidebar should follow the reference site's high-density, low-decoration academic style. It must include:

- Avatar
- Li Xinwei
- Peking University HSBC Business School
- Email
- LinkedIn
- GitHub
- Visitors
- Views

LinkedIn and GitHub should be implemented as sidebar rows even if final account URLs are not yet available. In the MVP, unknown social links should be visibly present but non-misleading: use disabled or neutral links rather than fabricated URLs.

The Visitors and Views rows should appear in the sidebar. Because the MVP is a static local site with no backend, counters should be implemented as graceful UI elements that can later be wired to an analytics or counter service. If an external counter script is added, the UI must still look acceptable when the script fails.

## Content Sections

### About Me

Introduce Li Xinwei as a business research and investment-focused master's student/researcher. Use the existing site's core message: industry insight, business research, investment analysis, and data-driven reasoning.

### Education

Show Peking University HSBC Business School as the primary education item.

### Internships

Represent the existing claim of four research-oriented internships as a concise professional experience section. Since detailed employer names and dates are not present in the current source content, the MVP should use a high-level experience summary instead of inventing specifics.

### Portfolio

Use the existing Miaoda site's research case content as the Portfolio section. Include:

- AppLovin equity research
- Dingdong Maicai equity research
- Macroeconomic data forecasting
- Pinhaofan strategy research
- National College Student Mathematical Modeling Competition project

Each item should be compact and readable, with a short summary, key method points, and metrics where available.

### Publications

Include a Publications section matching the reference site's academic homepage pattern. If specific publication records are not available in the extracted content, the MVP should include a clean "Selected publications will be updated soon" empty state rather than inventing publication titles.

### Honors

Include available honors, especially the National College Student Mathematical Modeling Competition national second prize.

### Hobbies

Include a lightweight Hobbies section as requested by the navigation. Since the existing Miaoda source content does not contain hobbies, the MVP should use a restrained empty-state sentence indicating this section will be updated.

## Visual Direction

Use the reference site's structure:

- Sticky or fixed top navigation
- Warm off-white background
- Left sidebar on desktop
- Main content column on the right
- Compact section headings
- Link-like accent color
- Minimal cards only where repeated portfolio items benefit from scannability

Avoid the existing Miaoda site's large gradient hero, oversized promotional type, round pill-heavy buttons, and decorative floating shapes. The site should feel like a polished academic profile, not a one-screen portfolio hero.

## Technical Shape

The MVP should be a static site that can run by opening `index.html` or through a lightweight local server. Use plain HTML, CSS, and small JavaScript only where useful for navigation or counters. Do not introduce a framework unless the project later requires multi-page routing, CMS content, or build-time generation.

## Verification

Verify the site on desktop and mobile widths. Check that:

- The navigation order matches the requested order.
- Blog Posts is absent.
- Sidebar includes all requested fields.
- Main content sections exist and appear in the requested order.
- Text does not overflow on mobile.
- Portfolio cases are readable and derived from the existing Miaoda content.
