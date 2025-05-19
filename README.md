# REAL-TIME-COLLABORATION-TOOL

COMPANY : CODETECH IT SOLUTIONS

NAME : VANGALA GREESHMA

INTERN ID : CT08WR151

DOMAIN : MERN STACK WEB DEVELOPMENT

DURATION : 8 WEEKS

MENTOR : NEELA SANTHOSH

---

#  Real-Time Collaborative Text Editor

##  Project Description

This project is a **Real-Time Collaboration Tool** developed as part of the **MERN Stack Internship** with CODTECH. The objective of the task was to build a **synchronized, multi-user collaborative tool** such as a document editor or whiteboard using **WebSocket technology**.

In this project, I implemented a real-time text editor where multiple users can collaboratively edit the same document from different devices or browsers simultaneously. This was achieved using **Socket.IO** for WebSocket communication and the **MERN stack** as the foundation for development (MongoDB, Express, React, and Node.js — although for this project MongoDB was not needed).

The key feature of this app is **real-time text synchronization**. Whenever one user types or edits the document, the changes are broadcast to all connected users immediately, allowing for a truly collaborative experience.

---

##  Tech Stack

- **Frontend**: React
- **Backend**: Node.js with Express
- **Real-Time Communication**: Socket.IO
- **Others**: CORS for cross-origin communication

---

##  Features

- ✅ Real-time text editing
- ✅ Multi-user collaboration
- ✅ Responsive UI using simple React styling
- ✅ Scalable backend with WebSocket support
- ✅ Modular code structure for frontend and backend

---

##  Folder Structure

Real-time collab-editor/
├── client/ # React frontend
│ ├── src/
│ ├── public/
│ └── package.json
├── server/ # Node.js backend
│ ├── index.js
│ └── package.json
└── README.md

---

## Setup and Start Backend

  cd server
  npm install
  node index.js
This starts the Socket.IO server on http://localhost:4000.

##  Setup and Start Frontend

  cd ../client
  npm install
  npm start
Your React app will now run on http://localhost:3000.

---

## How It Works

-When a user types into the text area, a send-changes event is emitted through the WebSocket connection.

-The server listens for these events and then broadcasts the content to all other connected clients using receive-changes.

-Each client updates the content in real time, creating a seamless collaborative experience.

---

## Use Cases

-Real-time collaborative document editing (like Google Docs)

-Pair programming environments

-Classroom note sharing tools

-Brainstorming whiteboards

---

## output

![Image](https://github.com/user-attachments/assets/8a28800e-75f4-42c4-9e6c-55d68d855c62)


  



