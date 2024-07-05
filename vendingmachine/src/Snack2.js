import React from 'react';
import { Link } from 'react-router-dom';
import doritos from './images/doritos.png';

function Doritos() {
  return (
    <div>
      <h1>doritos</h1>
      <img src={doritos} alt="doritos" className="snack-img"/>
      <p>yummy!</p>
      <Link to="/">go back</Link>
    </div>
  );
}

export default Doritos;
