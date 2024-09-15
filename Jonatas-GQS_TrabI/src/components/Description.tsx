import ButtonClick from "./bottons/BottonClick";
import DescriptionCards from "./cards/DescriptionCards";

export default function Description() {
  return (
    <>
      <div className="w-3/5 h-4/5 mx-auto my-20 text-center">
        <h1 className="font-extrabold uppercase text-amarelo text-3xl mb-6">Matricule-se!</h1>
        <p className="text-justify max-w-4xl mx-auto font-light ">
          Se você sonha em estar na linha de frente da revolução tecnológica, a
          graduação em Engenharia da Computação é o caminho certo para
          transformar seu futuro. Imagine-se desenvolvendo soluções inovadoras
          que impactam diretamente o mundo, desde a criação de dispositivos
          inteligentes até o avanço da inteligência artificial. Com um mercado
          de trabalho dinâmico e em constante crescimento, essa formação oferece
          uma combinação única de conhecimento técnico e oportunidades de
          inovação. Venha fazer parte de um curso que abre portas para áreas de
          ponta, onde seu talento e criatividade serão valorizados e você poderá
          moldar o futuro da tecnologia!
        </p>
        <ButtonClick text="Matricule-se" color="azul"/>
      </div>
      <div className="mx-40 my-8 flex max-md:flex-col max-md:items-center max-md:w-7/12 max-md:mx-auto">
            <DescriptionCards />
            
        </div>
    </>
  );
}
