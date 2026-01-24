# Redux React Project 🚀

A modern React application bootstrapped with **Vite** and powered by **Redux** for state management. This project follows a clean, scalable folder structure suitable for small to medium-sized applications.

---

## 🛠 Tech Stack

* **React** – UI library
* **Redux** – Global state management
* **Vite** – Fast build tool and dev server
* **JavaScript (ES6+)**
* **CSS** – Styling
* **ESLint** – Code linting

---

## 📁 Project Structure

```
REDUX PROJECT
├── public/              # Static assets
├── src/
│   ├── api/             # API calls and services
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page-level components
│   ├── redux/           # Redux state management
│   │   ├── store.js     # Redux store configuration
│   │   └── features/    # Redux slices (feature-based)
│   │       ├── collectionSlice.js  # Collection-related state
│   │       └── searchSlice.js      # Search-related state
│   ├── App.jsx          # Root component
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── .env                 # Environment variables
├── .gitignore
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json
├── package-lock.json
├── vite.config.js       # Vite configuration
└── README.md
```

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
```

2. Navigate to the project directory:

```bash
cd redux-project
```

3. Install dependencies:

```bash
npm install
```

---

## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 🧪 Linting

To run ESLint:

```bash
npm run lint
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
VITE_PEXELS_KEY=your_pexels_api_key_here
VITE_TENOR_KEY=your_tenor_api_key_here
VITE_UNSPLASH_KEY=your_unsplash_api_key_here
```

> ⚠️ Important:
>
> * All Vite environment variables **must start with `VITE_`**
> * Never commit your `.env` file to version control

---

## 📌 Best Practices Used

* Modular folder structure
* Separation of concerns (API, Redux, UI)
* Reusable components
* Centralized state management

---

## 📄 License

This project is licensed under the MIT License.

---

## ✨ Author

**Sahil Kumar**

Feel free to fork, improve, and use this project as a base for your own applications 😊
