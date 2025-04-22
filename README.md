

# Todo App [TodoApp](https://Shruthi-Ramesh-2003.github.io/Fetch_Api_TodoApp)

A simple Todo app built with React.js, allowing users to add, delete, and mark tasks as completed. The app also includes features like task search, data persistence using `localStorage`, and conditional rendering for tasks based on their completion status.

## Features

- **Add Task**: Add new tasks to the todo list.
- **Delete Task**: Remove tasks from the list.
- **Mark as Complete**: Toggle the completion status of tasks.
- **Search**: Search tasks by name.
- **Data Persistence**: Tasks are saved in `localStorage` and persist even after page refresh.
- **Responsive**: The app is fully responsive and works well on both mobile and desktop devices.

## Tech Stack

- **React.js**: JavaScript library for building user interfaces.
- **HTML5**: Markup for the app structure.
- **CSS3**: Styling for the app.
- **localStorage**: For persisting tasks even after browser refresh.

## Installation

### Prerequisites

- **Node.js and npm**: You need Node.js and npm installed on your machine. If you don't have them, you can download and install from [here](https://nodejs.org/).

### Steps to Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Shruthi-Ramesh-2003/Fetch_Api_TodoApp.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd Fetch_Api_TodoApp
   ```

3. **Install dependencies**:

   Since this project uses React, run the following command to install the required dependencies (including React):

   ```bash
   npm install
   ```

4. **Start the development server**:

   After the installation is complete, start the development server with the following command:

   ```bash
   npm start
   ```

5. **Open your browser**:

   Go to [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Deployment with GitHub Pages

To deploy this React app to GitHub Pages, I followed these steps:

1. Install `gh-pages` as a dev dependency:

   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following to the `scripts` section of your `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Set the `homepage` field in your `package.json` to the GitHub Pages URL:

   ```json
   "homepage": "https://Shruthi-Ramesh-2003.github.io/Fetch_Api_TodoApp"
   ```

4. Run the following command to deploy:

   ```bash
   npm run deploy
   ```

   This will build the app and deploy it to GitHub Pages.

5. Visit the deployed app:

 https://Shruthi-Ramesh-2003.github.io/Fetch_Api_TodoApp



## Usage

- Use the input field to add new tasks.
- Click the "Mark Done" button to mark a task as completed.
- Use the "Delete" button to remove tasks from the list.
- The search bar allows you to filter tasks by their title.







