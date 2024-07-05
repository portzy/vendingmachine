import React from 'react';
import { Link } from 'react-router-dom';
import pretzels from './images/pretzels.png';

function Pretzels() {
  return (
    <div>
      <h1>pretzels</h1>
      <img src={pretzels} alt="pretzels" className="snack-img"/>
      <p>yummy!</p>
      <Link to="/">go back</Link>
    </div>
  );
}

export default Pretzels;
