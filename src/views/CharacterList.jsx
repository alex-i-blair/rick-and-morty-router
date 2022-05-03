import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';

export default function CharacterList() {
  const { url, path } = useRouteMatch();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await res.json();
      setCharacters(results);
      setLoading(false);
    };
    getCharacters();
  }, []);

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      {loading ? (
        <img
          src="https://thumbs.gfycat.com/SoftEarnestGyrfalcon-max-1mb.gif"
          alt="spinner"
          width="100px"
        />
      ) : (
        <>
          <ul>
            {characters.map((character) => (
              <li key={character.id}>
                <Link to={`/characters/${character.id}`}>{character.name}</Link>
              </li>
            ))}
          </ul>
          <Route path={`${path}/:id`}>
            <CharacterDetails characters={characters} />
          </Route>
        </>
      )}
    </>
  );
}
