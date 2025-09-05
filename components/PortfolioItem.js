export default function PortfolioItem({item, colourClasses}) {
  const { title, image, description, contribution, languages, links } = item;

  return (
    <div className={`flex flex-col w-full border-3 border-t-20 ${colourClasses.border} bg-white text-left p-3`}>
      <img
        src={image}
        className={`mb-2 border-b-8 ${colourClasses.border}`}
      />
      <h2 className="text-[1.8rem]">{title}</h2>
      <p className="mb-4">{description}</p>
      <h3 className={colourClasses.text}>My contribution</h3>
      <p className="mb-4">{contribution}</p>
      <h3 className={colourClasses.text}>Languages/frameworks</h3>
      <p className="mb-2">{languages}</p>
    </div>
  );
}
