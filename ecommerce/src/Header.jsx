function Header() {
  return (
    <header className="w-full bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center px-8 py-4">

        <div className="flex-1">
          <a href="#"><img src="src/assets/logo.png" alt="Logo" className="h-10 w-auto" /></a>
        </div>

        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-8 text-lg">
            <li className="hover:text-slate-300 cursor-pointer transition-all duration-300">Home</li>
            <li className="hover:text-slate-300 cursor-pointer transition-all duration-300">About</li>
            <li className="hover:text-slate-300 cursor-pointer transition-all duration-300">Explore</li>
            <li className="hover:text-slate-300 cursor-pointer transition-all duration-300">Products</li>
          </ul>
        </div>

        <div className="flex-1 flex justify-end">
          <button className="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 hover:text-green-100 cursor-pointer transition duration-500">
            Contact Us
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;
