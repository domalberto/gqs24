import { motion } from "framer-motion";
import { entrada } from "../../AnimationVariants";
import Imply from "/src/assets/icons/imply.webp";
import SellFlux from "/src/assets/icons/sellflux_preto.webp";
import ZenWall from "/src/assets/icons/zenwall.png";

export default function Partners() {
  return (
    <motion.section
      variants={entrada("bottom", 0.28)}
      initial="opacity"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.7 }}
      className="flex flex-col max-md:px-6 md:w-1/2 items-center justify-between"
    >
      <div className="mb-10">
        <h2 className="text-2xl 2xl:text-3xl font-bold text-blue_1 mb-4">
          Empresas parceiras
        </h2>
        <p className="max-md:text-justify">
          Conheça as empresas que apoiam o curso de Engenharia da Computação. E que ajudam a formar profissionais capacitados para o mercado de trabalho.
        </p>
      </div>
      <nav className="flex max-md:flex-col gap-12 items-center">
        <a
          href="https://imply.com/pt/"
          className="hover:bg-white_2 transition-all p-3 rounded-lg"
        >
          <img
            className="md:w-[150px] h-[70px] object-contain"
            src={Imply}
            alt="Logotipo da empresa parceira Imply."
          />
        </a>
        <a
          href="https://sellflux.com/"
          className="hover:bg-white_2 transition-all p-3 rounded-lg"
        >
          <img
            className="md:w-[150px] h-[70px] object-contain"
            src={SellFlux}
            alt="Logotipo da empresa parceira SellFlux."
          />
        </a>
        <a
          href="https://www.zenwall.com.br/"
          className="hover:bg-white_2 transition-all p-3 rounded-lg"
        >
          <img
            className="md:w-[150px] h-[70px] object-contain"
            src={ZenWall}
            alt="Logo da empresa parceira ZenWall."
          />
        </a>
      </nav>
    </motion.section>
  );
}
