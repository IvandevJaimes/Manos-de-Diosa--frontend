import React from 'react'
import CardDesign1 from '../../utils/cards/cardDesign1'

const cardSection1 = () => {
    const cards = [
        { 
          img: 'https://tse4.mm.bing.net/th/id/OIP.lCfDgYJ6G2JAsnhrSCkdsQHaE8?pid=Api&P=0&h=220', 
          title: 'Manicuría', 
          subtitle: 'Cuidados y diseños personalizados para tus uñas', 
          alt: 'Manicuría'
        },
        { 
          img: 'https://tse2.mm.bing.net/th/id/OIP.2fcyPjDHApA_HlcQXEB-sgHaFo?pid=Api&P=0&h=220', 
          title: 'Pedicuría', 
          subtitle: 'Embellece las uñas de tus pies con diseños únicos', 
          alt: 'Pedicuría'
        },
        { 
          img: 'https://tse2.mm.bing.net/th/id/OIP.osgG4gwr5nLe2tajhvlyfAHaE8?pid=Api&P=0&h=220', 
          title: 'Pestañas', 
          subtitle: 'Realza tu mirada con extensiones y lifting de pestañas', 
          alt: 'Pestañas'
        },
        { 
          img: 'https://tse4.mm.bing.net/th/id/OIP.9T2pwdutPIrClP-lXQRc1gHaES?pid=Api&P=0&h=220', 
          title: 'Cejas', 
          subtitle: 'Define, resalta y embellece tus cejas ', 
          alt: 'Cejas'
        }
      ]
  return (
    <>
      <section className="w-full py-10 bg-dark mx-auto">
      <h2 className="text-3xl font-bold text-gray-700 mb-2 px-4 mt-6">
        Servicios destacados
      </h2>

      <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth ">
        <div className="flex gap-1 px-4">
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-80 snap-center ">
              <CardDesign1
                img={card.img}
                title={card.title}
                subtitle={card.subtitle}
                alt={card.alt}
                className='cardColecciones transition-transform duration-300 hover:scale-98'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default cardSection1
