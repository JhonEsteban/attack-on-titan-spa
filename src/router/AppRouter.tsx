import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainContent from '../components/MainContent';

import Characters from '../pages/characters/Characters';
import SingleCharacter from '../pages/characters/SingleCharacter';

import Walls from '../pages/walls/Walls';
import SingleWall from '../pages/walls/SingleWall';

import Armys from '../pages/armys/Armys';
import SingleArmy from '../pages/armys/SingleArmy';

const AppRouter = () => {
  return (
    <HashRouter>
      <MainContent>
        <Routes>
          <Route path='/characters' element={<Characters />} />
          <Route path='/character/:characterId' element={<SingleCharacter />} />

          <Route path='/walls' element={<Walls />} />
          <Route path='/wall/:wallId' element={<SingleWall />} />

          <Route path='/armys' element={<Armys />} />
          <Route path='/army/:armyId' element={<SingleArmy />} />

          <Route path='*' element={<Navigate to='/characters' />} />
        </Routes>
      </MainContent>
    </HashRouter>
  );
};

export default AppRouter;
