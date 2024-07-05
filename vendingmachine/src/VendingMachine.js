import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div>
      <h1>vending machine!</h1>
      <h3>choose a snack:</h3>
      <ul>
        <li><Link to="/snack1">cheez-its</Link></li>
        <li><Link to="/snack2">doritos</Link></li>
        <li><Link to="/snack3">pretzels</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;
