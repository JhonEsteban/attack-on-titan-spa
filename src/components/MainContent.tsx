import { ReactNode } from 'react';

import Navbar from './Navbar';

type Props = {
  children: ReactNode;
};

const MainContent = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className='container my-3'>{children}</main>
    </>
  );
};

export default MainContent;
