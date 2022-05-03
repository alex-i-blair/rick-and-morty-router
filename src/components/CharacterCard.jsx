import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import CharacterDetails from '../views/CharacterDetails';

export default function CharacterCard({ character }) {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <li>{character.name}</li>
    </div>
  );
}
