
const Footer = () => {
  return (
    <footer className="bg-[#2a302d] text-white py-4 border-t border-[#737373]">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        &copy; {new Date().getFullYear()} TodoApp by M.A. Basar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
