import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from '../../App.css';

export default function CharacterCard({ character }) {
  const { url, path } = useRouteMatch();
  return (
    <Link to={`${url}/${character.id}`} style={{ textDecoration: 'none' }}>
      <div className={styles.characterCard}>
        <p>{character.name}</p>
        <img
          src={character.image}
          alt={`Image of ${character.name}`}
          title={`Image of ${character.name}`}
        />
      </div>
    </Link>
  );
}
