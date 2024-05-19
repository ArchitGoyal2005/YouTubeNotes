function Button({ children, onClick }) {
  return (
    <button
      className="flex items-center justify-center p-3 border-2 rounded-lg gap-2 shadow-custom border-gray-200 text-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
