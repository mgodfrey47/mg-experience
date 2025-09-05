

export default function PortfolioItem({item, colourClasses, openModal}) {
  const { title, image, description, contribution, languages, links } = item;
  const buttonTitle = links.site ? "Visit site" : "View screenshots";

  const handleClick = (image) => {
    if (links.site) {
      window.open(links.site, '_blank').focus();
    } else {
      openModal(image);
    }
  }

  return (
    <div className={`flex flex-col w-full border-3 border-t-20 ${colourClasses.border} bg-white text-left`}>
      <div className={"p-3"}>
        <button
          className={`mb-2 border-b-8 ${colourClasses.border} cursor-pointer`}
          onClick={() => handleClick(image)}
          title={buttonTitle}
        >
          <img
            src={image}
            alt={`Screenshot of ${title}`}
            className="w-full"
          />
        </button>
        <h2 className="text-[1.8rem]">{title}</h2>
        <p className="mb-4">{description}</p>
        <h3 className={colourClasses.text}>Tech stack</h3>
        <p className="mb-4">{languages}</p>
        <h3 className={colourClasses.text}>My contribution</h3>
        <p className="mb-2">{contribution}</p>
      </div>
      <div className={`flex items-center justify-center gap-x-4 ${colourClasses.background} mt-auto p-2`}>
        <button
          className={`border-white text-white border-2 px-5 py-1 cursor-pointer font-normal`}
          onClick={() => handleClick(image)}
        >
          {buttonTitle}
        </button>
        <a
          href={links.github}
          title={links.github ? "View Github repository" : "Private repository"}
        >
          <img
            src={'github-mark-white.svg'}
            className={`size-8 ${links.github ? "" : "opacity-50"}`}
          />
        </a>
      </div>

    </div>
  );
}
