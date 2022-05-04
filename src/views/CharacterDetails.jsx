import React, { useState, useEffect } from 'react';
import {
  useParams,
  useRouteMatch,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import styles from '../../App.css';
import Origin from './Origin';

export default function CharacterDetails({ characters }) {
  const { id } = useParams();
  const { url, path } = useRouteMatch();

  const [character, setCharacter] = useState({});
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currCharacter = characters.find(
      (character) => character.id === Number(id)
    );
    setCharacter(currCharacter);
  }, [id]);

  console.log('character', character.origin?.url);

  useEffect(() => {
    const getLocation = async () => {
      if (!character.origin?.url) return;
      const res = await fetch(character.origin.url);
      const results = await res.json();
      console.log('results :>> ', results);
      setLocation(results);
      setLoading(false);
    };
    getLocation();
  }, [character.origin?.url]);
  console.log('location :>> ', location);
  return (
    <>
      <Switch>
        <Route path={`${path}/location`}>
          <Origin origin={location} />
        </Route>
        <Route path={`${path}/`}>
          <h3>{character.name}</h3>
          <div className={styles.detailCard}>
            <img src={character.image} alt="" />
            <ul>
              <li>
                <strong>Species: </strong>
                {character.species}
              </li>
              <li>
                <strong>Status: </strong>
                {character.status}
              </li>
              <li>
                <Link to={`${url}/location`} style={{ textDecoration: 'none' }}>
                  <strong>Origin: </strong>
                  {character.origin?.name}
                </Link>
              </li>
            </ul>
          </div>
        </Route>
      </Switch>
    </>
  );
}
