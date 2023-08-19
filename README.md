# TodoList MERN Project

This project is a TodoList application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It consists of three main components: a React.js web app for managing todos, a React Native app for mobile access, and a Node.js server with MongoDB for the backend.

## Features

- Add new tasks to the todo list.
- Edit existing tasks to update their details.
- Mark tasks as completed.
- Delete tasks from the list.

## Components

1. **Todo_WebApp (React.js)**:
   - A web-based user interface for managing your todo list.
   - Developed using React.js to provide an interactive and responsive experience.
   - Allows users to add, edit, mark as done, and delete tasks.

2. **TodoApp (React Native)**:
   - A mobile app for managing your todo list on-the-go.
   - Built using React Native framework for cross-platform compatibility.
   - Provides similar functionality to the web app, including adding, editing, marking as done, and deleting tasks.

3. **Server (Node.js & MongoDB)**:
   - Backend server built with Node.js and Express.js.
   - Utilizes MongoDB as the database for storing todo items.
   - API endpoints for CRUD operations (Create, Read, Update, Delete) on todo items.
   - Ensures data synchronization between the web app and mobile app.

## Getting Started

1. Clone this repository to your local machine.

```git clone https://github.com/sajad786/TodoList_Mern.git``` 

Navigate to each component's directory and install the dependencies.

cd todo_webapp
npm install

cd ../todoapp
npm install

cd ../server
npm install or yarn

**Start the backend server.
cd server
npm start

** Start the web app and mobile app in separate terminal windows.

# Web App
cd todo_webapp
npm start

# Mobile App
cd todoapp
npm run android or yarn android 

** Access the web app by opening http://localhost:3000 in your browser, and the mobile app using the Expo client on your device.

Contributing
Contributions are welcome! Feel free to open issues and pull requests to suggest improvements, report bugs, or add new features.
