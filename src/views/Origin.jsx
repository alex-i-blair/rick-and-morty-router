import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Origin({ origin }) {
  return (
    <div>
      <h3>{origin.name}</h3>
      <ul>
        <li>
          <strong>Type: </strong>
          {origin.type}
        </li>
        <li>
          <strong>Dimension: </strong>
          {origin.dimension}
        </li>
        <h5>Residents:</h5>
      </ul>
    </div>
  );
}
