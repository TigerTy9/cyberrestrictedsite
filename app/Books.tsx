import { motion } from "framer-motion";
import { Link } from "react-router";
import { Card, CardContent } from "../components/ui/card";

const books = [
  {
    id: "CR_001",
    title: "Cyber Restricted: Origin Protocol",
    description:
      "[ACCESS GRANTED] The story begins. Ruven discovers the truth hidden beneath layers of code and illusion.",
    status: "AVAILABLE",
  },
  {
    id: "CR_002",
    title: "Cyber Restricted: Fragment Reboot",
    description:
      "[DECRYPTION IN PROGRESS] Glitches aren't just bugs — they're messages. Someone is trying to reach him.",
    status: "COMING SOON",
  },
];

export default function Books() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-green-400 font-mono p-6 overflow-hidden">
      {/* Background grid + scanline */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(255,255,255,0.01)_2px,rgba(255,255,255,0.01)_4px)] mix-blend-overlay pointer-events-none" />

      {/* Header */}
      <motion.h1
        className="text-4xl mb-8 text-center glitch text-green-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block animate-pulse">/books</span> [Cyber Restricted Series]
      </motion.h1>

      {/* Book Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {books.map((book, i) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="relative group bg-black/70 border border-green-500 shadow-lg shadow-green-900/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="absolute inset-0 pointer-events-none group-hover:animate-pulse bg-green-400/5 blur-sm" />
              <CardContent className="p-6 relative z-10">
                <h2 className="text-2xl font-semibold mb-2 tracking-tight text-green-300">
                  <span className="group-hover:underline underline-offset-4 decoration-green-400">{book.title}</span>
                </h2>
                <p className="text-sm mb-4 opacity-90 leading-relaxed">
                  {book.description}
                </p>
                <div className="text-xs uppercase tracking-widest text-green-500">
                  Status: <span className="text-green-300">{book.status}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Footer Nav */}
      <div className="mt-12 text-center text-sm text-green-500">
        <Link to="/" className="hover:underline">
          &lt;- Return to Terminal
        </Link>
      </div>
    </div>
  );
}