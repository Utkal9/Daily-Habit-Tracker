# TrackWise 🧠📅

**TrackWise** is a minimal and effective habit tracking web application that allows users to build positive routines by tracking daily habits. It includes user authentication, habit creation, calendar-based tracking, and progress visualization.

## 🔧 Tech Stack

-   **Frontend:** EJS (Embedded JavaScript Templates)
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB Atlas using Mongoose
-   **Architecture:** MVC (Model-View-Controller)
-   **Authentication:** Express Sessions (can be extended to use Passport.js or JWT)
-   **Styling:** Custom CSS, EJS templating

---

## ✨ Features

-   User registration and login
-   Create custom habits
-   Mark daily progress for each habit
-   Weekly calendar view for tracking
-   Add/delete habits
-   Dark mode toggle (UI feature)
-   Clean and responsive design

---

## 📁 Folder Structure

```

TrackWise/
│
├── config/             # DB config and environment setup
│   └── mongoose.js
│
├── controllers/        # Controller logic for routes
│   ├── home\_controller.js
│   ├── habits\_controller.js
│   └── users\_controller.js
│
├── models/             # Mongoose schema/models
│   ├── habit.js
│   └── user.js
│
├── routes/             # Route definitions
│   ├── index.js
│   ├── habits.js
│   └── users.js
│
├── views/              # EJS views/templates
│   ├── home.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── details.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│
├── assets/             # Static files like CSS, JS, images
│   ├── css/
│   ├── js/
│   └── images/
│
├── index.js            # Entry point of the server
├── package.json
└── README.md

```

---

## 🚀 Getting Started

### Prerequisites

-   Node.js and npm installed
-   MongoDB Atlas account

### Setup Instructions

1. Clone the repo:

```bash
git clone https://github.com/Utkal9/TrackWise.git
cd TrackWise
```

2. Install dependencies:

```bash
npm install
```

3. Configure MongoDB:

Edit `config/mongoose.js` and replace the MongoDB URI with your MongoDB Atlas connection string.

4. Start the server:

```bash
npm start
```

5. Open your browser at:

```
http://localhost:8000
```

---

## 📸 Screenshots

Coming soon...

---

## 👨‍💻 Author

**Utkal Behera**
[LinkedIn](https://linkedin.com/in/your-link)

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

```

---

Let me know if you want this customized for **your GitHub profile link**, screenshots, or if you’re integrating **React or MERN later** — I’ll adjust the README accordingly.
```
