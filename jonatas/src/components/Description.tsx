import { motion } from "framer-motion";
import TabSemesters from "./tabs/TabSemesters";
import { entrada } from "../AnimationVariants";
import ProfsLeft from "/src/assets/images/Professores_esquerda.png";
import ProfsRight from "/src/assets/images/Professores_direita.png";
import Documentation from "/src/assets/images/documentation_small.jpg";

export default function About() {
  return (
    <section className=" flex justify-center my-12 md:my-24">
      <div className="2xl:w-4/5 max-2xl:p-6 w-full ">
        <section className="grid max-md:overflow-hidden grid-cols-2 md:grid-cols-12 max-md:grid-rows-7 md:grid-rows-4 gap-6 md:gap-12 box-content ">
          <motion.div
            variants={entrada("top", 0.15)}
            initial="opHidden"
            viewport={{ once: true, amount: 0.7 }}
            whileInView={"visible"}
            className=" bg-gradient-to-tr relative overflow-hidden to-blue_3 from-blue_1 rounded-lg shadow-xl max-md:row-span-1 col-span-2 md:col-span-12 flex flex-col justify-center items-center"
          >
            <motion.img
              variants={entrada("left", 0.25)}
              initial="opHidden"
              viewport={{ once: true, amount: 0.7 }}
              whileInView={"visible"}
              src={ProfsLeft}
              alt="Imagem mostrando parte do grupo de docentes."
              className="h-full object-contain overflow-hidden absolute mix-blend-multiply left-0 bottom-0"
            />
            <h2 className="text-2xl font-semibold z-40 text-white_1">
              Grupo de docentes
            </h2>
            <p className="text-xl z-40 text-white_1">
              O curso conta com professores que atuam em diversas áreas da
              Computação
            </p>
            <motion.img
              variants={entrada("right", 0.25)}
              initial="opHidden"
              viewport={{ once: true, amount: 0.7 }}
              whileInView={"visible"}
              src={ProfsRight}
              alt="Imagem mostrando parte do grupo de docentes."
              className="h-full bottom-0 object-contain overflow-hidden absolute mix-blend-multiply right-0"
            />
          </motion.div>
          <TabSemesters />
          <motion.section
            variants={entrada("left", 0.2)}
            initial="opHidden"
            viewport={{ once: true, amount: 0.7 }}
            whileInView={"visible"}
            className="flex flex-col justify-center p-8 overflow-hidden text-slate-100 bg-gradient-to-tl to-orange_2 from-orange_1 rounded-lg shadow-xl col-span-2 md:col-span-3 2xl:col-span-2 row-span-1 "
          >
            <h2 className="font-medium text-2xl">Nota do Enade</h2>
            <h3 className="text-9xl text-end font-bold">4</h3>
          </motion.section>
          <motion.a
            variants={entrada("right", 0.25)}
            initial="opHidden"
            viewport={{ once: true, amount: 0.7 }}
            whileInView={"visible"}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            className="flex flex-col relative justify-center items-center p-8 hover:bg-blue_3 text-slate-100 bg-gradient-to-br to-blue_1 from-blue_2 rounded-lg shadow-xl overflow-hidden col-span-2 md:col-span-3 2xl:col-span-2 row-span-1 "
          >
            <img
              className="absolute inset-0 w-full h-full opacity-45 rounded-xl mix-blend-multiply object-cover"
              src={Documentation}
              alt="Imagem contendo um documento ficticio, informando sobre a documentação necessaria para o curso."
            />
            <h2 className="font-medium text-2xl z-10">Documentação</h2>
            <p className="z-10 mt-4 text-center">
              Clique aqui para ver a documentação necessaria.
            </p>
          </motion.a>

          <motion.div
            variants={entrada("bottom", 0.05)}
            initial="opHidden"
            viewport={{ once: true, amount: 0.7 }}
            whileInView={"visible"}
            className="bg-white_1 rounded-lg shadow-xl overflow-hidden col-span-2 2xl:col-span-4 2xl:row-span-2 md:col-span-6"
          >
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/jgJbxOriK7Q?si=r6YbhdLuEFkrBIso"
            />
          </motion.div>
        </section>
      </div>
    </section>
  );
}
