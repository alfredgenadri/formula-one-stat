import React, { Fragment } from "react";
import Faq from "react-faq-component";

const data = {
    title: "Frequently Asked Questions (FAQ)",
    rows: [
      {
        title: "How Fast is a Formula 1 Car?",
        content: "Formula 1 cars can accelerate from 0 to 100 mph (160 kmph) and then decelerate back to zero in less than five (5) seconds. Most racers will reach a Formula 1 car top speed of around 300 kmph (185 mph). Note: Some cars have attained speeds around 400 kmph. But, the gears and aerodynamics configuration did not fully comply with F1 standards."
      },
      {
        title: "How much does a Formula 1 Car Cost?",
        content:
          "The most expensive parts of a Formula 1 car is the engine and its related components. You might expect F1 cars to cost a team around 10 million pounds. The team also needs to pay for the best drivers such as Lewis Hamilton, Alonso, or Sebastian Vettel. An educated guess might put the total figure near to 50 million pounds."
      },
      {
        title: "When was the First Formula One Race?",
        content:
          "The origins of Formula 1 racing date back to the 1920s in Europe. F1 originated from other similar motor racing competitions. The FIA standardized the rules of car racing in 1946. That formed the basis for the modern rules of Formula One racing. The 13th of May in 1950 saw the inaugural Formula One World Drivers' championship. The race at Silverstone in Great Britain became the first event date of the first world championship series."
      },
      {
        title: "How many Grand Prix Races are there in a Season?",
        content: "There have been a varying number of Grands Prix over the seasons. The 1950 season had 7 separate Grand Prix races and has increased ever since. As a rule, you will now be able to watch a different Grand Prix twenty times in each season."
      },
      {
        title: "How many Cars in Formula 1 Race?",
        content: "Each of the 10 teams can have two cars to compete in the F1 World Championship. That means a total of 20 cars can enter the competition. Even so, FIA sporting regulations in fact allow a maximum limit of 26 cars for the championship."
      }
    ]
  };

export default function FAQ() {
  return (
    <Fragment>
        <div className="p-4">
      <Faq 
        data={data}
        styles={{
          bgColor: "white",
          titleTextColor: "#48482a",
          rowTitleColor: "#78789a",
          rowTitleTextSize: "large",
          rowContentColor: "#48484a",
          rowContentTextSize: "16px",
          rowContentPaddingTop: "10px",
          rowContentPaddingBottom: "10px",
          rowContentPaddingLeft: "50px",
          rowContentPaddingRight: "150px",
          arrowColor: "red"
        }}
        config={{
          animate: true
        }}
      />
      </div>
    </Fragment>
  );
}