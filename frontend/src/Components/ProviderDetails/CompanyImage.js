import React, { useState } from "react";
import "./CompanyImage.css"; // You can define your own CSS styles

const CompanyImage = ({ companyImage }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const captions = [
      'Caption 1',
      'Caption 2',
      'Caption 3' // Add more captions if needed
    ];
  
    const plusSlides = (n) => {
      setSlideIndex((prevIndex) => (prevIndex + n + companyImage?.length) % companyImage?.length);
    };
  
    const currentSlide = (n) => {
      setSlideIndex(n);
    };
  
  return (
    <>
      <>
      <div className="container">
      {companyImage?.map((imagePath, index) => (
          <div
          key={index}
          className={`mySlides ${slideIndex === index ? 'active' : ''}`}
          > 
          <div className="numbertext">
            {index + 1} / {companyImage?.length}
          </div>
          <img  src={`http://localhost:5550/${imagePath}`} style={{ maxWidth: '100%'  }} alt={captions[index]} />
        </div>
      ))}

      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>

      <div className="caption-container">
        {/* <p id="caption">{captions[slideIndex]}</p> */}
      </div>

      <div className="row pt-1">
        {companyImage?.map((imagePath, index) => (
          <div
            key={index}
            className={`column ${slideIndex === index ? 'active' : ''}`}
          >
            <img
              className="demo cursor"
              src={`http://localhost:5550/${imagePath}`}
              style={{ width: '100%' }}
              onClick={() => currentSlide(index)}
              alt={captions[index]}
            />
          </div>
        ))}
      </div>
    </div>
      </>
    </>
  );
};

export default CompanyImage;
