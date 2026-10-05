# Mini-WhatsApp-MongoDB-CRUD

A beginner-friendly Mini WhatsApp chat application built using **Node.js, Express.js, EJS, MongoDB, and Mongoose**.

This project is created to practice **CRUD operations**, Express routing, Mongoose models, MongoDB operations, and form handling.

## 🚀 Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* Method-Override
* HTML & CSS

## 📚 Concepts Practiced

* Express.js routing
* Request parameters (`req.params`)
* Request body (`req.body`)
* EJS templates
* Express middleware
* Mongoose Schema and Model
* MongoDB CRUD operations
* `find()`
* `findById()`
* `save()`
* `findByIdAndUpdate()`
* `findByIdAndDelete()`
* Mongoose validation
* `runValidators`
* `async/await`
* HTTP methods: GET, POST, PUT, DELETE
* Method override for PUT and DELETE requests
* Static files using Express

## 🔄 CRUD Operations

| Operation | HTTP Method | Route             | Purpose           |
| --------- | ----------- | ----------------- | ----------------- |
| Create    | POST        | `/chats`          | Create a new chat |
| Read      | GET         | `/chats`          | Display all chats |
| Edit      | GET         | `/chats/:id/edit` | Open edit page    |
| Update    | PUT         | `/chats/:id`      | Update a chat     |
| Delete    | DELETE      | `/chats/:id`      | Delete a chat     |

## 🗂️ Project Structure

```text
Mini-WhatsApp-MongoDB-CRUD/
│
├── models/
│   └── chat.js
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── public/
│   └── style.css
│
├── index.js
├── package.json
└── README.md
```

## 🧩 Mongoose

The project uses Mongoose to define the chat schema and create a model.

The schema contains fields such as:

* Sender
* Receiver
* Message
* Created date

The Mongoose model is then used to perform database operations.

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Go to the project folder

```bash
cd Mini-WhatsApp-MongoDB-CRUD
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running on your system.

### 5. Start the application

```bash
node index.js
```

Or, if you use nodemon:

```bash
nodemon index.js
```

### 6. Open in browser

```text
http://localhost:8080/chats
```

## 🎯 Purpose

The main purpose of this project is to understand how **Express.js connects with MongoDB through Mongoose** and how CRUD operations are implemented in a real-world style application.

## 👨‍💻 Author

Kirana
