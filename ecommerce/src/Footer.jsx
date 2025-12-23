function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center">

        <p className="flex-1 text-center">
          © 2025 ECOMMERCE. All rights reserved.
        </p>

        <ul className="flex gap-6 ml-auto ">
          <li className="hover:text-white cursor-pointer">Privacy</li>
          <li className="hover:text-white cursor-pointer">Terms</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>

      </div>
    </footer>
  );
}

export default Footer;
