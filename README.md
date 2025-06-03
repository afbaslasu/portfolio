# Portfolio v1 Website

This is a simple, straightforward basic portfolio project that focus on react multi-page setup with react router. This version 1 is a responsive multi-page portfolio website built with React and Tailwind CSS. This project will be improve upon in version 2 and 3.

## Features

- Responsive navigation bar
- Homepage with hero section
- Portfolio section with filtering
- Skills section with progress bars
- Contact form
- Custom 404 page
- React Router for multi-page navigation

## Technologies Used

- React 19
- Vite
- Tailwind CSS
- React Icons
- React Router
- Isotope.js (for portfolio filtering)
- isotope-layout
- imagesloaded

## Project Structure
src/
├── components/
│ └── Spinner.jsx
├── pages/
│ ├── HomePage.jsx
│ ├── PortfolioPage.jsx
│ ├── ServicesPage.jsx
│ ├── AboutPage.jsx
│ ├── ContactPage.jsx
│ ├── BlogPage.jsx
│ └── NotFoundPage.jsx
├── App.jsx
└── main.jsx


## Installation

1. Clone the repository:
   git clone https://github.com/your-username/portfolio_1.git
   cd portfolio_1
Install dependencies:

npm install
Start the development server:

npm run dev
Open your browser at:

http://localhost:5173
Deployment
This project is deployed using GitHub Pages:

Build the project:

npm run build
Deploy to GitHub Pages:

git add dist -f
git commit -m "Deploy to GitHub Pages"
git push
Configure GitHub Pages to serve from the dist folder

**Future Improvements**
Add dark mode toggle

Implement form validation

Add blog functionality

Improve mobile navigation

Add animations

**Credits**

Font Awesome for icons

Tailwind CSS for styling