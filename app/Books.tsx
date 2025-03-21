import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
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
  const takeoverControls = useAnimation();

  useEffect(() => {
    const takeover = () => {
      takeoverControls.start({
        opacity: [0, 1, 0],
        scale: [1, 1.2, 1],
        backgroundColor: ["#000000", "#ff0000", "#000000"],
        transition: { duration: 0.6 }
      });
    };

    const interval = setInterval(() => {
      if (Math.random() < 0.15) takeover();
    }, 7000);

    return () => clearInterval(interval);
  }, [takeoverControls]);

  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-green-400 font-mono p-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Occasional takeover overlay */}
      <motion.div
        className="absolute inset-0 z-50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={takeoverControls}
      />

      {/* Background grid + scanline + slow flicker */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(255,255,255,0.01)_2px,rgba(255,255,255,0.01)_4px)] mix-blend-overlay pointer-events-none"
        animate={{ opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Header */}
      <motion.h1
        className="text-4xl mb-8 text-center glitch text-green-400"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
      >
        <motion.span
          className="inline-block animate-pulse"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          /books
        </motion.span>{" "}
        [Cyber Restricted Series]
      </motion.h1>

      {/* Book Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {books.map((book, i) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, scale: 0.95, rotateX: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="relative group bg-black/70 border border-green-500 shadow-lg shadow-green-900/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              whileHover={{ scale: 1.03, rotateZ: 1 }}
            >
              <motion.div
                className="absolute inset-0 pointer-events-none group-hover:animate-pulse bg-green-400/5 blur-sm"
                animate={{ opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <CardContent className="p-6 relative z-10">
                <motion.h2
                  className="text-2xl font-semibold mb-2 tracking-tight text-green-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.3 + 0.2 }}
                >
                  <span className="group-hover:underline underline-offset-4 decoration-green-400">{book.title}</span>
                </motion.h2>
                <motion.p
                  className="text-sm mb-4 opacity-90 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.3 + 0.4 }}
                >
                  {book.description}
                </motion.p>
                <motion.div
                  className="text-xs uppercase tracking-widest text-green-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.3 + 0.6 }}
                >
                  Status: <span className="text-green-300">{book.status}</span>
                </motion.div>
              </CardContent>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Footer Nav */}
      <motion.div
        className="mt-12 text-center text-sm text-green-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <Link to="/" className="hover:underline">
          &lt;- Return to Terminal
        </Link>
      </motion.div>
    </motion.div>
  );
}
