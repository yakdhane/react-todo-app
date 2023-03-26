Sure, here is the README.md file:

# React Todo App

![React Logo](https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png)

This is a simple todo application built with React. It allows users to add, edit, and delete todos.

## Installation

To install the dependencies, run the following command:

```
npm install
```

## Usage

To run the application, use the following command:

```
npm start
```

This will start the application on `http://localhost:3000`.

## Docker

To run the application using Docker, first build the Docker image:

```
docker build -t react-todo-app .
```

Then, run the Docker container:

```
docker run -p 3000:3000 react-todo-app
```

This will start the application on `http://localhost:3000`.

## File Structure

- `public/`: Contains the public assets for the application.
- `src/components/`: Contains the React components used in the application.
  - `TodoForm.jsx`: Component for adding new todos.
  - `TodoItem.jsx`: Component for displaying and editing individual todos.
  - `TodoList.jsx`: Component for displaying the list of todos.
- `src/App.js`: Main component for the application.
- `src/index.js`: Entry point for the application.
- `Dockerfile`: Dockerfile for building and running the application in a Docker container.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.