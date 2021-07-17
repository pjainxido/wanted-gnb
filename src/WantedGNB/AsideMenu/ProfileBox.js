import React, { useContext, useState } from 'react';
import { GNBContext } from '../index';
import './AsideMenu.scss';

const ProfileBox = () => {
  const store = useContext(GNBContext);
  const { isUserMenuPopup, setIsUserMenuPopup, setLogIn, isNoticePopup, setIsNoticePopup} = store;
  const logOut = (e) => {
    setLogIn(false);
  };

  const togglePopup = (e) => {
    console.log('toggle');
    if(isNoticePopup){
      setIsNoticePopup(false);
    }
    setIsUserMenuPopup(!isUserMenuPopup);
  };


  return (
    <li className='profileBox'>
      <button onClick={togglePopup} type='button' className='profileButton'>
        <div className={isUserMenuPopup ? 'avatarBorder Popup' : 'avatarBorder'}>
          <div className='avatarImage' style={{ backgroundImage: 'url(https://static.wanted.co.kr/images/profile_default.png)' }}></div>
        </div>
      </button>
      {isUserMenuPopup && (
        <div className='user_dropdownmenu'>
          <div className='dropdown_container'>
            <div className='icon'>
              <i className='icon-wanted-symbol'>
                <span className='path1'></span>
                <span className='path2'></span>
                <span className='path3'></span>
                <span className='path4'></span>
                <span className='path5'></span>
                <span className='path6'></span>
                <span className='path7'></span>
                <span className='path8'></span>
              </i>
              <button type='button' onClick={togglePopup}>
                <svg width='24' height='24' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z'
                  ></path>
                </svg>
              </button>
            </div>
            <ul className='dropdown desktop'>
              <li>
                <a href='/mywanted' >
                  <span>MY 원티드</span>
                </a>
              </li>
              <li>
                <a href='/profile/matching' >
                  <span>프로필</span>
                </a>
              </li>
              <li>
                <a href='/status/applications'  >
                  <span>지원 현황</span>
                </a>
              </li>
              <li>
                <a href='/profile/status' >
                  <span>제안받기 현황</span>
                </a>
              </li>
              <li>
                <a href='/profile/likes' >
                  <span>좋아요</span>
                </a>
              </li>
              <li>
                <a href='/profile/bookmarks' >
                  <span>북마크</span>
                </a>
              </li>
              <li>
                <a href='/referral'>
                  <span>추천</span>
                </a>
              </li>
              <li>
                <a href='/profile/point' >
                  <span>포인트</span>
                </a>
              </li>
              <li>
                <a onClick={logOut} href='/logout' className='is-logout' >
                  <span>로그아웃</span>
                </a>
              </li>
            </ul>
          </div>
          <div className='dropdown_desktop_triangle'></div>
        </div>
      )}
    </li>
  );
};

export default ProfileBox;
