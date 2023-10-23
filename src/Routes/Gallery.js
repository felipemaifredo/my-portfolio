//Imports
import { useEffect } from 'react';
import './Styles/gallery.style.css'

const Gallery = () => {

    useEffect(() => {
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
          });
        };
        scrollToTop();
    });
    
    return (
        <div id="gallery">
            <p>Hello Word</p>
        </div>
    )
}

export default Gallery;