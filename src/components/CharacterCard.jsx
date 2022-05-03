import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import CharacterDetails from '../views/CharacterDetails';

export default function CharacterCard({ character }) {
  const { url, path } = useRouteMatch();
  return (
    <Link to={`${url}/${character.id}`}>
      <li>{character.name}</li>
    </Link>
  );
}
