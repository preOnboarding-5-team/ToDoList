import React from 'react';

const Category = ({ array }) => {
  const length = array.length;
  const percentage = 100 / length;
  return (
    <div>
      <div className="sliderContainer">
        <span className="sliderBar" />
      </div>
    </div>
  );
};

export default Category;
