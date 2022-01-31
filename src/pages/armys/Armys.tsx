import { useArmys } from '../../hooks';

import Loading from '../../components/Loading';
import ArmyCard from '../../components/ArmyCard';

const Armys = () => {
  const { loading, armys } = useArmys();

  return (
    <section>
      <h1>Ejércitos</h1>
      <hr />

      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {loading ? (
          <Loading />
        ) : (
          armys.map((army) => <ArmyCard key={army.id} {...army} />)
        )}
      </div>
    </section>
  );
};

export default Armys;
