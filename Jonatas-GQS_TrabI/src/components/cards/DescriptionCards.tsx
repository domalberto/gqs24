import { useEffect, useState } from "react";

export default function DescriptionCards() {
  const [cards, setCards] = useState([])
  
  useEffect(() => {
    fetch('/dbCardsDescription.json')
      .then(res => res.json())
      .then(data => {
        setCards(data.cards);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  
  console.log(cards)
  return cards.map((card: any) => {
    return (
      <div key={card.id} className="h-[450px] w-2/5 mx-5 rounded-2xl shadow-xl hover:scale-105 transition-all ease-in-out max-md:min-w-full max-md:my-4">
        <img src={card.image} alt={card.title} className="h-[200px] w-full object-cover rounded-t-2xl" />
        <h2 className="mt-6 text-xl px-4 font-bold text-azul">{card.title}</h2>
        <p className="overflow-hidden font-light px-5 text-justify py-3">
          {card.description.length > 200 ? `${card.description.slice(0, 200)}...` : card.description}
        </p>
      
      </div>
    )
  })
}
