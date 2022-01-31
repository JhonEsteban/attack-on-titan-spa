import { useWalls } from '../../hooks';

import Loading from '../../components/Loading';
import WallCard from '../../components/WallCard';

const Walls = () => {
  const { loading, walls } = useWalls();

  return (
    <section>
      <h1>Muros</h1>
      <hr />

      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {loading ? (
          <Loading />
        ) : (
          walls.map((wall) => <WallCard key={wall.id} {...wall} />)
        )}
      </div>
    </section>
  );
};

export default Walls;
