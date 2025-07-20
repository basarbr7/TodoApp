import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { name: "Home", src: "/" },
  { name: "About", src: "/about" },
  { name: "Todos", src: "/todos" },
  { name: "Profile", src: "/profile" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };
    checkLogin();
    window.addEventListener("authChanged", checkLogin);
    return () => window.removeEventListener("authChanged", checkLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    window.dispatchEvent(new Event("authChanged"));
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-100 shadow px-4 py-3 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-xl font-bold">Todo App</h2>

        {/* Hamburger for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.src} className="hover:text-amber-600 transition">{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Login/Logout Button */}
        <div className="hidden lg:block">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
              Logout
            </button>
          ) : (
            <button onClick={() => navigate('/login')} className="bg-blue-500 text-white px-4 py-2 rounded">
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden mt-4 space-y-3">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.src}
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
            >
              {item.name}
            </Link>
          ))}
          <div className="px-4">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="w-full bg-red-500 text-white py-2 rounded">
                Logout
              </button>
            ) : (
              <button onClick={() => { closeMenu(); navigate('/login'); }} className="w-full bg-blue-500 text-white py-2 rounded">
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
