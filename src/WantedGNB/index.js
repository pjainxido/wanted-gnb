import React, { useState, createContext } from 'react';
import './WantedGNB.scss';
import Contents from './Contents';
import SearchPopUp from './Contents/SearchPopUp';

const GNBContext= createContext(null);

function WantedGNB() {
  const [isLogIn, setLogIn] = useState(false);
  const [isUserMenuPopup, setIsUserMenuPopup] = useState(false);
  const [isNoticePopup, setIsNoticePopup] = useState(false);
  const [isSearchPopup, setIsSearchPopup] = useState(false);
  const store = { isLogIn,  setLogIn, isUserMenuPopup, setIsUserMenuPopup, isNoticePopup, setIsNoticePopup, isSearchPopup, setIsSearchPopup };

  return (
    <GNBContext.Provider value={store}>
      <div className='wanted_gnb' role="presentation">
        <Contents/>
        {isSearchPopup && <SearchPopUp/>}
      </div>
    </GNBContext.Provider>
  );
}

export default WantedGNB;

export {GNBContext};
