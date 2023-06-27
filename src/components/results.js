import { useState } from 'react';
import Keyboard from './keyboard';

function Results() {
    const [value, setValue] = useState('');

    const handleButtonClick = (buttonValue) => {
      if (buttonValue === 'borrar') {
        setValue(value.slice(0, -1));
      } else {
        setValue(value + buttonValue);
        }
    }
    return (
        <div className="result">
          <input type="text" value={value} readOnly />
          <Keyboard onButtonClick={handleButtonClick} />
        </div>
    );
}



export default Results;