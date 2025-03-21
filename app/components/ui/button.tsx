export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
      {...props}
    >
      {children}
    </button>
  );
}

