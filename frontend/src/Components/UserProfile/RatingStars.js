import React, { useState } from 'react';

const RatingStars = ({ totalStars, initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    onRatingChange(newRating);
  };

  const getTooltipText = (index) => {
    const labels = ['Poor', 'Fair', 'Good', 'Great', 'Excellent'];
    return labels[index];
  };

  return (
    <div style={{ position: 'relative' }}>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onMouseEnter={() => setHoveredRating(index + 1)}
          onMouseLeave={() => setHoveredRating(null)}
          onClick={() => handleRatingChange(index + 1)}
          style={{
            cursor: 'pointer',
            fontSize: '24px',
            color: index < (hoveredRating !== null ? hoveredRating : rating) ? 'orange' : 'gray',
          }}
        >
          ★
          {hoveredRating === index + 1 && (
            <span
              style={{
                position: 'absolute',
                top: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                fontSize: '14px',
                color: 'black',
                backgroundColor: 'white',
                padding: '5px',
                borderRadius: '4px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                zIndex: 1,
              }}
            >
              {getTooltipText(index)}
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
