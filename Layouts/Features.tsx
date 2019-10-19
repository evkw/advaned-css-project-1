import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAsia,
  faCompass,
  faMap,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import Feature from "../Components/Feature";

const Features = props => {
  const features = [
    {
      heading: "Explore the world",
      icon: faGlobeAsia
    },
    {
      heading: "Meet Nature",
      icon: faCompass
    },
    {
      heading: "Find Your Way",
      icon: faMap
    },
    {
      heading: "Live a healthier life",
      icon: faHeart
    }
  ];

  return (
    <section className="section-features">
      <div className="row">
        {features.map(feature => (
          <div className="col-1-of-4">
            <Feature heading={feature.heading} icon={feature.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
