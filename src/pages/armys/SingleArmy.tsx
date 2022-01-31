import { useNavigate, useParams } from 'react-router-dom';

import { useSingleArmy } from '../../hooks';

import Loading from '../../components/Loading';

const SingleArmy = () => {
  const navigate = useNavigate();

  const { armyId = '' } = useParams();
  const { loading, armyData } = useSingleArmy(armyId);

  if (!armyId) {
    navigate('/armys');
  }

  const goBack = () => {
    navigate('/armys');
  };

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='row'>
            <div className='col-md-4 text-center'>
              <h1 className='mb-3'>{armyData.name}</h1>

              <img
                src={armyData.image}
                alt={armyData.name}
                title={armyData.name}
                width='220'
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

              <p>{armyData.description}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default SingleArmy;
