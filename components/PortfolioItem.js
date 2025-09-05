export default function PortfolioItem({item, colourClasses}) {
  const { title, image, description, contribution, languages, links } = item;

  return (
    <div className={`flex flex-col w-full border-3 border-t-20 ${colourClasses.border} bg-white text-left`}>
      <div className={"p-3"}>
      <img
        src={image}
        className={`mb-2 border-b-8 ${colourClasses.border}`}
      />
      <h2 className="text-[1.8rem]">{title}</h2>
      <p className="mb-4">{description}</p>
      <h3 className={colourClasses.text}>Tech stack</h3>
      <p className="mb-4">{languages}</p>
      <h3 className={colourClasses.text}>My contribution</h3>
      <p className="mb-2">{contribution}</p>

      </div>
      <div className={`flex items-center justify-center ${colourClasses.background} mt-auto p-2`}>
        <button className={`border-white text-white`}>
          View site
        </button>
      </div>
    </div>
  );
}
