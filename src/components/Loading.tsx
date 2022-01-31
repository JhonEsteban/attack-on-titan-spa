const Loading = () => {
  return (
    <div className='col text-center w-100 mt-5'>
      <div>
        <div className='spinner-grow m-2' role='status'>
          <span className='visually-hidden'>Cargando...</span>
        </div>

        <div className='spinner-grow m-2' role='status'>
          <span className='visually-hidden'>Cargando...</span>
        </div>

        <div className='spinner-grow m-2' role='status'>
          <span className='visually-hidden'>Cargando...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
