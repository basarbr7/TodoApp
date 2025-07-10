import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const menuItems= [
    {name: "Home", src: "/"},
    {name: "About", src: "/about"},
    {name: "Todos", src: "/todolist"},
    {name: "Profile", src: "/profile"},
]

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin=()=>{
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }
    checkLogin()
    window.addEventListener("authChanged", checkLogin)
    return () => {
        window.removeEventListener('authChanged', checkLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    window.dispatchEvent(new Event("authChanged"));
    navigate('/');
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100">
      <h2 className="text-xl font-bold">My App</h2>

        <ul className='flex gap-10'>
            {
                menuItems.map((item, index)=>(
                    <li key={index} >
                        <Link to={item.src} className='py-4'>{item.name}</Link>
                    </li>
                ))
            }
        </ul>


      {isLoggedIn ? (
        <button 
        onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
          Logout
        </button>
      ) : (
        <button 
        onClick={() => navigate('/login')} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
          login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
