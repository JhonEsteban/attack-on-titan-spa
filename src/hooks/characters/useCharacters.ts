import { useEffect, useState } from 'react';

import Character from '../../interfaces/Character';
import getResourcesByName from '../../services/getResourcesByName';

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getResourcesByName('characters').then(({ characters }) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, []);

  return {
    characters,
    loading,
  };
};

export default useCharacters;
