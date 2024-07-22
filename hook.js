import { useEffect, useState } from 'react';
import { fetchCharacters } from '../api/characters';

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
    };
    fetchData();
  }, []);

  return characters;
};

export default useCharacters;
