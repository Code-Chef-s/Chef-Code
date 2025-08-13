# Code Chef's Seafood 🐟🍽️

A modern, interactive web application that showcases delicious seafood recipes from around the world. Built with vanilla JavaScript and powered by TheMealDB API, this project demonstrates modern web development practices including async/await, DOM manipulation, and responsive design.

## 📖 Project Overview

### What is this project about?

**Code Chef's Seafood** is a digital seafood recipe library that transforms the traditional cookbook experience into an interactive web application. It serves as a comprehensive resource for seafood enthusiasts, offering a curated collection of international seafood dishes with detailed cooking instructions, ingredient lists, and beautiful food photography.

### Why was it built?

This project was developed as a learning exercise to demonstrate proficiency in modern web development technologies and practices. It showcases the ability to:

- Build full-stack web applications using vanilla JavaScript
- Integrate with external APIs for dynamic content
- Implement responsive design principles for cross-device compatibility
- Create intuitive user interfaces with real-time search functionality
- Handle asynchronous operations and error management effectively

### Who was it built for?

While primarily built as an educational project to demonstrate technical skills, the end result is a fully functional application designed for:

- **Home cooks** seeking seafood recipe inspiration
- **Food enthusiasts** wanting to explore international seafood cuisine
- **Cooking beginners** looking for detailed, step-by-step seafood recipes
- **Anyone interested** in learning to prepare seafood dishes at home

## ✨ Features

- **Seafood Recipe Gallery**: Browse a curated collection of seafood dishes
- **Real-time Search**: Filter recipes by name with instant results
- **Interactive Recipe Details**: Click on any recipe to view detailed information
- **Comprehensive Recipe Info**: View ingredients, measurements, cooking instructions, and origin
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI/UX**: Clean, intuitive interface with smooth interactions

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Build Tool**: Vite
- **API**: TheMealDB (https://www.themealdb.com/)
- **Styling**: Custom CSS with Google Fonts (Dosis, Roboto)
- **Architecture**: ES6 Modules, Async/Await, Event-driven programming

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Chef-Code
   ```

2. Navigate to the app directory:

   ```bash
   cd app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
Chef-Code/
├── app/
│   ├── src/
│   │   ├── main.js          # Main application logic
│   │   ├── modal.js         # Modal functionality and API calls
│   │   ├── fetch-helpers.js # Fetch utility functions
│   │   └── style.css        # Application styles
│   ├── index.html           # Main HTML file
│   ├── vite.config.js       # Vite configuration
│   └── package.json         # Project dependencies
├── LICENSE
└── README.md
```

## 🔧 Key Components

### Main Application (`main.js`)

- Initializes the application
- Sets up search functionality
- Handles real-time recipe filtering

### Modal System (`modal.js`)

- Fetches detailed recipe information from TheMealDB API
- Displays recipe details in a modal dialog
- Renders ingredients and cooking instructions

### Fetch Utilities (`fetch-helpers.js`)

- Reusable fetch wrapper with error handling
- Content-type detection and response parsing
- Comprehensive error logging

### Styling (`style.css`)

- Responsive design with CSS Grid and Flexbox
- Modern visual design with smooth transitions
- Mobile-first approach

## 🎯 API Integration

The application integrates with TheMealDB API to:

- Fetch seafood recipe categories
- Retrieve detailed recipe information
- Display high-quality recipe images
- Access comprehensive ingredient lists and measurements

## 🎨 Features in Detail

### Recipe Search

- Real-time filtering as you type
- Case-insensitive search
- Instant visual feedback

### Recipe Modal

- Detailed recipe information
- Complete ingredient list with measurements
- Step-by-step cooking instructions
- Recipe origin and category information

### Responsive Design

- Mobile-optimized layout
- Touch-friendly interactions
- Adaptive image sizing
- Flexible grid system

## 🚀 Deployment

This project can be easily deployed to any static hosting service:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure your hosting service to serve the `index.html` file

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for providing the recipe API
- Google Fonts for the beautiful typography
- The open-source community for inspiration and tools

---

**Happy Cooking! 🍳✨**
