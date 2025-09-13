export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-2 xl:px-16 2xl:px-48"
      onClick={onClose}
    >
      <div className="relative bg-white shadow-lg max-h-full max-w-full p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-xl hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
