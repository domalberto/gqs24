import { useRef } from "react";
import CarouselCards from "../cards/CarouselCards";
import { motion, useScroll, useTransform } from "framer-motion";
import logoDomAlberto from "/src/assets/icons/logo_domalberto.jpg";
import RobotHand from "/src/assets/images/roboticHand_small.jpg";
import Profile from "/src/assets/images/profile_small.jpg";
import Nairo from "/src/assets/images/nairo.jpg";
import Devloping from "/src/assets/images/developing_small.jpg";

interface iCards {
  id: number;
  image: string;
  title: string;
  description: string;
}

const cards: iCards[] = [
  {
    id: 1,
    image: RobotHand,
    title: "Projeto e Integração de Hardware e Software",
    description:
      "Engenheiros da Computação precisam entender tanto o lado físico quanto o digital dos sistemas. Durante a formação, você será treinado para projetar e integrar hardware com software, permitindo a criação de dispositivos inteligentes e sistemas embarcados.",
  },
  {
    id: 2,
    image: Profile,
    title: "Lógica e Raciocínio Computacional",
    description:
      "Uma habilidade central para todo engenheiro da computação é a capacidade de pensar de forma lógica e analítica. Você aprenderá a desenvolver algoritmos e resolver problemas complexos com eficiência, uma competência essencial para qualquer desafio tecnológico.",
  },
  {
    id: 3,
    image: Nairo,
    title: "Trabalho em Equipe e Gestão de Projetos",
    description:
      "O desenvolvimento de soluções tecnológicas raramente é um trabalho solitário. Você aprenderá a trabalhar em equipes multidisciplinares, aplicando técnicas de gestão de projetos, como metodologias ágeis, para garantir a entrega de soluções eficazes e no prazo.",
  },
  {
    id: 4,
    image: Devloping,
    title: "Inovação Contínua",
    description:
      "O curso incentiva a inovação contínua e o aprendizado ao longo da vida, preparando os alunos para se adaptarem às rápidas mudanças tecnológicas. Com uma base sólida em princípios de engenharia e uma abordagem prática para a solução de problemas complexos em diversas áreas.",
  },
];

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: carouselRef });

  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);

  return (
    <section
      className="h-[350vh] bg-gradient-to-br to-blue_1 from-blue_3 overflow-y-clip"
      ref={carouselRef}
    >
      <div className="h-screen sticky top-0 flex flex-col justify-between items-center overflow-hidden  ">
        <div className="flex flex-col justify-center items-center max-md:px-6 text-center">
          <h1 className="bg-clip-text bg-gradient-to-bl to-white_1 from-white_2 text-transparent 2xl:text-3xl text-2xl  mt-14 font-semibold 2xl:mt-20 max-md:text-center">
            Habilidades desenvolvidas durante a sua formação
          </h1>
          <p className="text-white_1">
            Algumas das habilidades que você desenvolverá ao longo do seu ensino
            em Engenharia da Computação.
          </p>
        </div>

        <motion.section className="flex" style={{ x }}>
          {cards.map((card: iCards) => (
            <CarouselCards card={card} key={card.id} />
          ))}
        </motion.section>
        <section className="2xl:h-[100px] shadow-xl flex justify-evenly w-full items-center bg-gradient-to-tr to-white_1 from-white_2">
          <img
            className="2xl:h-24 h-[70px]"
            src={logoDomAlberto}
            alt="Logotipo da faculdade Dom Alberto"
          />
          <p className="text-preto 2xl:text-lg text-sm max-md:hidden">
            Matricule-se já para o curso de Engenharia da Computação.
          </p>
          <button className="bg-gradient-to-tr to-blue_1 from-blue_4 text-white_1 py-4 px-8 rounded-lg hover:scale-105 transition-all">
            Matricule-se
          </button>
        </section>
      </div>
    </section>
  );
}
