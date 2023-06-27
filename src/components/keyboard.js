import Button from "./button";


function Keyboard ({ onButtonClick }) {
    const letras = [
        'QWERTYUIOP',
        'ASDFGHJKLÑ',
        'ZXCVBNM'
    ];
  
    return (
        <div className="keyboard">
           {letras.map((row, rowIndex) => (
              <div key={rowIndex} className="keyboard-row">
                   {row.split("").map((letter, index) => (
                      <Button
                        key={index}
                        text={letter}
                        onClick={() => onButtonClick(letter)}
                      />
                    ))
            }
               </div>
            ))
           }
              <div className="keyboard-bottom">
                 <Button text="Espacio" onClick={() => onButtonClick(" ")} />
                 <Button text="Borrar" onClick={() => onButtonClick("borrar")} />
             </div>
       </div>
    );
}


export default Keyboard;