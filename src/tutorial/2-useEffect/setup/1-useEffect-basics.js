import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //パターン1
  console.log('レンダリングの度に呼び出し');

  //パターン2
  useEffect(() => {
    console.log('初回レンダリング時のみ呼び出し');
  }, [])

  //パターン3
  useEffect(() => {
    console.log('valueが更新される度に呼び出し');
  }, [value]);

  //state更新するためのボタン
  return (
  <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}>クリック</button>
  </>
  );
};

export default UseEffectBasics;
