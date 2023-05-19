import React from 'react'
import './Main.css'
import { useState } from 'react';
export const Main = () => {
   
  const [showAccountNumber, setShowAccountNumber] = useState(false);

  const toggleAccountNumber = () => {
    setShowAccountNumber(!showAccountNumber);
  };

  return (
    <div>
      <table>
        <thead>
          <th className = "th">
            <td>Account Information:</td>
            </th>
            </thead>
        <tbody>
          <tr><td>Balance: </td> <td> $1,000,000</td></tr>
          <tr><td>Interest: </td> <td> 0.0% </td></tr>
          
          {showAccountNumber && (
            <tr>
              <td>Account Number:</td>
              <td>11-1234</td>
            </tr>
          )}
        </tbody>
      </table>
      <p> <button onClick={toggleAccountNumber}>
        {showAccountNumber ? 'Hide' : 'Show'}   Account 
      </button> </p>
      
    </div>
  );
};
export default Main;
//     </div>




 

