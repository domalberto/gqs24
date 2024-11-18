import { motion } from "framer-motion";
import { entrada } from "../../AnimationVariants";

interface DescriptionCardProps {
  imagem: string;
  reverse?: boolean;
  title: string;
  description: string;
  alt: string;
}

export default function DescriptionCard({
  reverse = false,
  title,
  description,
  imagem,
  alt,
}: DescriptionCardProps) {
  if (reverse) {
    return (
      <motion.article
        variants={entrada("left", 0.28)}
        initial="opHidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex max-md:flex-col justify-between w-full rounded-3xl px-8 md:px-3"
      >
        <img
          className="w-[500px] 2xl:h-[300px] h-[250px] object-cover rounded-2xl shadow-xl"
          src={imagem}
          alt={alt}
        />
        <section className="my-auto text-preto">
          <h2 className="2xl:text-xl max-md:ml-0 max-md:w-full max-md:text-center max-md:mt-4 max-md:mr-0 text-lg text-blue_2 font-semibold md:w-3/4 max-w-4xl text-justify ml-auto mr-20 mb-2">
            {title}
          </h2>
          <p className="md:w-3/4 max-w-4xl font-light text-justify md:ml-auto md:mr-20 max-2xl:text-sm">
            {description}
          </p>
        </section>
      </motion.article>
    );
  }
  return (
    <motion.article
      variants={entrada("right", 0.32)}
      initial="opHidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.7 }}
      className="flex max-md:flex-col-reverse justify-between w-full rounded-3xl p-8 md:p-3"
    >
      <section className="my-auto text-preto">
        <h2 className="2xl:text-xl text-lg text-blue_2 font-semibold max-md:text-center max-md:mt-4 md:w-3/4 md:max-w-4xl my-auto text-justify md:ml-20 md:mb-2">
          {title}
        </h2>
        <p className="md:w-3/4 max-w-4xl text-justify font-light mx-2 md:ml-20 max-2xl:text-sm">
          {description}
        </p>
      </section>
      <img
        className="w-[500px] 2xl:h-[300px] h-[250px] object-cover rounded-2xl shadow-xl"
        src={imagem}
        alt={alt}
      />
    </motion.article>
  );
}
