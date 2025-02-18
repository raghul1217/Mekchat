import React from 'react';
import NeonCard from '../components/NeonCard';
import '../styles/neoncard.css';

const EventSection = () => {
  const techEvents = [
    { id: 1, description: 'Participants must present their PPTs to the juries within 5 minutes. They can choose to present in one stream only: Thermal, Design, or Manufacturing.', heading: 'Paper Presentation' },
    { id: 2, description: 'Engineering quiz featuring basic to advanced questions, timed answering, and a self-buzzer round for top performers to test knowledge and speed.', heading: 'Tech Quiz' },
    { id: 3, description: 'Welding quiz featuring basic questions and a practical round for qualifiers to complete a welding task within 5 minutes, testing knowledge and skill.', heading: 'Spark Masters' },
    { id: 4, description: 'Logo identification quiz followed by a self-buzzer round on \'Connection\' questions for top performers, testing brand recognition, logic, and quick thinking.',  heading: 'Mech Bermuda' },
    { id: 5, description: 'Manufacturing quiz with basic questions followed by a practical round where participants perform machining operations on a Lathe within a set time.', heading: 'Mr. Lathe' },
    { id: 6, description: 'Engineering Graphics quiz with basic questions followed by a practical round where participants create a design in CATIA within a set time.', heading: 'CAD Modelling' },
    { id: 7, description: 'G code and M code quiz with basic questions followed by a practical round where participants write and simulate code within a set time.', heading: 'CNC Conclave' },
    { id: 8, description: 'Automobile engineering quiz followed by a practical round where participants assemble a partially dismantled part in minimal time.', heading: 'Auto Assembly' },
    { id: 9, description: 'Spelling quiz with easier words in Round 1, followed by harder words in Round 2, where participants spell words based on images.', heading: 'Spell Bee' },
  ];

  const nonTechEvents = [
    { id: 1, description: 'Participants create memes based on college or engineering student scenarios, with the best memes selected by the jury.', heading: 'Meme-Mania' },
    { id: 2, description: 'Participants submit raw, unedited photos related to mechanical engineering, showcasing their photography skills; editing leads to disqualification.', heading: 'Pixelate Mech' },
    { id: 3, description: 'Participants create a poster on "Current Trends in Mechanical Engineering" using their preferred software (e.g., Hybrid Vehicles, IoT).', heading: 'Poster Making' },
    { id: 4, description: 'Participants are split into teams and they are given an initial clue. Solving the chain of clues will lead their team to the final prize.', heading: 'Treasure Hunt' },
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
