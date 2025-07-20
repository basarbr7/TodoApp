import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Sidebar */}
      <div className={`
          fixed md:static top-0 left-0 h-svh w-68 bg-gray-800 text-white p-6 z-30
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}>
        {/* Close Button only mobile */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={() => setIsOpen(false)}>
            <X className="text-white h-6 w-6" />
          </button>
        </div>

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

      {/* Backdrop only mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
