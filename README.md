
# live-chat.io
A chat application using WebSockets and Node.js would allow users to communicate in real-time through a web-based interface. The application would use Node.js as the server-side technology, and WebSockets to handle the real-time communication between the server and clients. Users would connect to the application via their web browser, and would be able to send and receive messages, as well as potentially see a list of other connected users. The application could be built with a variety of front-end libraries and frameworks, such as React or AngularJS, to create a user-friendly interface.


## Tech Stack

**Front End:** React, Redux, Material UI

**Back End:** Node, Express, Socket.IO

**Database:** MongoDB


## Features

- JWT Authentication
- Real Time Chat
- Chat History



## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Run Locally

Clone the project

```bash
  git clone ithub.com/imashaWe/live-chat.io
```

Go to the project directory

```bash
  cd live-chat.io
```

Install dependencies for backend

```bash
  cd backend
```
```bash
  npm install
```

Start the backend server

```bash
  npm run start
```

Install dependencies for frontend

```bash
  cd frontend
```
```bash
  npm install
```

Start the frontend

```bash
  npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ACCESS_TOKEN_SECRET`

`MONGO_URL`


## Deployment

To deploy this project run

```bash
  docker-compose up
```

