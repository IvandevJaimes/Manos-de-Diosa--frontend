interface CardDesign1Props {
  img: string;
  title: string;
  subtitle?: string;
  alt?: string;
  className?: string;
}

const CardDesign1 = ({
  img,
  title,
  subtitle,
  alt,
  className,
}: CardDesign1Props) => {
  return (
    <article
      className={`flex flex-col items-centerborder rounded-lg cursor-pointer mb-2 ${
        className || ""
      }`}
    >
      <img
        className="object-cover w-full rounded-lg h-48 md:h-20 md:w-48"
        src={img}
        alt={alt}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-1800">
          {title}
        </h5>
        {subtitle && (
          <p className="mb-3 font-normal text-gray-700">{subtitle}</p>
        )}
      </div>
    </article>
  );
};

export default CardDesign1;
