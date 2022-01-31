import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/characters'>
          <img
            src='https://i.imgur.com/MZKVjO6.png'
            width='200'
            alt='Attack On Titan Logo'
            title='Attack On Titan Logo'
          />
        </NavLink>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/characters'>
                Personajes
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink className='nav-link' to='/walls'>
                Muros
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink className='nav-link' to='/armys'>
                Ejércitos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
