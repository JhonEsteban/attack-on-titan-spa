import { useNavigate } from 'react-router-dom';

import Army from '../interfaces/Army';

const ArmyCard = ({ id, name, image }: Army) => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate(`/army/${id}`);
  };

  return (
    <div className='col'>
      <article className='card'>
        <img
          src={image}
          alt={name}
          title={name}
          width='180'
          max-height='220'
          className='m-auto'
        />

        <div className='card-body'>
          <h3 className='card-title text-center'>{name}</h3>
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

export default ArmyCard;
