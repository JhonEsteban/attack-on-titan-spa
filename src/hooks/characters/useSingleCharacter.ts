import { useEffect, useState } from 'react';

import Character from '../../interfaces/Character';
import getResourceById from '../../services/getResourceById';

const useSingleCharacter = (characterId: string) => {
  const [character, setCharacter] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  const [characterData] = character;

  useEffect(() => {
    getResourceById('characters', characterId).then(({ character }) => {
      setCharacter(character);
      setLoading(false);
    });
  }, [characterId]);

  return { loading, characterData };
};

export default useSingleCharacter;
