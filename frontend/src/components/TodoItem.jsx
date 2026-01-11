import api from "../api/axios";

const TodoItem = ({ todo, index, fetchTodos }) => {
  const toggleComplete = async () => {
    await api.put(`/todos/${todo._id}`, {
      completed: !todo.completed,
    });
    fetchTodos();
  };

  const deleteTodo = async () => {
    await api.delete(`/todos/${todo._id}`);
    fetchTodos();
  };
  const formatDate = todo.date
    ? new Date(todo.date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "No Date";
  return (
    <tr className="todo-row">
      <td>{index + 1}</td>
      <td>{todo.title}</td>

      <td>
        <span className={`status ${todo.completed ? "done" : "pending"}`}>
          {todo.completed ? "Done" : "Pending"}
        </span>
      </td>
      <td className="todo-date">{formatDate}</td>
      <td>
        <button className="icon-btn" onClick={toggleComplete}>
          {todo.completed ? "↩" : "✓"}
        </button>
      </td>

      <td>
        <button className="icon-btn danger" onClick={deleteTodo}>
          🗑
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
