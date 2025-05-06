// src/components/Events.jsx

import React, { useState } from "react";
import "./Events.css";
import Footer from "./Footer";
import Gallery from "./Gallery";

const galleryData = {
  "4th-anni": {
    title: "4TH ANNIVERSARY ✹",
    date: "AUGUST 25ᵗʰ 2023",
    description:
      "The celebration of solucky’s fourth anniversary as a creative brand took place at an unforgettable Boiler Room event in collaboration with Casino Bleu. On Friday, 8/25, the event brought together a lively crowd for a night of dancing and drinks near the University of California, Berkeley.",
    images: [
      "/Assets/Galleries/Event-gallery/4th-anni/000057060001.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060003.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060004.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060005.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060007.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060008.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060009.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060010.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060011.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060013.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060014.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060015.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060017.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060018.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060019.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060020.JPG",
    ],
  },

  "diwali-event": {
    title: "DIWALI CELEBRATION ✹",
    date: "NOVEMBER 12ᵗʰ 2023",
    description: "A colorful evening of lights, lanterns, and community.",
    images: Array.from({ length: 20 }, (_, i) =>
      `/Assets/Galleries/Event-gallery/diwali-event/${String(i + 1).padStart(3, "0")}.JPG`
    ),
  },

  "halloween-event": {
    title: "HALLOWEEN SPOOK ✹",
    date: "OCTOBER 31ˢᵗ 2023",
    description: "Costumes, candy, and a dash of mischief!",
    images: Array.from({ length: 20 }, (_, i) =>
      `/Assets/Galleries/Event-gallery/halloween-event/${String(i + 1).padStart(3, "0")}.JPG`
    ),
  },

  "3rd-anni": {
    title: "3RD ANNIVERSARY ✹",
    date: "AUGUST 25ᵗʰ 2022",
    description: "Our third-year celebration at the Boiler Room.",
    images: Array.from({ length: 20 }, (_, i) =>
      `/Assets/Galleries/Event-gallery/3rd-anni/${String(i + 1).padStart(3, "0")}.JPG`
    ),
  },

  "clothing-tour": {
    title: "CLOTHING TOUR ✹",
    date: "MAY 14ᵗʰ 2023",
    description: "A pop-up tour of local fashion boutiques.",
    images: Array.from({ length: 20 }, (_, i) =>
      `/Assets/Galleries/Event-gallery/clothing-tour/${String(i + 1).padStart(3, "0")}.JPG`
    ),
  },
};


const Events = () => {
  const [openGalleryKey, setOpenGalleryKey] = useState(null);
  const data = openGalleryKey ? galleryData[openGalleryKey] : null;

  return (
    <div className="events-page">
      {/* Landing and intro sections */}
      <section className="landing-section">
        <div className="iphone-paragraph-container">
          <div className="iphone-container">
            <img
              src="../Assets/Events/iphone.png"
              className="iphone-pic"
              alt="iphone"
            />
          </div>
          <img
            className="the-art-of-text"
            src="../Assets/Events/theartof-text.png"
            alt="the art of"
          />
          <div className="para-text-container">
            <p className="events-header-text">connection</p>
            <p className="events-para-text">
              Our brand thrives on bringing creative energy to life through events
              & pop-up shops that foster community connections. From our
              anniversary parties to holiday celebrations, each gathering
              highlights culture, collaboration, & artistry.
            </p>
            <p className="events-para-text">
              Moving forward, plan to expand our events with casual picnics,
              cultural celebrations, immersive experiences, & more. We aim to
              unite people in fresh & impactful ways, crafting memorable moments
              beyond the pages of our magazine.
            </p>
          </div>
          <img
            className="stay-tuned-text"
            src="../Assets/Events/stay-tuned-text.svg"
            alt="stay tuned"
          />
        </div>
      </section>

      {/* Separator strip */}
      <section className="moving-strip">
        <p className="strip-text">Placeholder text yay!</p>
      </section>

      {/* Events thumbnails */}
      <section className="events-section">
        {Object.keys(galleryData).map((key) => (
          <div className="hover-section" key={key}>
            <img
              src={`../Assets/Events/${key}.png`}
              className="event-picture"
              alt={key}
            />
            <button
              type="button"
              className="gallery-button"
              onClick={() => setOpenGalleryKey(key)}
            >
              <p className="event-button-text">view gallery</p>
              <img src="../Assets/Team/apply-arrow.png" alt="→" />
            </button>
          </div>
        ))}
      </section>

      {/* Gallery modal */}
      {openGalleryKey && (
        <Gallery
          images={data.images}
          title={data.title}
          date={data.date}
          description={data.description}
          onClose={() => setOpenGalleryKey(null)}
      />
      )}

      <Footer />
    </div>
  );
};

export default Events;
