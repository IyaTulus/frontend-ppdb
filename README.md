# frontend-ppdb

**frontend-ppdb** is the frontend web interface for the Digital-Based New Student Admission (PPDB) system, designed using React and TypeScript. This project is part of a microservices-based architecture, communicating with backend services through an API Gateway (NGINX).

## 🚀 Features

- ✅ User login and session management
- 📄 View and display user profile (`/me` endpoint)
- 🔒 JWT Bearer Token authentication
- 🎨 Clean, modern UI using Tailwind CSS
- 📦 Axios integration with bearer token support
- 🔁 Auto-refresh / revalidation of user data
- 🌐 API Gateway-compatible requests

## 🔧 Tech Stack

- **React**
- **TypeScript**
- **Axios**
- **Tailwind CSS**
- **Docker** (via backend services)
- **Nginx** as API Gateway

## 🧪 Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/frontend-ppdb.git
   cd frontend-ppdb

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run development server:**

   ```bash
   npm run dev
   ```

> Ensure the backend (API) is running at `http://localhost/api/` via NGINX (Docker Gateway).

## 🔐 Authentication Flow

* **Login Endpoint:** `POST http://localhost/api/login`

  * Response:

    ```json
    {
      "access_token": "token",
      "token_type": "bearer",
      "message": ""
    }
    ```

* **Authenticated Endpoint:** `GET http://localhost/api/me`

  * Requires `Authorization: Bearer <access_token>`

## 🛠 Configuration

You can configure API base URL in your Axios setup or environment file if used.

Example Axios setup:

```ts
axios.defaults.baseURL = "http://localhost/api/";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
```

## 📁 Project Structure

```
frontend-ppdb/
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── ...
├── public/
├── .env
├── package.json
└── README.md
```

## ✨ TODO

* [x] Form Login
* [ ] Form registration
* [ ] Role-based routing
* [ ] Validation & error handling
* [ ] User dashboard
* [ ] Responsive design improvements

## 👨‍💻 Author

Created by [Aldi Tulus Pribadi](https://github.com/aldtulus).

---

Feel free to contribute by creating issues or pull requests.
```
