import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CharacterDetails({ characters }) {
  const { id } = useParams();

  const [character, setCharacter] = useState({});
  useEffect(() => {
    const currCharacter = characters.find(
      (character) => character.id === Number(id)
    );
    setCharacter(currCharacter);
  }, [id]);

  return (
    <>
      <h1>{character.name}</h1>
    </>
  );
}
