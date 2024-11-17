import logoDomAlberto from "/src/assets/icons/logo_domalberto.jpg";
import logoJonatas from "/src/assets/icons/iconJonatas.svg";
import { Github, Instagram, PanelTop } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-orange_1">
        <div className="flex flex-col size-full justify-center items-center py-10">
          <section className="flex gap-5 items-center">
            <img
              src={logoDomAlberto}
              alt="Logotipo da faculdade Dom Alberto."
              className="size-20 "
            />
            <img
              src={logoJonatas}
              alt="Logitipo de identificação de Jonatas Gollmann"
              className="size-10"
            />
          </section>
          <section>
            <nav className="flex gap-4 py-3 text-white_3 border-b-2 mb-4">
              <a href="https://www.instagram.com/dom.alberto/" className="p-2.5 hover:bg-orange_3 bg-orange_2 hover:text-white_2 rounded-full hover:rounded-lg transition-all">
                <Instagram />
              </a>
              <a href="https//github.com/jonatasGollmann/" className="p-2.5 hover:bg-orange_3 bg-orange_2 hover:text-white_2 rounded-full hover:rounded-lg transition-all">
                <Github />
              </a>
              <a href="https://domalberto.edu.br/curso/engenharia-da-computacao/" className="p-2.5 bg-orange_2 hover:bg-orange_3 hover:text-white_2 rounded-full hover:rounded-lg transition-all">
                <PanelTop />
              </a>
            </nav>
          </section>
          <section className="text-white_1">
            <p>Desenvolvido por Jonatas Gollmann &copy; 2024</p>
          </section>
        </div>
      </footer>
    </>
  );
}
