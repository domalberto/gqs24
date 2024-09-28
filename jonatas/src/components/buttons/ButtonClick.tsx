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
        className={`bg-gradient-to-tr to-azul_2 from-azul_1 text-branco_1 hover:from-azul_2 hover:to-azul_3 px-8 py-4 max-w-[200px] max-h-[60px] shadow-lg rounded-lg hover:bg-slate-600 hover:-translate-y-1 hover:rounded-xl hover:scale-105 ease-in-out transition-all `}
      >
        {text}
      </button>
    );
  }
  if (color === "amarelo") {
    return (
        <button
          className={`bg-gradient-to-tr to-amarelo_3 from-amarelo_2 px-8 py-4 max-w-[200px] max-h-[60px] text-branco_1 shadow-lg rounded-lg hover:-translate-y-1 hover:from-amarelo_3 hover:to-amarelo_2 hover:rounded-xl hover:scale-105 ease-in-out transition-all `}
        >
          {text}
        </button>
      );
  }
}
