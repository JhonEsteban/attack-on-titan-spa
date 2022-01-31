import { useNavigate } from 'react-router-dom';

import Wall from '../interfaces/Wall';

const WallCard = ({ id, image, name }: Wall) => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate(`/wall/${id}`);
  };

  return (
    <div className='col'>
      <article className='card h-100'>
        <img src={image} alt={name} title={name} className='mt-4 m-auto' />

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

export default WallCard;
