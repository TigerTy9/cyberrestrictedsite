import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-black text-green-400 font-mono p-6">
      <motion.h1
        className="text-4xl mb-8 text-center glitch"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        /books [Cyber Restricted Series]
      </motion.h1>

      <div className="grid gap-6 md:grid-cols-2">
        {books.map((book, i) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="bg-zinc-900 border border-green-600 shadow-md hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-5">
                <h2 className="text-2xl mb-2">{book.title}</h2>
                <p className="mb-3 text-sm opacity-90">{book.description}</p>
                <div className="text-xs uppercase tracking-wide">
                  Status: <span className="text-green-300">{book.status}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-zinc-400">
        <Link to="/" className="hover:underline">
          &lt;- return to terminal
        </Link>
      </div>
    </div>
  );
}
