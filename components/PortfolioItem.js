import Image from "next/image";

export default function PortfolioItem({colour, title}) {
  return (
    <div className={`w-full h-96 border-3 border-t-20 border-${colour} bg-white text-left p-3`}>
      <img
        src={'openflighthpc.png'}
        className={'mb-2'}
      />
      <h2 className="text-[1.8rem]">{title}</h2>
    </div>
  );
}
