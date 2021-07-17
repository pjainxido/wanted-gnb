import React, { useContext, useState, useEffect } from 'react';
import { GNBContext } from '../index';
import ProfileBox from './ProfileBox';
import MobilePopUp from './MobilePopUp';
import NoticePopUp from './NoticePopUp';
import './AsideMenu.scss';

const AsideMenu = () => {
  const store = useContext(GNBContext);
  const { isLogIn, setLogIn, isUserMenuPopup, setIsUserMenuPopup, isNoticePopup, setIsNoticePopup, isSearchPopup, setIsSearchPopup} = store;
  const logIn = () => {
    setLogIn(true);
  };

  const toogleNoticePopup = () => {
    setIsNoticePopup(!isNoticePopup);
    if (isUserMenuPopup) {
      setIsUserMenuPopup(false);
    }
    if (isSearchPopup){
      setIsSearchPopup(false);
    }
  };

  const togglePopup = () => {
    setIsUserMenuPopup(!isUserMenuPopup);
    if (isNoticePopup) {
      toogleNoticePopup();
    }
    if (isSearchPopup){
      setIsSearchPopup(false);
    }
  };

  const toogleSearchPopup = () =>{
    setIsSearchPopup(!isSearchPopup);
    if (isNoticePopup) {
      toogleNoticePopup();
    }
    if (isUserMenuPopup) {
      setIsUserMenuPopup(false);
    }


  }

  return (
    <aside className={isLogIn ? 'asidemenu loggedIn' : 'asidemenu'}>
      <ul>
        <li>
          <button className='searchButton' type='button' onClick={toogleSearchPopup}>
            <svg xmlns='https://www.w3.org/2000/svg' xmlnsXlink='https://www.w3.org/1999/xlink' width='18' height='18' viewBox='0 0 18 18'>
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
          </button>
        </li>

        {isLogIn ? (
          [
            <li>
              <button
                onClick={toogleNoticePopup}
                type='button'
                className={isNoticePopup ? 'notiButton active' : 'notiButton'}
                data-attribute-id='gnb'
                data-gnb-kind='bell'
              >
                <svg xmlns='https://www.w3.org/2000/svg' xmlnsXlink='https://www.w3.org/1999/xlink' width='18' height='18' viewBox='0 0 18 18'>
                  <defs>
                    <path
                      id='bpnpn3yn0a'
                      d='M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z'
                    ></path>
                  </defs>
                  <g fill='none' fillRule='evenodd'>
                    <g transform='translate(-1079 -16) translate(224 7) translate(855 9)'>
                      <mask id='1dencd96ob' fill='#fff'>
                        <use xlinkHref='#bpnpn3yn0a'></use>
                      </mask>
                      <use fillRule='nonzero' stroke='currentColor' strokeWidth='.3' xlinkHref='#bpnpn3yn0a'></use>
                      <g fill='currentColor' mask='url(#1dencd96ob)'>
                        <path d='M0 0H18V18H0z'></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              {isNoticePopup && <NoticePopUp />}
            </li>,

            <ProfileBox />,
          ]
        ) : (
          <li>
            <button className='signUpButton' type='button' onClick={logIn}>
              회원가입/로그인
            </button>
          </li>
        )}
        <li className='moreVisible leftDivision' content=''>
          <a className='dashboardButton' href='/dashboard'>
            기업 서비스
          </a>
        </li>
        <li className='inmobile'>
          <button className='menuButton' type='button' data-attribute-id='gnb' data-gnb-kind='photo' onClick={togglePopup}>
            <svg xmlns='https://www.w3.org/2000/svg' xmlnsXlink='https://www.w3.org/1999/xlink' width='18' height='18' viewBox='0 0 18 18'>
              <defs>
                <path
                  id='8srz5wswoa'
                  d='M15 13.688c.31 0 .563.251.563.562 0 .31-.252.563-.563.563H3c-.31 0-.563-.252-.563-.563 0-.31.252-.563.563-.563zm0-5.25c.31 0 .563.251.563.562 0 .31-.252.563-.563.563H3c-.31 0-.563-.252-.563-.563 0-.31.252-.563.563-.563zm0-5.25c.31 0 .563.251.563.562 0 .31-.252.563-.563.563H3c-.31 0-.563-.252-.563-.563 0-.31.252-.563.563-.563z'
                ></path>
              </defs>
              <g fill='none' fillRule='evenodd' transform='translate(-337 -19) translate(337 19)'>
                <mask id='28iwa9h2ub' fill='#fff'>
                  <use xlinkHref='#8srz5wswoa'></use>
                </mask>
                <use fill='#333' fillRule='nonzero' stroke='#333' strokeWidth='.3' xlinkHref='#8srz5wswoa'></use>
                <g fill='#333' mask='url(#28iwa9h2ub)'>
                  <path d='M0 0H18V18H0z'></path>
                </g>
              </g>
            </svg>
          </button>
        </li>
      </ul>
      {isUserMenuPopup && <MobilePopUp />}
    </aside>
  );
};

export default AsideMenu;
