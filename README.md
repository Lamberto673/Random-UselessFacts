# 🎵 Random Useless Facts

A clean and modern **React application** that generates random inspirational quotes and optionally plays music tracks from free public APIs. Built to practice **React state management, async fetching, and UI feedback (loading & error states)**.
Dont Forget to click the link (https://random-useless-facts-nu.vercel.app)
---

## ✨ Features

* 🔁 Generate random Useless Facts on demand
* ⏳ Loading & error handling
* 🎨 Minimal dark UI with clear visual hierarchy
* ⚡ Fast and lightweight (no backend required)

---

## 🛠️ Tech Stack

* **React** (Hooks)
* **TypeScript**
* **CSS** (custom styling)
* **Fetch API**

---

## 📦 APIs Used

### Useless Facts

* **Random Useless Facts API**
  `https://uselessfacts.jsph.pl/api/v2/facts/random`


* **uselessfacts** (useless facts only, requires CORS proxy)


---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Lamberto673/Random-UselessFacts.git
cd Random-UselessFacts
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

Open your browser at:

```
http://localhost:5173
```

---

## 🧠 How It Works

* Clicking **Generate** triggers an async API call
* Previous quote is cleared before fetching new data
* UI updates automatically based on state:

  * `loading` → shows loading text
  * `error` → shows error message
  * success → displays quote & author

---

## 📂 Project Structure

```text
src/
├── App.jsx
├── App.css
├── main.jsx
└── assets/
```

---

## 📸 Preview

> *<img width="1152" height="771" alt="image" src="https://github.com/user-attachments/assets/7dfd45b2-ae4b-4f08-b04a-8d81df4ae112" />*

---

## 🧩 Future Improvements

* Smooth fade animation between quotes
* Background music toggle
* Random Useless Facts
* Offline fallback quotes
* API fallback system

---

## 📜 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project.

---

## 🙌 Acknowledgements

* Free public APIs for learning & experimentation
* React documentation
* Open-source community

---

⭐ If you found this project helpful, consider giving it a star!
