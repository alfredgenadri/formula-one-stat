import { useEffect, useState } from "react";
import { Card } from "./Card";


export const CardGrid = ({ score, setScore, bestScore, setBestScore }) => {
  const [cards, setCards] = useState([
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Max_Verstappen_2017_Malaysia_1.jpg/320px-Max_Verstappen_2017_Malaysia_1.jpg",
      name: "Max Verstappen",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Anefo_933-1302_Huub_Rothengatter%2C_Alain_Prost%2C_Niki_Lauda_29.10.1984_Prost_crop.jpg/300px-Anefo_933-1302_Huub_Rothengatter%2C_Alain_Prost%2C_Niki_Lauda_29.10.1984_Prost_crop.jpg",
      name: "Alain Prost",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ayrton_Senna_9.jpg/640px-Ayrton_Senna_9.jpg",
      name: "Ayrton Senna",
    },
    {
      image:
        "https://www.formula1.com/content/fom-website/en/drivers/fernando-alonso/_jcr_content/image.img.640.medium.jpg/1647334212592.jpg",
      name: "Fernando Alonso",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg/300px-Lewis_Hamilton_2016_Malaysia_2.jpg",
      name: "Lewis Hamilton",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Schumi_di_GP_Kanada_2011_cropped.jpg/339px-Schumi_di_GP_Kanada_2011_cropped.jpg",
      name: "Micheal Schumacher",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lauda_at_1982_Dutch_Grand_Prix.jpg/349px-Lauda_at_1982_Dutch_Grand_Prix.jpg",
      name: "Nikki Lauda",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sebastian_Vettel_2015_Malaysia_podium_1.jpg/320px-Sebastian_Vettel_2015_Malaysia_podium_1.jpg",
      name: "Sebastian Vettel",
    },
    {
      image:
        "https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.1024.medium.jpg/1646819266274.jpg",
      name: "Valtteri Bottas",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nico_Rosberg_2016_Malaysia_1.jpg/320px-Nico_Rosberg_2016_Malaysia_1.jpg",
      name: "Nico Rosberg",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Daniel_at_2014_Italian_Grand_Prix_%2803%29.jpg/320px-Daniel_at_2014_Italian_Grand_Prix_%2803%29.jpg",
      name: "Daniel Ricciardo",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Charles-Leclerc.jpg/320px-Charles-Leclerc.jpg",
      name: "Charles Leclerc",
    },
  ]);
  const [selectedCard, setSelectedCards] = useState([]);
  const [reset, setReset] = useState(false);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const shuffleArray = (array) => {
    let shuffledArray = array.slice(0);
    for (let i = 0; i < shuffledArray.length; i++) {
      const a = Math.floor(Math.random() * shuffledArray.length);
      [shuffledArray[i], shuffledArray[a]] = [
        shuffledArray[a],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  //Rondomize the cards after every points
  useEffect(() => {
    setCards(shuffleArray(cards));
  }, [score]);

  useEffect(() => {
    if (reset) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setReset(false);
      setSelectedCards([]);
    }
  }, [reset]);

  return (
    <div className="main-game">
      <h4>
        Get points by clicking on an image but don't click on any more than
        once!
      </h4>
      <div className="cards">
        {cards.map((card) => {
          return (
            <Card
              key={card.name}
              card={card}
              increment={incrementScore}
              selectedCard={selectedCard}
              setSelectedCards={setSelectedCards}
              reset={setReset}
            />
          );
        })}
      </div>
    </div>
  );
};
