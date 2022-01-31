import { useNavigate, useParams } from 'react-router-dom';

import { useSingleWall } from '../../hooks';

import Loading from '../../components/Loading';
import DistrictCard from '../../components/DistrictCard';

const SingleWall = () => {
  const navigate = useNavigate();

  const { wallId = '' } = useParams();
  const { loading, wallData } = useSingleWall(wallId);

  if (!wallId) {
    navigate('/walls');
  }

  const goBack = () => {
    navigate('/walls');
  };

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='row'>
            <div className='col-md-4 text-center'>
              <h1 className='mb-3'>{wallData.name}</h1>

              <img
                src={wallData.image}
                alt={wallData.name}
                title={wallData.name}
                width='200'
              />

              <div className='d-grid gap-2 p-2'>
                <button
                  onClick={goBack}
                  className='btn btn-outline-danger btn-block'
                  type='button'
                >
                  Regresar
                </button>
              </div>
            </div>

            <div className='col-md-8 mt-5'>
              <h3>Información</h3>
              <hr />

              <p>{wallData.description}</p>

              <div className='mt-4'>
                <h3>Distritos:</h3>

                {wallData.districts.map((districName) => (
                  <DistrictCard key={districName} districName={districName} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default SingleWall;
