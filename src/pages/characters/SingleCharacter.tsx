import { useNavigate, useParams } from 'react-router-dom';

import { useSingleCharacter } from '../../hooks';

import Loading from '../../components/Loading';

const SingleCharacter = () => {
  const navigate = useNavigate();

  const { characterId = '' } = useParams();
  const { loading, characterData } = useSingleCharacter(characterId);

  if (!characterId) {
    navigate('/characters');
  }

  const goBack = () => {
    navigate('/characters');
  };

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className='mb-3'>{characterData.name}</h1>

          <div className='row'>
            <div className='col-md-4'>
              <img
                src={characterData.avatar}
                alt={characterData.name}
                title={characterData.name}
                width='345'
                className='img-thumbnail'
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

            <div className='col-md-8'>
              <h3>Información</h3>
              <hr />

              <p>{characterData.description}</p>

              <img
                src={characterData.armyImage}
                alt={characterData.name}
                title={`Logo de la ${characterData.typeOfArmy}`}
                width='120'
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default SingleCharacter;
