import ButtonHeader from "../buttons/ButtonHeader";
import { motion } from "framer-motion";
import { entrada } from "../../AnimationVariants";
import Midias from "./Midias";

export default function Header() {
  return (
    <>
      <motion.header
        variants={entrada("bottom", 0.55)}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex justify-between px-10 h-[60px] 2xl:h-[75px] bg-white_1 items-center max-md:hidden"
      >
        <Midias />
        <nav>
          <ul className="flex max-2xl:text-sm">
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
        <Midias />
      </header>
    </>
  );
}
