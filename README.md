# XI RPL 1 Class Profile Website

A modern, responsive website showcasing the XI RPL 1 (Grade 11 Software Engineering) class at SMK Negeri 3 Kendal. This website features class profiles, member directory, gallery, and information about class leadership and supporting institutions.

## 🛠️ Technology Stack

- **Frontend Framework**: React 19 with Vite 8
- **Styling**: TailwindCSS 4
- **Icons**: Lucide React & React Icons
- **Smooth Scrolling**: Lenis
- **Development Tools**: ESLint, Gh-pages (for GitHub Pages deployment)
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── assets/
│   ├── home.jpeg          # Background image
│   ├── hero.png           # Hero section image
│   ├── logo.svg/logo.png  # School/logo assets
│   ├── wakel.jpg          # Class teacher photo
│   ├── Wakel.png          # Alternative teacher photo
│   ├── SMK_PK.png         # Supporting institution logo
│   ├── SMK_3_KENDAL.png   # Supporting institution logo
│   ├── PPLG.png           # Supporting institution logo
│   ├── Godev.png          # Supporting institution logo
│   └── assets.js          # Asset imports
├── components/
│   ├── About.jsx          # Class information section
│   ├── ClassMembers.jsx   # Student directory with pagination
│   ├── ClassStructure.jsx # Class leadership display
│   ├── Contact.jsx        # Contact form and Google Maps
│   ├── Footer.jsx         # Footer section
│   ├── Gallery.jsx        # Class gallery showcase
│   ├── Hero.jsx           # Hero section with typing animation
│   ├── Navbar.jsx         # Navigation bar
│   ├── Support.jsx        # Supporting institutions showcase
│   ├── SmoothScroll.jsx   # Smooth scrolling implementation
│   └── TextBanner.jsx     # Text banner component
├── App.jsx                # Main application component
├── main.jsx               # Entry point
└── index.css              # Custom styles + Tailwind import

public/
├── favicon.svg            # Site favicon
└── icons.svg              # Site icons
```

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd XI_RPL1_Profile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173` to view the application.

### Environment Variables
This project doesn't require any environment variables for basic functionality.

## 💻 Usage / Development

### Development Commands
- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build production optimized bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checking

### Deployment
The website is configured for deployment to GitHub Pages:
- `npm run predeploy` - Build the project
- `npm run deploy` - Deploy to GitHub Pages

## 🤝 Contributions

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the existing style and passes linting checks.

### Code Style
- Follows React best practices
- Uses TailwindCSS utility-first classes
- Maintains consistent component structure
- Includes proper accessibility considerations (alt text, semantic HTML)

---

Built with ❤️ for XI RPL 1 class of SMK Negeri 3 Kendal