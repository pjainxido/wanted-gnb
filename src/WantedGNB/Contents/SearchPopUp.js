import React, { useContext, useEffect } from 'react';
import './SearchPopUp.scss';
import { GNBContext } from '..';

const SearchPopUp = () => {
  const store = useContext(GNBContext);
  const closeSearchPopUp = () => {
    store.setIsSearchPopup(false);
  };
  const clickFormCheck = (e) => {
    if (e.target.nodeName !== 'INPUT' && e.target.nodeName !== 'BUTTON') {
      closeSearchPopUp();
    }
  };
  useEffect(() => {
    window.addEventListener('click', clickFormCheck, false);
    return () => window.removeEventListener('click', clickFormCheck);
  }, []);

  return (
    <div className='search_popup'>
      <div className='search_container'>
        <form role='presentation' action='.'>
          <input type='search' placeholder='#태그, 회사, 포지션 검색' autocomplete='off'></input>
          <svg className='searchIcon' xmlns='https://www.w3.org/2000/svg' xmlnsXlink='https://www.w3.org/1999/xlink' width='18' height='18' viewBox='0 0 18 18'>
            <defs>
              <path
                id='qt2dnsql4a'
                d='M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z'
              ></path>
            </defs>
            <g fill='none' fillRule='evenodd'>
              <use fill='#333' fillRule='nonzero' stroke='#333' strokeWidth='.3' xlinkHref='#qt2dnsql4a'></use>
            </g>
          </svg>
          <button className='exitButton' type='button' onClick={closeSearchPopUp}>
            <svg width='24' height='24'>
              <path
                fill='currentColor'
                d='M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z'
              ></path>
            </svg>
          </button>
        </form>
        <div className='recommend'>
          <div className='recommand_container'>
            <h4>추천태그로 검색해보세요</h4>
            <a href='/tag_search' class='goCompanyTag' data-attribute-id='search__goCompanyTag'>
              기업태그 홈 이동하기
              <svg width='12' height='12' viewBox='0 0 12 12'>
                <path
                  fill='currentColor'
                  d='M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z'
                ></path>
              </svg>
            </a>
            <ul class='tagList'>
              <li class='tagListItem'>
                <button class='_3dAEjC_3V89KiWKlRYPTp_  undefined' type='button'>
                  #차량지원
                </button>
              </li>
              <li class='tagListItem'>
                <button class='_3dAEjC_3V89KiWKlRYPTp_  undefined' type='button'>
                  #퇴사율5%이하
                </button>
              </li>
              <li class='tagListItem'>
                <button class='_3dAEjC_3V89KiWKlRYPTp_  undefined' type='button'>
                  #맥주
                </button>
              </li>
              <li class='tagListItem'>
                <button class='_3dAEjC_3V89KiWKlRYPTp_  undefined' type='button'>
                  #유연근무
                </button>
              </li>
              <li class='tagListItem'>
                <button class='_3dAEjC_3V89KiWKlRYPTp_  undefined' type='button'>
                  #연봉상위2~5%
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className='dim' onClick={closeSearchPopUp}></div>
      </div>
    </div>
  );
};

export default SearchPopUp;
