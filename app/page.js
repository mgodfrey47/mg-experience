import PortfolioItem from '../components/PortfolioItem';
import portfolioItems from "../data/portfolioItems";

export default function Home() {
  const colours = [
    {border: "border-mg-pink", text: "text-mg-pink", background: "bg-mg-pink"},
    {border: "border-mg-orange", text: "text-mg-orange", background: "bg-mg-orange"},
    {border: "border-mg-teal", text: "text-mg-teal", background: "bg-mg-teal"},
  ]

  return (
    <>
      <div className="absolute top-[27rem] dotted w-full h-[35rem]"></div>
      <div className="grid grid-cols-[5rem_1fr_5rem] justify-items-center min-h-screen relative">
      <div className="border-r-9 border-mg-navy h-full w-full"></div>
      <main className="flex flex-col gap-[32px] items-center text-center w-full px-20">
        <h1 className="text-[4rem] text-mg-navy font-bold mt-32">Hi! I'm Megan Godfrey.</h1>
        <p className="max-w-[40rem] text-lg">
          I'm a front-end web developer with a background in neuroimaging research.
          I have a passion for translating complex requirements into user-friendly applications.
        </p>
        <p className="text-lg">
          Here are some examples of projects I’ve worked on...
        </p>
        <div className="grid grid-cols-3 gap-x-20 gap-y-8 my-16 w-full">
          {portfolioItems.map((item) => (
            <PortfolioItem
              key={item.id}
              item={item}
              colourClasses={colours[item.id % 3]}
            />
          ))}
        </div>
      </main>
      <div className="border-l-9 border-mg-navy h-full w-full"></div>
      </div>
    </>

  );
}
