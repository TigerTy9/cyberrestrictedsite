// File: app/routes/chat.tsx
import { useEffect, useState, useRef } from "react";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [persona, setPersona] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const payload = {
      messages: [
        { role: "system", content: persona },
        ...messages,
        userMessage,
      ],
      temperature: 0.8,
      stream: false,
    };

    try {
      const response = await fetch("https://13b-apibridge1.botbridgeai.net/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "(No response)";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error: Unable to reach server." },
      ]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-300 font-mono p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-4">Cyber Chat</h1>

      <textarea
        value={persona}
        onChange={(e) => setPersona(e.target.value)}
        placeholder="Persona (e.g., You are a rogue AI...)
        "
        className="w-full p-2 mb-4 bg-gray-800 text-green-300 rounded"
        rows={2}
      />

      <div className="flex-1 overflow-y-auto border border-green-700 p-4 rounded mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.role === "user" ? "text-yellow-400" : "text-green-300"}`}>
            <span className="font-bold">{msg.role === "user" ? "You" : "AI"}:</span> {msg.content}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type your message and press Enter..."
        className="w-full p-2 mb-2 bg-gray-900 text-green-200 rounded"
        rows={3}
      />

      <button
        onClick={sendMessage}
        className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Send
      </button>
    </div>
  );
}
