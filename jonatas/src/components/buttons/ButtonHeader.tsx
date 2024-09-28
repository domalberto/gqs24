export default function ButtonHeader({ text, site }: { text:string,site: string }) {
  return (
    <a href={site} className="h-10 mx-1 text-azul_1 px-6 py-3 hover:bg-branco_2 hover:text-azul_3 transition-all ease-in-out hover:scale-105 rounded-lg">
      {text}
    </a>
  );
}
      