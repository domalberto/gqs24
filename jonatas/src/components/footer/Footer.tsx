import LogoDomAlberto from "/src/assets/icons/logo_domalberto.jpg";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-br to-amarelo_1 min-h-[200px] from-amarelo_3 flex max-md:flex-col justify-between items-center mx-4 rounded-t-lg px-10 py-5">
        <a className="h-[100px] flex items-center ">
          <img
            src={LogoDomAlberto}
            alt=""
            className="h-[80px] px-4 rounded-lg transition-all hover:bg-amarelo_3"
          />
        </a>

        <section className="text-branco_1">
          <p>Todos os direitos reservados </p>
          <p>Jonatas Gollmann &copy; - 2024 </p>
        </section>

        <nav className="h-28">
          <ul className="flex flex-col items-center justify-center h-full gap-6">
            <li className="text-branco_1 font-light ">
              <a
                href="https://github.com/jonatasGollmann/"
                className="p-3 hover:bg-amarelo_3 transition-all rounded-lg"
              >
                Github
              </a>
            </li>
            <li className="text-branco_1 font-light ">
              <a
                className="p-3 hover:bg-amarelo_3 transition-all rounded-lg"
                href="https://domalberto.edu.br/curso/engenharia-da-computacao/"
              >
                Site Oficial
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
