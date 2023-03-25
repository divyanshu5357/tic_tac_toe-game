import React from 'react';
import './Scroller.css';
import Card from './Card';

const Scroller = ({cards}) => {
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 300;
  };

  return (
    <div className="scroller">
      <div className="scroll-buttons">
        <button onClick={scrollLeft}>Left</button>
        <button onClick={scrollRight}>Right</button>
      </div>
      <div className="card-container" ref={scrollRef}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Scroller;
