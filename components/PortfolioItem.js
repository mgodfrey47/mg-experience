export default function PortfolioItem({borderColour, item}) {
  const { title, image, description, languages, links } = item;

  return (
    <div className={`w-full h-96 border-3 border-t-20 ${borderColour} bg-white text-left p-3`}>
      <img
        src={image}
        className={`mb-2 border-b-8 ${borderColour}`}
      />
      <h2 className="text-[1.8rem]">{title}</h2>
    </div>
  );
}
