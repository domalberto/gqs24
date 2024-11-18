export default function CarouselCards({ card }: { card: any }) {
  return (
    <article
      key={card.id}
      className="2xl:h-[475px] bg-gradient-to-bl to-white_1 from-white_2 lg:min-w-[400px] 2xl:min-w-[550px] mx-5 p-2 rounded-2xl shadow-xl hover:scale-105 transition-all ease-in-out  max-md:min-w-[90vw]"
    >
      <img
        src={card.image}
        alt={card.title}
        className="h-[200px] w-full object-cover rounded-t-2xl"
      />
      <h2 className="mt-6 2xl:text-xl px-4 font-medium text-blue_3">{card.title}</h2>
      <p className="overflow-hidden max-2xl:text-sm font-light px-5 text-justify py-3">
        {card.description}
      </p>
    </article>
  );
}
  