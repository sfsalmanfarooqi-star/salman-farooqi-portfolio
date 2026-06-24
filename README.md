# 🚀 Salman Farooqi - Interactive Portfolio Website

A modern, responsive, and animated portfolio website showcasing professional experience in Deal Desk, Revenue Operations, and Financial Analysis.

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **Interactive Elements**: Hover effects, typing animation, and dynamic counters
- **SEO Optimized**: Semantic HTML5 structure with proper meta tags
- **Fast Loading**: Optimized performance with lazy loading
- **Contact Form**: Integrated email functionality

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and CSS Variables
- **JavaScript (ES6+)**: Interactive functionality
- **GSAP**: Professional-grade animations
- **Font Awesome**: Icon library
- **Google Fonts**: Inter & Poppins fonts

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and responsive design
├── js/
│   └── script.js       # JavaScript functionality and animations
├── assets/             # Images, resume, and other assets
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Open Directly
1. Navigate to the `portfolio-website` folder
2. Double-click `index.html` to open in your default browser

### Option 2: Use Live Server (Recommended)
1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Local Web Server
```bash
# Using Python 3
cd portfolio-website
python -m http.server 8000

# Using Node.js (http-server)
npx http-server portfolio-website -p 8000
```

Then open `http://localhost:8000` in your browser.

## 📝 Customization Guide

### 1. Personal Information
Edit `index.html` to update:
- Name and title in the hero section
- Contact information (email, phone)
- Professional summary
- Work experience details
- Skills and competencies
- Education details

### 2. Colors and Theme
Edit `css/styles.css` - CSS Variables section:
```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #1e40af;  /* Secondary brand color */
    --accent-color: #3b82f6;     /* Accent color */
    /* ... more variables */
}
```

### 3. Profile Image
1. Add your profile image to the `assets/` folder
2. Replace the placeholder in `index.html`:
```html
<div class="image-placeholder">
    <img src="assets/your-photo.jpg" alt="Salman Farooqi">
</div>
```

### 4. Resume/CV
1. Add your resume PDF to the `assets/` folder
2. The download link is already configured in the About section

### 5. Social Media Links
Update social media URLs in `index.html`:
```html
<a href="https://linkedin.com/in/your-profile" target="_blank">
    <i class="fab fa-linkedin"></i>
</a>
```

## 🎨 Sections Overview

### 1. **Hero Section**
- Animated name and title with typing effect
- Professional tagline
- Call-to-action buttons
- Social media links
- Floating badges with your expertise

### 2. **About Section**
- Professional summary
- Contact details
- Animated statistics counters
- Download resume button

### 3. **Experience Section**
- Interactive timeline of work history
- Expandable job descriptions
- Skills tags for each role
- Smooth scroll animations

### 4. **Skills Section**
- Categorized skill sets
- Animated progress bars
- Professional competencies
- Technical skills

### 5. **Education Section**
- Academic qualifications
- Institution details
- Degree highlights

### 6. **Contact Section**
- Contact information cards
- Working contact form
- Email integration

## 🎯 Key Features Explained

### Dark/Light Mode
- Click the moon/sun icon in the navigation
- Preference is saved in browser localStorage
- Smooth transition between themes

### Typing Animation
- Automatically cycles through your titles
- Customizable in `js/script.js`:
```javascript
const titles = [
    'Deal Desk Analyst',
    'Revenue Operations Expert',
    // Add more titles here
];
```

### Smooth Scroll
- Click any navigation link for smooth scrolling
- Active section highlighting
- Mobile-friendly navigation

### Animations
- Scroll-triggered animations using GSAP
- Hover effects on cards and buttons
- Loading screen on page load
- Parallax effect on hero section

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance Tips

1. **Optimize Images**: Compress images before adding to `assets/`
2. **Lazy Loading**: Images load as they come into view
3. **Minify Files**: For production, minify CSS and JS
4. **CDN Usage**: Libraries loaded from CDN for better caching

## 🚀 Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Select main branch and root folder
5. Your site will be live at `https://username.github.io/repo-name`

### Netlify
1. Drag and drop the `portfolio-website` folder to [Netlify](https://app.netlify.com/drop)
2. Your site is live instantly!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project folder
3. Follow the prompts

## 🎨 Color Schemes

### Light Mode
- Primary: Blue (#2563eb)
- Background: White (#ffffff)
- Text: Dark Gray (#1f2937)

### Dark Mode
- Primary: Light Blue (#3b82f6)
- Background: Dark (#111827)
- Text: Light Gray (#f9fafb)

## 📧 Contact Form

The contact form uses `mailto:` protocol. When submitted:
1. Opens user's default email client
2. Pre-fills recipient, subject, and message
3. User can review and send

For a backend solution, integrate with:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

## 🐛 Troubleshooting

### Animations not working?
- Check browser console for errors
- Ensure GSAP CDN is loading correctly
- Clear browser cache

### Dark mode not persisting?
- Check if localStorage is enabled in browser
- Try in incognito mode to test

### Mobile menu not working?
- Check JavaScript console for errors
- Ensure viewport meta tag is present

## 📄 License

This portfolio template is free to use for personal and commercial projects.

## 🤝 Credits

- **Design & Development**: Salman Farooqi
- **Animations**: GSAP (GreenSock)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter, Poppins)

## 📞 Support

For questions or issues:
- Email: sfsalmanfarooqi@gmail.com
- Phone: +91 9606018403

---

**Built with ❤️ by Salman Farooqi**

*Last Updated: June 2026*