# 📅 Accessible Conference Schedule

![License](https://img.shields.io/badge/License-Personal_Use-blue?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-HTML5_%7C_CSS3_%7C_JS-orange?style=for-the-badge)
![Accessibility](https://img.shields.io/badge/A11y-WCAG_2.1_AA-success?style=for-the-badge)

A fully responsive, accessible conference schedule built with native HTML5, CSS3, and modern JavaScript. Features seamless responsive grid collapse for mobile viewports, WAI-ARIA compliant tab navigation, focus-trapped dialogs, and high-contrast focus indicators.

🌐 **GitHub Repo:** [github.com/abdullah-ali-338/accessible-conference-schedule](https://github.com/abdullah-ali-338/accessible-conference-schedule)

---

## ✨ Features

- **Fluid Mobile Layout:** Parallel multi-column tracks collapse smoothly into a single-column stacked layout on viewports under 768px without horizontal overflow.
- **Native Modal Dialogs:** Built with native `<dialog>` elements featuring built-in `Escape` dismissal, focus trapping, background obscuring (`inert`), and focus return restoration.
- **WAI-ARIA Tab Navigation:** Day navigation follows official WAI-ARIA tabbed interface patterns with arrow key keyboard switching.
- **Accessible DOM Sequencing:** Logical top-to-bottom visual and screen reader navigation matching the exact `Tab` traversal order.
- **High-Contrast Focus Styles:** Prominent 3px `:focus-visible` indicators across all interactive elements for clear keyboard navigation.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5 (Semantic Structure, Native Dialog), CSS3 (Flexbox/Grid, Focus-Visible, Container Queries), Vanilla JavaScript (ES6+ Keyboard Event Handlers)
- **Accessibility Standards:** WCAG 2.1 AA Compliance, WAI-ARIA Design Patterns

---

## 📁 Repository Structure

```text
ConferenceSchedule/
├── index.html          # Semantic HTML markup and accessibility structures
├── app.js             # Modal focus traps, tab keyboard handling, and state
├── style.css          # Responsive layouts, track badges, and focus indicators
└── README.md          # Project documentation
