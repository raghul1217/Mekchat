import React from 'react';
import NeonCard from '../components/NeonCard';
import '../styles/neoncard.css';

const EventSection = () => {
  const techEvents = [
    { id: 1, description: 'Participants must present their PPTs to the juries within 5 minutes. They can choose to present in one stream only: Thermal, Design, or Manufacturing.', heading: 'Paper Presentation' },
    { id: 2, description: 'Tech Event 2', heading: 'Tech Quiz' },
    { id: 3, description: 'Tech Event 3', heading: 'Spark Masters' },
    { id: 4, description: 'Tech Event 4', heading: 'Mech Bermuda' },
    { id: 5, description: 'Tech Event 5', heading: 'Mr. Lathe' },
    { id: 6, description: 'Tech Event 6', heading: 'CAD Modelling' },
    { id: 7, description: 'Tech Event 7', heading: 'CNC Conclave' },
    { id: 8, description: 'Tech Event 8', heading: 'Auto Assembly' },
    { id: 9, description: 'Tech Event 9', heading: 'Spell Bee' },
  ];

  const nonTechEvents = [
    { id: 1, description: 'Non-Tech Event 1', heading: 'Meme-Mania' },
    { id: 2, description: 'Non-Tech Event 2', heading: 'Pixelate Mech' },
    { id: 3, description: 'Non-Tech Event 3', heading: 'Poster Making' },
    { id: 4, description: 'Non-Tech Event 4', heading: 'Treasure Hunt' },
  ];

  return (
    <div className="event-section">
      <h2 className="event-heading">Tech Events</h2>
      <div className="card-grid">
        {techEvents.map(event => (
          <NeonCard key={event.id} description={event.description} heading={event.heading} />
        ))}
      </div>

      <h2 className="event-heading">Non-Tech Events</h2>
      <div className="card-grid">
        {nonTechEvents.map(event => (
          <NeonCard key={event.id} description={event.description} heading={event.heading} />
        ))}
      </div>
    </div>
  );
};

export default EventSection;
