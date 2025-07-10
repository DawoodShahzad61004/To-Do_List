# To-Do List Practice App

A simple React-based To-Do List application built to practice and demonstrate the use of the ES6 spread operator, modular React components, and state management with hooks.

🔗 **Live Demo:** [View To-Do List App](https://dawoodshahzad61004.github.io/To-Do_List/)

## 📁 Project Structure

```
.
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── InputArea.jsx
│   │   └── ToDoItem.jsx
│   ├── styles.css
│   └── index.js
├── package.json
└── README.md
```

## ⚙️ Features

- Add and delete tasks.
- Prevents adding empty or whitespace-only tasks.
- Logs state updates using `useEffect`.
- Modular structure with reusable components.
- Styled using a playful handwritten font and colorful layout.

## 🚀 Getting Started

### 1. Clone the repository or download the ZIP

```bash
git clone https://github.com/DawoodShahzad61004/To-Do_List.git
cd es6-spread-operator-practice
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

If you face an OpenSSL error on newer Node.js versions:

```bash
set NODE_OPTIONS=--openssl-legacy-provider && npm start
```

> 💡 It’s recommended to use Node.js v16 for full compatibility with Create React App v3.2.0

## 📦 Tech Stack

- **React 16.8.6**
- **JavaScript (ES6+)**
- **CSS**
- **Create React App**

## 📝 Notes

- Uses the ES6 spread operator for immutable state updates:
  ```js
  setList(prev => [...prev, newTask]);
  ```
- Uses dynamic object keys in object literals.
- Demonstrates lifting state up and props down via component composition.

## 🎨 Styling

The UI is styled with custom CSS (`styles.css`) and uses the "Architects Daughter" font from Google Fonts.

## 🧹 TODOs

- [ ] Add editing functionality
- [ ] Add task completion visual feedback (e.g., strike-through)
- [ ] Persist tasks in `localStorage`

---

© 2025 ES6 Spread Operator Practice App
