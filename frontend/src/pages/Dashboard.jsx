import { useEffect, useState } from "react";
import api from "../api/axios";
import TodoItem from "../components/TodoItem";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const fetchTodos = async () => {
    try {
      const res = await api.get("/todos");
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!title) return;

    const res = await api.post("/todos", { title });
    setTodos([res.data, ...todos]);
    setTitle("");
  };

  return (
    <div className="dashboard">
      <h2>My Todo List</h2>

      <div className="todo-form">
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Add new todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <button>Add</button>
        </form>
      </div>

      <div className="todo-table-wrapper">
        <table className="todo-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <TodoItem
                key={todo._id}
                todo={todo}
                index={index}
                fetchTodos={fetchTodos}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
