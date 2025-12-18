import React from "react";
import CardDesign2 from "../../utils/cards/cardDesign2";

const CardsSection = () => {
  const cards = [
    {
      img: "https://tse2.mm.bing.net/th/id/OIP.guo_I0l_Gd3_L_d7KP-XmQHaHa?pid=Api&P=0&h=220",
      title: "Capping gel",
    },
    {
      img: "https://tse4.mm.bing.net/th/id/OIP.SidY5-ZyRLx0ymB7_NWvLwHaHD?pid=Api&P=0&h=220",
      title: "Soft gel",
    },
    {
      img: "https://tse4.mm.bing.net/th/id/OIP.GOpiYwN4MftAINz-4VK4QAHaHr?pid=Api&P=0&h=220",
      title: "Lifting de pestañas",
    },
  ];
  return (
    <section className="cardSectionCategorias w-full py-10 bg-black">
      <h2 className="text-3xl font-bold text-gray-700 mb-3 px-4">Lo más pedido</h2>

      <div className="flex space-x-2 px-4 ">
        {cards.map((c, i) => (
            <CardDesign2 key={i} img={c.img} title={c.title} className="cardMasPedidos transition-transform duration-300 hover:scale-98" onclick={()=>{console.log(`card presionada ${i} ${c.title}`)}}/>
        ))}
      </div>
    
    </section>
  );
};

export default CardsSection;
