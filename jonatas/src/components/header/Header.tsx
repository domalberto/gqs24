import { Facebook, Github, Instagram, Menu, X, Youtube } from "lucide-react";
import ButtonHeader from "../buttons/ButtonHeader";
import { useState } from "react";
import { motion } from "framer-motion";
import { entrada } from "../../AnimationVariants";

export default function Header() {
  const [menu, setMenu] = useState<boolean>(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <motion.header 
      variants={entrada("bottom", 0.55)}
      initial="hidden"
      whileInView={"visible"}
      viewport={{once: true, amount: 0.7}}
      className="flex justify-between px-10 h-[60px] 2xl:h-[75px] bg-branco_1 items-center max-md:hidden">
        <nav>
          <ul className="flex gap-6 ">
            <li className="p-2 hover:bg-branco_2 hover:text-preto rounded-lg transition-all text-azul_3">
              <a href="https://www.instagram.com/dom.alberto/">
                <Instagram />
              </a>
            </li>
            <li className="p-2 hover:bg-branco_2 hover:text-preto rounded-lg transition-all text-azul_3">
              <a href="https://www.facebook.com/domalberto/">
                <Facebook />
              </a>
            </li>
            <li className="p-2 hover:bg-branco_2 hover:text-preto rounded-lg transition-all text-azul_3">
              <a href="https://github.com/jonatasGollmann/">
                <Github />
              </a>
            </li>
            <li className="p-2 hover:bg-branco_2 hover:text-preto rounded-lg transition-all text-azul_3">
              <a href="https://www.youtube.com/user/domalbertovideos">
                <Youtube />
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex gap-0 max-2xl:text-sm">
            <li>
              <ButtonHeader
                site="https://domalberto.edu.br/blog/"
                text="Blog"
              />
            </li>
            <li>
              <ButtonHeader
                site="https://domalberto.edu.br/vestibular/"
                text="Eventos"
              />
            </li>
            <li>
              <ButtonHeader
                site="https://domalberto.edu.br/cursos/"
                text="Cursos"
              />
            </li>
            <li>
              <ButtonHeader
                site="https://domalberto.edu.br/contato/"
                text="Contato"
              />
            </li>
          </ul>
        </nav>
      </motion.header>
      <header className="md:hidden h-[50px] flex justify-end items-center p-4">
        <button className="z-50" onClick={handleMenu}>
          {menu ? <Menu /> : <X />}
        </button>
        {!menu && (
          <>
            <nav className="flex-wrap fixed top-0 left-0 w-full h-full bg-branco_1 z-20 flex flex-col justify-center items-center">
              <ul className="flex flex-col gap-6">
                <li>
                  <ButtonHeader
                    site="https://domalberto.edu.br/blog/"
                    text="Blog"
                  />
                </li>
                <li>
                  <ButtonHeader
                    site="https://domalberto.edu.br/vestibular/"
                    text="Eventos"
                  />
                </li>
                <li>
                  <ButtonHeader
                    site="https://domalberto.edu.br/cursos/"
                    text="Cursos"
                  />
                </li>
                <li>
                  <ButtonHeader
                    site="https://domalberto.edu.br/contato/"
                    text="Contato"
                  />
                </li>
              </ul>
              <nav className="mt-8">
                <ul className="flex gap-6 ">
                  <li className="p-2 hover:bg-branco_2 hover:text-preto rounded-lg transition-all text-azul_3">
                    <a href="https://www.instagram.com/dom.alberto/">
                      <Instagram />
                    </a>
                  </li>
                  <li className="p-2 hover:bg-branco_2 hover:text-preto rounded-lg transition-all text-azul_3">
                    <a href="https://www.facebook.com/domalberto/">
                      <Facebook />
                    </a>
                  </li>
                  <li className="p-2 hover:bg-branco_2 hover:text-preto rounded-lg transition-all text-azul_3">
                    <a href="https://github.com/jonatasGollmann/">
                      <Github />
                    </a>
                  </li>
                  <li className="p-2 hover:bg-branco_2 hover:text-preto rounded-lg transition-all text-azul_3">
                    <a href="https://www.youtube.com/user/domalbertovideos">
                      <Youtube />
                    </a>
                  </li>
                </ul>
              </nav>
            </nav>
          </>
        )}
      </header>
    </>
  );
}
