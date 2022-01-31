import { useNavigate } from 'react-router-dom';

import Character from '../interfaces/Character';

const CharacterCard = ({ id, avatar, name, typeOfArmy }: Character) => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate(`/character/${id}`);
  };

  return (
    <div className='col'>
      <article className='card'>
        <img
          src={avatar}
          alt={name}
          title={name}
          width='354'
          height='314'
          style={{ objectFit: 'cover' }}
          className='card-img-top'
        />

        <div className='card-body'>
          <h3 className='card-title'>{name}</h3>
          <p className='card-text'>{typeOfArmy}</p>
        </div>

        <div className='d-grid gap-2 p-2'>
          <button
            onClick={handleButton}
            className='btn btn-outline-primary btn-block'
            type='button'
          >
            Ver más
          </button>
        </div>
      </article>
    </div>
  );
};

export default CharacterCard;
