# Todo App Backend API

A RESTful API for a Todo application built with Node.js, Express, and MongoDB.

## 🚀 Features
- CRUD operations for todos
- Filtering and sorting
- Pagination
- Priority levels (low, medium, high)
- Due dates and tags
- Health check endpoint

## 📦 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API status |
| GET | `/health` | Health check |
| GET | `/api/todos` | Get all todos |
| GET | `/api/todos/:id` | Get single todo |
| POST | `/api/todos` | Create todo |
| PUT | `/api/todos/:id` | Update todo |
| DELETE | `/api/todos/:id` | Delete todo |
| PATCH | `/api/todos/:id/toggle` | Toggle completion |

## 🛠️ Local Development

1. **Clone repository**
   ```bash
   git clone <repo-url>
   cd todo-backend