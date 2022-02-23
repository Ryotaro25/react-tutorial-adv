import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  // int meanse order of expression after rendering
  useEffect(() => {
    //3
    console.log('useEfect');
    window.addEventListener('resize', checkSize);
    return () => {
      //2
      console.log('clean up');
      window.removeEventListener('resize', checkSize);
    }
  });
  //1
  console.log('render');
  return <>
   <h1>Window</h1>
   <h2>{size}.px</h2>
  </>;
};

export default UseEffectCleanup;
