
export const Card = ({
  card,
  increment,
  selectedCard,
  setSelectedCards,
  reset,
}) => {
  const handleClickCard = () => {
    if (selectedCard.includes(card.name)) {
      reset(true);
      return;
    } else {
      setSelectedCards(selectedCard.concat(card.name));
      increment();
    }
  };
  return (
    <div className="card-game" key={card.name} onClick={handleClickCard}>
      <img src={card.image} alt={card.name} />
      <span>{card.name}</span>
    </div>
  );
};
