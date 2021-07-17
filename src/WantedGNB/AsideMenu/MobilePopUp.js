import React, { useContext } from 'react';
import { GNBContext } from '..';
import './AsideMenu.scss';

const MobilePopUp = () => {
  const store = useContext(GNBContext);
  const { isLogIn, setLogIn, isUserMenuPopup, setIsUserMenuPopup } = store;
  const logOut = () => {
    setLogIn(false);
  };

  const togglePopUp = (e) => {
    console.log('toggle');
    setIsUserMenuPopup(!isUserMenuPopup);
  };
  return (
    <div className='mobile_dropdownmenu'>
      <div className='dropdown_container'>
        <div className='iconSignup_container'>
          <i className='icon-wanted'>wanted logo</i>
          <button type='button' onClick={togglePopUp}>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z'
              ></path>
            </svg>
          </button>
        </div>
        <ul className='dropdown mobile'>
          {isLogIn ? (
            <>
              <li>
                <a href='/mywanted'>
                  <span>MY 원티드</span>
                  <div className='profilePic' style={{ backgroundImage: 'url(https://static.wanted.co.kr/images/profile_default.png)' }}></div>
                </a>
              </li>
              <li data-attribute-id='lnb' data-lnb-kind='profile'>
                <a href='/profile/matching'>프로필</a>
              </li>
            </>
          ) : (
            <li>
              <button
                type='button'
                onClick={() => {
                  setLogIn(true);
                }}
              >
                로그인
              </button>
            </li>
          )}
          <li className='_150-TtBxRIx6SDs1RXyj3X' data-attribute-id='gnb' data-gnb-kind='resume'>
            <a href='/cv'>이력서</a>
          </li>
          <li>
            <a href='/profile'>매치업</a>
          </li>
          <li>
            <a href='/referral'>추천</a>
          </li>
          <li>
            <a href='/status/applications'>지원 현황</a>
          </li>
          <li>
            <a href='https://www.wanted.co.kr/gigs/experts' target='_blank' rel='noopener noreferrer'>
              프리랜서
            </a>
          </li>
          <li className='_150-TtBxRIx6SDs1RXyj3X'>
            <a href='/salary'>직군별 연봉</a>
          </li>
          <li>
            <a href='/events'>커리어 성장</a>
          </li>
          <li className='_150-TtBxRIx6SDs1RXyj3X'>
            <a href='/dashboard'>기업 서비스</a>
          </li>
          {isLogIn && (
            <li>
              <a href='/logout' className='is-logout' onClick={logOut}>
                <span>로그아웃</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobilePopUp;
