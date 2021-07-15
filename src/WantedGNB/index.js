import React, { useState } from 'react';
import './WantedGNB.scss';
import Contents from './Contents';

const Context = React.createContext();

function WantedGNB() {
  const [isLogIn, setLogIn] = useState(false);
  const store = { isLogIn, setLogIn };
  // const isDesktopOrMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Context.Provider value={store}>
      <div className='gnb'>
        <Contents/>
      </div>
    </Context.Provider>
  );
}

export default WantedGNB;
