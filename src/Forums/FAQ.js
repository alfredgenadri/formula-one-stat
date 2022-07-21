import React, { Fragment } from "react";
import Faq from "react-faq-component";

const data = {
    title: "Frequently Asked Questions (FAQ)",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Und was ist, wenn der Satz länger ist ...? Geht es dann einfach weiter?"
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "What is the package version",
        content: "v1.0.5"
      },
      {
        title: "Wie sollen wir arbeiten",
        content: "Ich habe auch keine Ahnung"
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