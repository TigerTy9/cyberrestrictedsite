// File: app/components/NavBar.tsx
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="flex justify-center space-x-6 py-4 text-yellow-400 font-mono z-50 relative">
      <Link to="/" className="hover:text-red-400 transition-all duration-300">Home</Link>
      <Link to="/lore" className="hover:text-red-400 transition-all duration-300">Lore</Link>
      <Link to="/chat" className="hover:text-red-400 transition-all duration-300">Chat</Link>
      <Link to="/books" className="hover:text-red-400 transition-all duration-300">Books</Link>
    </nav>
  );
}
