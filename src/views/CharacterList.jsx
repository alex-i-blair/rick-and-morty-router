import { useState, useEffect } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import CharacterDetails from './CharacterDetails';
import styles from '../../App.css';

export default function CharacterList({ id = null }) {
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
      <h1>Rick and Morty</h1>
      {loading ? (
        <img
          src="https://thumbs.gfycat.com/SoftEarnestGyrfalcon-max-1mb.gif"
          alt="spinner"
          width="100px"
        />
      ) : (
        <>
          <main>
            <section className={styles.listContainer}>
              <h3>Characters</h3>
              <section className={styles.characterList}>
                {characters.map((character) => (
                  <CharacterCard key={character.id} character={character} />
                ))}
              </section>
            </section>
            <section className={styles.detailPage}>
              <Route path={`${path}/:id`}>
                <CharacterDetails characters={characters} />
              </Route>
            </section>
          </main>
        </>
      )}
    </>
  );
}
