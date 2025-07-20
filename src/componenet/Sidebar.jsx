import { NavLink } from 'react-router-dom';

const Sidebar = ({ className }) => {
  return (
    <div className={`w-64 min-h-screen bg-gray-800 text-white p-6 ${className}`}>
      <h1 className="text-2xl font-bold mb-8">📝 TodoApp</h1>
      <nav className="flex flex-col gap-4">
        <NavLink to="" end className={({ isActive }) =>
            isActive
              ? "bg-gray-700 px-4 py-2 rounded"
              : "hover:bg-gray-700 px-4 py-2 rounded"
          }>📋 Todo List</NavLink>
        <NavLink to="addtodo" className={({ isActive }) =>
            isActive
              ? "bg-gray-700 px-4 py-2 rounded"
              : "hover:bg-gray-700 px-4 py-2 rounded"
          }>➕ Add Todo</NavLink>
        <NavLink to="updatetodo" className={({ isActive }) =>
            isActive
              ? "bg-gray-700 px-4 py-2 rounded"
              : "hover:bg-gray-700 px-4 py-2 rounded"
          }>✏️ Update Todo</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
