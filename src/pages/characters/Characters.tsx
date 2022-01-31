import { useCharacters } from '../../hooks';

import CharacterCard from '../../components/CharacterCard';
import Loading from '../../components/Loading';

const Characters = () => {
  const { loading, characters } = useCharacters();

  return (
    <section>
      <h1>Personajes</h1>
      <hr />

      <div className='card-group row row-cols-1 row-cols-md-3 g-4'>
        {loading ? (
          <Loading />
        ) : (
          characters.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))
        )}
      </div>
    </section>
  );
};

export default Characters;
