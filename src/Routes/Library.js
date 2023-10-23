//Imports
import './Styles/library.style.css'
import { useEffect } from 'react';

const Library = () => {

    useEffect(() => {
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
          });
        };
        scrollToTop();
    });

    return (
        <div id="library">
           <p>Hello Word</p>
        </div>
    )
}

export default Library;