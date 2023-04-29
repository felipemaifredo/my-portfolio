//Imports
import './Library-style.css'
import { BsCodeSlash } from "react-icons/bs";

import React, { useRef, useState, useEffect } from 'react';

import { AiOutlineArrowLeft } from "react-icons/ai";


function Library() {

    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
      handleContainerResize();
    }, []);

    useEffect(() => {
      window.addEventListener('resize', handleContainerResize);
      return () => {
        window.removeEventListener('resize', handleContainerResize);
      };
    }, []);

    const handleNextClick = () => {
      containerRef.current.scrollLeft += containerWidth / 2;
    };

    const handlePrevClick = () => {
      containerRef.current.scrollLeft -= containerWidth / 2;
    };

    const handleContainerResize = () => {
      const containerDimensions = containerRef.current.getBoundingClientRect();
      setContainerWidth(containerDimensions.width);
    };

    const RenderCard = ( classAnimation, Title, span1, span2, span3, span4, link) => {
      return(
      <div className="card">
        <div className='card-box-animation'>
          <span className={classAnimation}>
            {span1 ? <span></span> : ''}
            {span2 ? <span></span> : ''}
            {span3 ? <span></span> : ''}
            {span4 ? <span></span> : ''}
          </span>
        </div>
        <div className='card-box-title'>
          <h3> {Title} </h3>
        </div>
        <div className='card-box-btns'>
          <button>
            <BsCodeSlash />
          </button>
        </div>
      </div>
    )}

    return (
      <div id="Library">
        <div className='loadings-section'>
          <button className='Navigation-btn-left' onClick={handlePrevClick}> <AiOutlineArrowLeft /> </button>
          <button className='Navigation-btn-right' onClick={handleNextClick}> <AiOutlineArrowLeft /> </button>
          <div className='container' ref={containerRef} onLoad={handleContainerResize} onResize={handleContainerResize}>
            {RenderCard('loading-1', 'Animação 1')}
            {RenderCard('loading-2', 'Animação 2')}
            {RenderCard('loading-3', 'Animação 3')}
            {RenderCard('loading-4', 'Animação 4', true, true, true, true)}
          </div>
        </div>
      </div>
    );
}
  
export default Library;