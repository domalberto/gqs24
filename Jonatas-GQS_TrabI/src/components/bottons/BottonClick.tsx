export default function ButtonClick({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  if (color === "azul") {
    return (
      <button
        className={`bg-amarelo text-white px-8 py-4 mt-4 shadow-lg rounded-lg hover:bg-yellow-600 hover:rounded-2xl hover:scale-105 ease-in-out transition-all `}
      >
        {text}
      </button>
    );
  }
  if (color === "amarelo") {
    return (
        <button
          className={`bg-azul text-white px-8 py-4 mt-4 shadow-lg rounded-lg hover:bg-slate-600 hover:rounded-2xl hover:scale-105 ease-in-out transition-all `}
        >
          {text}
        </button>
      );
  }
}
