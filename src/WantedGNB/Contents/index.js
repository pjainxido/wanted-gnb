import React, { useState, useContext } from 'react';
import { GNBContext } from '../';
import BetaSVG from '../BetaSVG';
import MainPopUp from '../MainPopUp';
import AsideMenu from '../AsideMenu';
import '../WantedGNB.scss';

const Contents = () => {
  const [isPopup, setIsPopup] = useState(false);
  const store = useContext(GNBContext);

  return (
    <div className={store.isLogIn ? 'contents isLogIn' : 'contents'}>
      <nav className='gnb'>
        <div className='logo_signup_container'>
          <a href='/' className='logo'>
            <i className='icon'>wanted</i>
          </a>
          {!store.isLogIn && (
            <button className='signup_login' type='button' onClick={()=>{store.setLogIn(true)}}>
              회원가입하기
            </button>
          )}
        </div>
        <ul className='navBar'>
          <li className='mobileHomeButton' data-attribute-id='gnb' data-gnb-kind='home'>
            <a href='/' className='home'>
              홈
            </a>
          </li>
          <li onMouseEnter={() => setIsPopup(true)} data-attribute-id='gnb' data-gnb-kind='explore'>
            <a href='/wdlist'>탐색</a>
          </li>
          <li data-attribute-id='gnb' data-gnb-kind='event'>
            <a href='/events'>커리어 성장</a>
          </li>
          <li className='moreVisible' data-attribute-id='gnb' data-gnb-kind='salary'>
            <a href='/salary' className=''>
              직군별 연봉
            </a>
          </li>
          <li className='moreVisible' data-attribute-id='gnb' data-gnb-kind='resume'>
            <a href='/cv'>이력서</a>
          </li>
          <li className='moreVisible' data-attribute-id='gnb' data-gnb-kind='matchup'>
            <a href='/matchup/intro/'>매치업</a>
          </li>
          <li className='moreVisible' data-attribute-id='gnb' data-gnb-kind='freelancer'>
            <a href='https://www.wanted.co.kr/gigs/experts' target='_blank' rel='noopener noreferrer'>
              프리랜서
            </a>
          </li>
          <li className='moreVisible' data-attribute-id='gnb' data-gnb-kind='aiScore'>
            <a href='/aiscore/resume'>
              Ai 합격예측
              <span>
                <BetaSVG />
              </span>
            </a>
          </li>
        </ul>
        <MainPopUp isPopup={isPopup} onMouseLeave={() => setIsPopup(false)} />
        <AsideMenu />
      </nav>
    </div>
  );
};

export default Contents;
