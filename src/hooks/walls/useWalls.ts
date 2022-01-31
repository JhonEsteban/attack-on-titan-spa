import { useEffect, useState } from 'react';

import Wall from '../../interfaces/Wall';
import getResourcesByName from '../../services/getResourcesByName';

const useWalls = () => {
  const [walls, setWalls] = useState<Wall[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getResourcesByName('walls').then(({ walls }) => {
      setWalls(walls);
      setLoading(false);
    });
  }, []);

  return {
    walls,
    loading,
  };
};

export default useWalls;
