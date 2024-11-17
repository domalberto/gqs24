import { motion } from "framer-motion";
import { useState } from "react";
import { entrada } from "../../AnimationVariants";

const semestreData = [
  {
    id: 1,
    disciplinas: [
      "Algoritmos e Lógica de Programação - 80h",
      "Cálculo I - 40h",
      "Arquitetura e Organização de Computadores - 80h",
      "Geometria Analítica - 40h",
      "Metodologia Científica e Tecnológica - 80h",
      "Teoria da Computação - 80h",
    ],
  },
  {
    id: 2,
    disciplinas: [
      "Física I - 40h",
      "Cálculo II - 40h",
      "Álgebra Linear - 40h",
      "Sistemas Operacionais - 40h",
      "Estrutura de Dados - 80h",
      "Atividades Curriculares de Extensão – ACEx - 80h",
    ],
  },
  {
    id: 3,
    disciplinas: [
      "Engenharia de Software - 80h",
      "Pesquisa e Classificação de Dados - 80h",
      "Equações Diferenciais Ordinárias - 40h",
      "Física II - 40h",
      "Matemática Discreta - 80h",
      "Sistemas Digitais - 80h",
      "Atividades Curriculares de Extensão – ACEx - 40h",
    ],
  },
  {
    id: 4,
    disciplinas: [
      "Redes de Computadores - 80h",
      "Processos Estocásticos - 40h",
      "Funções de Variáveis Complexas - 40h",
      "Fundamentos de Administração para Engenheiros - 40h",
      "Introdução à Ciências do Ambiente - 40h",
      "Introdução à Teoria Eletromagnética - 80h",
      "Atividades Curriculares de Extensão – ACEx - 80h",
    ],
  },
  {
    id: 5,
    disciplinas: [
      "Interface Homem Máquina - 40h",
      "Linguagem de Programação I - 80h",
      "Projetos de Engenharia I - 40h",
      "Circuitos Elétricos I - 80h",
      "Computação Gráfica e Processamento de Imagens - 80h",
    ],
  },
];

export default function TabSemesters() {
  const [semestre, setSemestre] = useState(1);

  const trocaSemestre = (index: number) => setSemestre(index);

  return (
    <>
      <motion.section 
      variants={entrada("top", 0.15)}
      initial="opHidden"
      viewport={{once: true, amount: 0.7}}
      whileInView={"visible"}
      className="bg-white_1 rounded-lg shadow-xl md:col-span-12 col-span-2 row-span-3 2xl:col-span-8 md:row-span-3 p-10">
        <h2 className="text-center text-2xl text-blue_3">Grade de disciplinas</h2>
        <div className="h-full">
          <section className="flex justify-evenly max-md:overflow-y-scroll p-4 mt-6 mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <button
                key={i}
                onClick={() => trocaSemestre(i + 1)}
                className="h-13 min-w-32 w-1/5 mx-1 text-azul px-6 py-4 hover:bg-white_2 hover:text-gray-800 transition-all ease-in-out delay-50 rounded-lg"
              >
                Semestre {i + 1}
              </button>
            ))}
          </section>
          <ul className="grid gap-6">
            {semestreData.map(
              (semestreData) =>
                semestreData.id === semestre &&
                semestreData.disciplinas.map((disciplina) => (
                  <li key={disciplina} className="bg-gradient-to-tr to-blue_1 from-blue_2 text-white_2 hover:to-blue_2 hover:from-blue_3 transition-all hover:scale-[1.025] rounded-xl shadow-xl p-4">{disciplina}</li>
                ))
            )}
          </ul>
        </div>
      </motion.section>
    </>
  );
}
