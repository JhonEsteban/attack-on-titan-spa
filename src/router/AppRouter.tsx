import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainContent from '../components/MainContent';

import Characters from '../pages/Characters';
import Character from '../pages/Character';
import Walls from '../pages/Walls';
import Wall from '../pages/Wall';
import Armys from '../pages/Armys';
import Army from '../pages/Army';

const AppRouter = () => {
  return (
    <HashRouter>
      <MainContent>
        <Routes>
          <Route path='/characters' element={<Characters />} />
          <Route path='/characters/:characterId' element={<Character />} />

          <Route path='/walls' element={<Walls />} />
          <Route path='/walls/:wallId' element={<Wall />} />

          <Route path='/armys' element={<Armys />} />
          <Route path='/armys/:armysId' element={<Army />} />

          <Route path='*' element={<Navigate to='/characters' />} />
        </Routes>
      </MainContent>
    </HashRouter>
  );
};

export default AppRouter;
