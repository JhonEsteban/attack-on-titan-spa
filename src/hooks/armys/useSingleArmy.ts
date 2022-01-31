import { useEffect, useState } from 'react';

import Army from '../../interfaces/Army';
import getResourceById from '../../services/getResourceById';

const useSingleWall = (armyId: string) => {
  const [army, setArmy] = useState<Army[]>([]);
  const [loading, setLoading] = useState(true);

  const [armyData] = army;

  useEffect(() => {
    getResourceById('armys', armyId).then(({ army }) => {
      setArmy(army);
      setLoading(false);
    });
  }, [armyId]);

  return { loading, armyData };
};

export default useSingleWall;
