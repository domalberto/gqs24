export default function ButtonHeader({ text, site }: { text:string,site: string }) {
  return (
    <a href={site} className="h-10 mx-1 font-medium text-blue_4 px-5 py-3 hover:bg-white_2 hover:text-blue_3 transition-all ease-in-out hover:scale-105 rounded-lg">
      {text}
    </a>
  );
}
      