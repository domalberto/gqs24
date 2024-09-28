import { motion } from "framer-motion";
import { entrada } from "../../AnimationVariants";
import Imply from "/src/assets/icons/imply.webp";
import SellFlux from "/src/assets/icons/sellflux_preto.webp";
import ZenWall from "/src/assets/icons/zenwall.png";

export default function Partners() {
  return (
    <motion.section
      variants={entrada("top", 0.28)}
      initial="opacity"
      whileInView={"visible"}
      viewport={{ once: false, amount: 0.7 }}
      className="bg-gradient-to-tr to-amarelo_1 from-amarelo_3 md:p-6 md:rounded-2xl shadow-xl max-md:overflow-auto"
    >
      <h2 className="text-lg font-medium text-branco_1 mb-4">
        Empresas parceiras
      </h2>
      <nav className="flex gap-12 items-center">
        <a
          href="https://imply.com/pt/"
          className="hover:bg-amarelo_3 transition-all p-3 rounded-lg"
        >
          <img
            className="md:w-[150px] h-[70px] object-contain"
            src={Imply}
            alt="Logotipo da empresa parceira Imply."
          />
        </a>
        <a
          href="https://sellflux.com/"
          className="hover:bg-amarelo_3 transition-all p-3 rounded-lg"
        >
          <img
            className="md:w-[150px] h-[70px] object-contain"
            src={SellFlux}
            alt="Logotipo da empresa parceira SellFlux."
          />
        </a>
        <a
          href="https://www.zenwall.com.br/"
          className="hover:bg-amarelo_3 transition-all p-3 rounded-lg"
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
