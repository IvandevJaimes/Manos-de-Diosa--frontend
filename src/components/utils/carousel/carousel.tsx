interface CarouselProps {
  images?: string[];
  className?: string;
}
const Carousel = ({ images = [], className }: CarouselProps) => {
  return (
    <div
      id="indumentaria-carousel"
      className={`carousel relative mt-6 rounded-lg ${className || ""}`}
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 cursor-pointer">
        {images.map((image, index) => (
          <div
            className="duration-700 ease-in-out "
            data-carousel-item="active"
            onClick={() => {
              console.log(index);
            }}
            key={index}
          >
            <img
              src={image.url}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={image.alt}
            />
          </div>
        ))}
      </div>

      {/* Controles */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Anterior</span>
        </span>
      </button>

      <button
        type="button"
        className="flex absolute top-0 end-0 z-30  items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Siguiente</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
