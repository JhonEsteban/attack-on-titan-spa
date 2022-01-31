import { useEffect, useState } from 'react';

import Wall from '../../interfaces/Wall';
import getResourceById from '../../services/getResourceById';

const useSingleWall = (wallId: string) => {
  const [wall, setWall] = useState<Wall[]>([]);
  const [loading, setLoading] = useState(true);

  const [wallData] = wall;

  useEffect(() => {
    getResourceById('walls', wallId).then(({ wall }) => {
      setWall(wall);
      setLoading(false);
    });
  }, [wallId]);

  return { loading, wallData };
};

export default useSingleWall;
