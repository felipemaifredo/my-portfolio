//Imports
import './changecolor.style.css';
import { useState, useEffect } from 'react';

const ChangeColor = () => {
    const [color, setColor] = useState(localStorage.getItem('color') || 'green');
    const [colorDestaque, setColorDestaque] = useState('')
    const [colorActive, setColorActive] = useState(false);

    useEffect(() => {
        document.body.setAttribute('data-color', `t-${color}`);
        setColorDestaque(color);
    }, [color]);

    const handleChangeColor = (colorSelected) => {
        document.body.setAttribute('data-color', `t-${colorSelected}`);
        localStorage.setItem('color', colorSelected);
        setColor(colorSelected)
        setColorDestaque(colorSelected);
    };

    const handleChangeContainerColors = () => {
        colorActive ? setColorActive(false) : setColorActive(true);
    };

    return(
        <div id='change-color'>
            <button id='btn-changecolor' onClick={handleChangeContainerColors}>
                <span className={`span-color span-color-${colorDestaque}`}></span>
            </button>
            <div className={ colorActive ? 'colors-container colors-container-activate' : 'colors-container' }>
                <span className='span-color span-color-green'
                    onClick={() => { handleChangeColor('green') }}>
                </span>
                <span className='span-color span-color-red' 
                    onClick={() => { handleChangeColor('red') }}>
                </span>
                <span className='span-color span-color-pink' 
                    onClick={() => { handleChangeColor('pink') }}>
                </span>
            </div>
        </div>
    );
};

export default ChangeColor;