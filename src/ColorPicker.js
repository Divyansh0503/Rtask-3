import React, { useState } from 'react';
import './ColorPicker.css'
const ColorPicker = () => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const colors = ['lightsalmon','rosybrown','gainsboro','bisque','tan', 'skyblue', 'darkseagreen', 'lightsteelblue', 'mediumorchid', '	sandybrown'];

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="color-picker">
      <h1>Color Picker</h1>
      
      <div className="result" style={{ backgroundColor: backgroundColor }}>
        <div className="color-list">

        {colors.map((color, index) => (
           <div
            key={index}
            className="color-option"
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          >
          </div>
        ))}
        
        </div>
        <button className='pickButton'>Color picked : {backgroundColor}</button>
    </div>

    </div>
  );
};

export default ColorPicker;






