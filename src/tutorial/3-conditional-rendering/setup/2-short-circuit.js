import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  

  return (
  <>
  {/* <h1>{firstValue}</h1>
  <h1>Value: {secondValue}</h1> */}
  {/* {if() {console.log('hello')}} */}
  <h1>{text || 'jon doe'}</h1>
  <button className='btn' onClick={() => setIsError(!isError)}>toggle error</button>
  {isError && <h1>Error ...</h1>}
  {isError ? <p>there is an Error...</p> : <p><h2>There is no error</h2></p>}
  </>);

};

export default ShortCircuit;
