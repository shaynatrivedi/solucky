// src/components/Events.jsx

import React, { useState } from "react";
import "./Events.css";
import Footer from "./Footer";
import Gallery from "./Gallery";

const galleryData = {
  "4th-anni": Array.from({ length: 20 }, (_, i) => `/Assets/Events/4th-anni/${i + 1}.png`),
  "diwali-event": Array.from({ length: 20 }, (_, i) => `/Assets/Events/diwali-event/${i + 1}.png`),
  "halloween-event": Array.from({ length: 20 }, (_, i) => `/Assets/Events/halloween-event/${i + 1}.png`),
  "3rd-anni": Array.from({ length: 20 }, (_, i) => `/Assets/Events/3rd-anni/${i + 1}.png`),
  "clothing-tour": Array.from({ length: 20 }, (_, i) => `/Assets/Events/clothing-tour/${i + 1}.png`),
};

const Events = () => {
  const [openGalleryKey, setOpenGalleryKey] = useState(null);

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
          images={galleryData[openGalleryKey]}
          onClose={() => setOpenGalleryKey(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Events;
