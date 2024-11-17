import { Clock1, GraduationCap } from "lucide-react";
import bgEngCompHomepage from "/src/assets/images/bg_EngComp1.jpg";
import logoEngCompHomepage from "/src/assets/icons/logo_engcomp.png";
import logoDomAlberto from "/src/assets/icons/logo_domalberto.jpg";
import { motion } from "framer-motion";
import { entrada } from "../AnimationVariants";

export default function Home() {
  return (
    <section className="h-[calc(100vh-75px)] flex flex-col bg-white_1 rounded-t-lg shadow-lg">
      <motion.div
        variants={entrada("top", 0.15)}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.7 }}
        className="h-1/2 relative mx-2 mb-2 shadow-lg rounded-xl bg-gradient-to-bl from-blue_2 to-blue_1"
      >
        <img
          src={bgEngCompHomepage}
          alt="Imagem de fundo Engenharia da Computação. Mostrando uma placa de circuito eletrônico sendo soldada."
          className="absolute opacity-40 mix-blend-luminosity rounded-xl object-cover w-full h-full"
        />
        <a
          href="https://domalberto.edu.br/"
          className="absolute z-10 bg-white_1 hover:bg-white_2 px-2 my-5 pl-10 rounded-r-lg transition-all delay-75"
        >
          <img
            src={logoDomAlberto}
            alt="Logotipo Faculdade Dom Alberto"
            className="h-[60px]"
          />
        </a>
        <img
          src={logoEngCompHomepage}
          className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-28 mb-2"
          alt="Logotipo do curso de Engenharia da Computação na cor branca."
        />
      </motion.div>
      <section className="w-full h-1/2 flex justify-center items-center">
        <section className="flex flex-col justify-between h-full w-full p-8">
          <div className="mx-auto flex flex-col">
            <motion.h1
              variants={entrada("top", 0.25)}
              initial="opHidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.7 }}
              className="2xl:text-5xl max-md:text-center text-4xl font-bold bg-gradient-to-tr to-blue_4 from-blue_1 bg-clip-text text-transparent 2xl:h-[60px]"
            >
              Engenharia da Computação
            </motion.h1>
            <div className="flex justify-between text-orange_2">
              <motion.div
                variants={entrada("right", 0.45)}
                initial="opHidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.7 }}
                className="flex items-center"
              >
                <Clock1 size={20} />
                <p className="ml-2">4240h</p>
              </motion.div>
              <motion.div
                variants={entrada("left", 0.48)}
                initial="opHidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.7 }}
                className="flex items-center"
              >
                <GraduationCap size={20} />
                <p className="ml-2">Graduação presencial</p>
              </motion.div>
            </div>
          </div>
          <section className="flex max-md:flex-col items-end justify-evenly text-sm text-justify 2xl:font-light">
            <motion.p
              variants={entrada("top", 0.60)}
              initial="opHidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.7 }}
              className="max-2xl:text-xs md:w-1/4"
            >
              Se você sonha em estar na linha de frente da revolução
              tecnológica, a graduação em Engenharia da Computação é o caminho
              certo para transformar seu futuro.
            </motion.p>
            <motion.div
              variants={entrada("top", 0.58)}
              initial="opHidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex gap-x-3 2xl:gap-x-8 max-md:mt-4 justify-evenly"
            >
              <button className="bg-gradient-to-tr to-blue_1 from-blue_3 py-4 px-8 rounded-lg font-medium text-white_1 hover:scale-105 transition-all">
                Matricule-se
              </button>
            </motion.div>
          </section>
        </section>
      </section>
    </section>
  );
}
