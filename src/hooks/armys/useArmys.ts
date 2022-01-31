import { useEffect, useState } from 'react';

import Army from '../../interfaces/Army';
import getResourcesByName from '../../services/getResourcesByName';

const useArmys = () => {
  const [armys, setArmys] = useState<Army[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getResourcesByName('armys').then(({ armys }) => {
      setArmys(armys);
      setLoading(false);
    });
  }, []);

  return {
    armys,
    loading,
  };
};

export default useArmys;
