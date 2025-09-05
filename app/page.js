import Image from "next/image";
import PortfolioItem from '../components/PortfolioItem';

export default function Home() {
  return (
    <>
      <div className="absolute top-[27rem] dotted w-full h-[35rem]"></div>
      <div className="grid grid-cols-[5rem_1fr_5rem] justify-items-center min-h-screen gap-16 relative">
      <div className="border-r-9 border-mg-navy h-full w-full"></div>
      <main className="flex flex-col gap-[32px] items-center text-center w-full">
        <h1 className="text-[4rem] font-bold mt-32">Hi! I'm Megan Godfrey.</h1>
        <p className="max-w-[40rem] text-lg">
          I'm a front-end web developer with a background in neuroimaging research.
          I have a passion for translating complex requirements into user-friendly applications.
        </p>
        <p className="text-lg">
          Here are some examples of projects I’ve worked on...
        </p>
        <div className="grid grid-cols-3 gap-x-16 gap-y-8 mt-16 mx-4 w-full">
          <PortfolioItem
            colour="mg-orange"
            title="Concertim"
          />
          <PortfolioItem
            colour="mg-teal"
            title="OpenFlightHPC"
          />
          <PortfolioItem
            colour="mg-pink"
            title="Carbon leaderboard"
          />
          <PortfolioItem
            colour="mg-teal"
            title="Flight Web Suite"
          />
          <PortfolioItem
            colour="mg-pink"
            title="OPM data acquisition"
          />
        </div>
      </main>
      <div className="border-l-9 border-mg-navy h-full w-full"></div>
      </div>
    </>

  );
}
