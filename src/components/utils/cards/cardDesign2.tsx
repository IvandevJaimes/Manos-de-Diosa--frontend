type CardProps = {
  img: string;
  title: string;
  alt?: string;
  onclick?: () => void;
  className?: string;
};

const CardDesign2 = ({ img, title, alt, onclick, className }: CardProps) => {
  return (
    <div
      className={`rounded-lg overflow-hidden cursor-pointer relative ${
        className || ""
      }`}
      onClick={onclick}
    >
      <img
        src={img}
        alt={alt || title}
        className="w-full h-56 sm:h-64 object-cover rounded-lg"
      />
      <h2 className="absolute left-0 right-0 bottom-0 text-center font-bold text-white py-1 px-3 z-10">
        {title}
      </h2>
    </div>
  );
};

export default CardDesign2;
