# React Router Site 🚀

A simple React project demonstrating **React Router v6** with nested routes, dynamic parameters, and a layout component (Header + Footer).

---

## ⚙️ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/react-router-site.git
   cd react-router-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the dev server**
   ```bash
   npm run dev
   ```

4. Open in browser:
   ```
   http://localhost:5173
   ```

---

## 🛠 Features

- ✅ **React Router v6** with `createBrowserRouter`  
- ✅ **Layout with Header & Footer**  
- ✅ **Nested Routes & Outlet**  
- ✅ **Dynamic Routing** (`/user/:userid`)  
- ✅ **Data Loader Example** (GitHub API in `Github.jsx`)  
- ✅ **Fallback 404 Route**  

---

## 📌 Routes

| Path           | Component     | Description                          |
|----------------|--------------|--------------------------------------|
| `/`            | `Home`       | Homepage                             |
| `/about`       | `About`      | About page                           |
| `/contact`     | `Contact`    | Contact page                         |
| `/user/:userid`| `User`       | Dynamic user route                   |
| `/github`      | `Github`     | Fetches profile using loader (API)   |
| `*`            | 404 Fallback | Not Found page                       |

---

## 🔗 GitHub API Loader

The `Github` component uses a **loader function** (`githubInfoLoader`) to fetch data from the GitHub REST API before rendering:

```jsx
export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/octocat");
  return res.json();
};
```

---

## 📜 License
This project is licensed under the **MIT License**.  
Feel free to use and modify for your learning.  

---

👨‍💻 **Author:** [Your Name](https://github.com/yourusername)  
