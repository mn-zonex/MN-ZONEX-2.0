# MN-ZONEX 2.0

**MN-ZONEX 2.0** is a fully responsive, dark-themed, professional digital hub website. It includes Games, Services, Business Showcase, Social Media links, Feedback system, and more. Built for modern users with smooth animations and intuitive UI.

---

## 🌐 Features

- **Dark Theme:** Sleek, neon-inspired dark design.  
- **Responsive Layout:** Works on desktop, tablet, and mobile.  
- **Animated Landing Page:** Smooth hero animations and interactive elements.  
- **Games Hub:** Dynamic game cards with play button linking to each game.  
- **Services Page:** Fun and useful services with search functionality.  
- **Business Page:** Showcase businesses with hover animations and visit links.  
- **Social Media:** Neon icon links to popular platforms.  
- **Feedback System:** View and add user feedback.  
- **Support & About Pages:** Information and FAQs.  
- **Reusable Components:** Header, footer, loader, modals.  
- **Fun Features:** Mini-effects, spin-wheel, easter eggs (future-ready).  

---

## 📁 File Structure
MN-ZONEX-2.0/ │ ├── index.html                # Home (hero + animation) ├── games.html                # Games hub ├── services.html             # Services + fun tools ├── business.html             # Business showcase ├── social.html               # Social media links ├── feedback.html             # View feedback ├── add-feedback.html         # Add feedback ├── about.html                # About page ├── support.html              # Support / FAQ │ ├── assets/ │   ├── css/                  # Base, layout, components, animations, responsive │   ├── js/                   # Global JS + page-specific scripts │   ├── images/               # Branding, backgrounds, games, services, business │   ├── icons/                # Neon SVG icons │   └── fonts/                # Custom fonts │ ├── games/                    # Individual game folders with index.html + assets ├── data/                     # JSON data (games, services, business, feedback) ├── components/               # Header, footer, loader ├── fun/                      # Mini-effects, spin-wheel ├── config/                   # Theme config ├── README.md └── LICENSE
---

## ⚡ Installation

1. Download or clone the repository.  
2. Open `index.html` in a web browser.  
3. All pages are linked; games and services load dynamically via JS.  
4. Update assets or JSON data to customize the site.  

---

## 💡 Customization

- Add or remove **games** by editing `/games` folder and `games.json`.  
- Update **services** in `/data/services.json`.  
- Update **businesses** in `/data/business.json`.  
- Add **social links** in `social.html` script array.  
- Modify theme colors in `assets/css/base.css` or `config/theme.js`.  

---

## 📌 License

This project is licensed under the **MIT License**. See `LICENSE` file for details.

---

## 🎨 Theme

- Dark mode with neon accents  
- Hover animations and card lift effects  
- Fully responsive, works across all screen sizes  
- Animation-ready for GSAP, ScrollReveal, or custom effects

---

## 🛠 Built With

- HTML5, CSS3, JavaScript  
- Optional: GSAP or Animate.css for advanced animations  
- JSON for dynamic content