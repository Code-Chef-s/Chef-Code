# Code Chef's Seafood 🐟🍽️

## Project Introduction

Code Chef's Seafood is a beautifully designed, interactive web application built to showcase modern web development practices using vanilla JavaScript. It features a sleek, user-friendly interface for browsing seafood recipes, making it an ideal project to demonstrate practical coding skills to potential employers.

This project was built to demonstrate proficiency in modern web development technologies and practices including async/await, DOM manipulation, API integration, and responsive design, and is intended for developers looking to showcase their skills, potential employers evaluating technical capabilities, and anyone interested in learning modern web development patterns.

## 🖼️ Screenshots

![Code Chef's Seafood Application Screenshot](./readMe-images/Screenshot%202025-08-13%20at%204.58.38%20PM.png)

## 🌐 Deployment Link

[Please add a link to your deployed project or a video demo.]

## 🔗 Additional Links

- **Wireframes**: [Link to your wireframes (e.g., Figma, Balsamiq)]
- **Entity-Relationship Diagram (ERD)**: [Link or image of your ERD]
- **Project Proposal**: [Link to your project proposal document, if available]

## 🛠️ Tech Stack

### Frontend

- **Framework**: Vanilla JavaScript (ES6+)
- **Language**: JavaScript
- **Styling**: Custom CSS with Google Fonts (Dosis, Roboto)
- **UI Components**: Custom-built components
- **Routing**: Single-page application
- **Build Tool**: Vite

### Backend

- **API**: TheMealDB (https://www.themealdb.com/)
- **Architecture**: ES6 Modules, Async/Await, Event-driven programming
- **Data Handling**: Fetch API with error handling

## 🚀 Project Set Up Instructions

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Frontend

1. **Clone the repo**

   ```bash
   git clone <repository-url>
   cd Chef-Code
   ```

2. **Navigate to the app directory**

   ```bash
   cd app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser and navigate to `http://localhost:5173`**

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

## 🎯 Key Components

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

## 🤝 Contribution Instructions

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

Don't forget to star the project! Thanks again!

## 🔄 Development Workflow

### Branching & Pull Requests

- Never push directly to main. All work should be done on separate branches.
- Create a pull request (PR) to merge your changes into main.
- Ensure PRs are reviewed by at least one other person before merging.

### Commit Messages

- Write thoughtful and descriptive commit messages.
- Start your commit messages with a relevant prefix, such as:
  - `feat:` A new feature
  - `style:` CSS or styling changes
  - `update:` A non-breaking change
  - `fix:` A bug fix
  - `delete:` Removing code or files

### Documentation

- Use inline comments to clarify complex parts of your code.
- Remove all commented-out code before committing.
- Ensure all functions and files have clear, concise descriptions.

### Project Management

- Keep the project's scrum board (e.g., Trello, Jira, GitHub Projects) up-to-date.
- Write specific and descriptive cards for all tasks.
- PR descriptions should be detailed, outlining the changes made and referencing the corresponding task on the scrum board.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for providing the recipe API
- Google Fonts for the beautiful typography
- The open-source community for inspiration and tools

---

**Happy Cooking! 🍳✨**
