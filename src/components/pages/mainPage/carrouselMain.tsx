import Carousel from "../../utils/carousel/carousel";

interface CarouselImage {
  url: string;
  alt: string;
}

const CarrouselMain = () => {
  const carouselImages: CarouselImage[] = [
    {
      url: "https://tse3.mm.bing.net/th/id/OIP.jGHquk_ucMbHpygJgQ9PCgHaFP?pid=Api&P=0&h=220",
      alt: "Manicura profesional aplicando esmalte rosa pastel",
    },
    {
      url: "https://tse3.mm.bing.net/th/id/OIP.WNXL2b8lZhR-0lDWdCsB-wHaDr?pid=Api&P=0&h=220",
      alt: "Extensiones de pestañas aplicadas en salón de belleza",
    },
    {
      url: "https://tse1.mm.bing.net/th/id/OIP.MZWDn1Lby9OzQ1klc9LREAHaEu?pid=Api&P=0&h=220",
      alt: "Diseño de cejas con pinza en estudio estético",
    },
  ];

  return (
    <div className="mx-4">
      <Carousel images={carouselImages} className="carouselContainer" />
    </div>
  );
};

export default CarrouselMain;
