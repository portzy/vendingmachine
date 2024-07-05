import React from 'react';
import { Link } from 'react-router-dom';
import cheezit from './images/cheezit.png';

function CheezIt() {
  return (
    <div>
      <h1>cheez-its</h1>
      <img src={cheezit} alt="Cheez-It" className="snack-img"/>
      <p>yummy!</p>
      <Link to="/">go back</Link>
    </div>
  );
}

export default CheezIt;
