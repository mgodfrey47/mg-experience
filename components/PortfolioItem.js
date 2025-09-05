export default function PortfolioItem({colour, title}) {
  return (
    <div className={`w-full h-96 border-3 border-${colour} bg-white`}>
      <p>{title}</p>
    </div>
  );
}
