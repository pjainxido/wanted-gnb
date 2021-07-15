import React, {useState} from 'react';
import '../WantedGNB.scss';
import BetaSVG from '../BetaSVG';
import PopupMenu from '../PopupMenu';

const Contents = () => {
  const [isPopup, setIsPopup] = useState(false);
  return (
    <div className='contents'>
      <nav className='gnb'>
        <div className='logo_signup_container'>
          <a href='/' className='logo'>
            <i className='icon'>
              logo
              </i>
          </a>
          {/* <button className='signupLogin' type='button'>
            회원가입하기
          </button> */}
        </div>
        <ul className='navBar'>
          <li className='onMobileDisplay' data-attribute-id='gnb' data-gnb-kind='home'>
            <a href='/' className='home'>
              홈
            </a>
          </li>
          <li onMouseEnter={()=>setIsPopup(true)} data-attribute-id='gnb' data-gnb-kind='explore'>
            <a href='/wdlist' >탐색</a>
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
          <li className='moreVisible'data-attribute-id='gnb' data-gnb-kind='freelancer'>
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
        <PopupMenu isPopup={isPopup} onMouseLeave={()=>setIsPopup(false)}/>
        <aside className='asideContainer'>
          <ul>
            <li>
              <button class='searchButton' type='button' data-attribute-id='gnb' data-gnb-kind='search'>
                <svg xmlns='https://www.w3.org/2000/svg' xmlnsXlink='https://www.w3.org/1999/xlink' width='18' height='18' viewBox='0 0 18 18'>
                  <defs>
                    <path
                      id='qt2dnsql4a'
                      d='M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z'
                    ></path>
                  </defs>
                  <g fill='none' fill-rule='evenodd'>
                    <use fill='#333' fill-rule='nonzero' stroke='#333' stroke-width='.3' xlinkHref='#qt2dnsql4a'></use>
                  </g>
                </svg>
              </button>
            </li>
            <li>
              <button class='signUpButton' type='button' data-attribute-id='gnb' data-gnb-kind='signupLogin'>
                회원가입/로그인
              </button>
            </li>
            <li class='smMoreVisible leftDivision' data-attribute-id='gnb' data-gnb-kind='forEmployers'>
              <a class='dashboardButton' href='/dashboard'>
                기업 서비스
              </a>
            </li>
            <li class='_33WfrN55nCu3Vs3WKDuomx'>
              <button className='menuButton' type='button' data-attribute-id='gnb' data-gnb-kind='photo'>
                <svg xmlns='https://www.w3.org/2000/svg' xmlnsXlink='https://www.w3.org/1999/xlink' width='18' height='18' viewBox='0 0 18 18'>
                  <defs>
                    <path
                      id='8srz5wswoa'
                      d='M15 13.688c.31 0 .563.251.563.562 0 .31-.252.563-.563.563H3c-.31 0-.563-.252-.563-.563 0-.31.252-.563.563-.563zm0-5.25c.31 0 .563.251.563.562 0 .31-.252.563-.563.563H3c-.31 0-.563-.252-.563-.563 0-.31.252-.563.563-.563zm0-5.25c.31 0 .563.251.563.562 0 .31-.252.563-.563.563H3c-.31 0-.563-.252-.563-.563 0-.31.252-.563.563-.563z'
                    ></path>
                  </defs>
                  <g fill='none' fill-rule='evenodd' transform='translate(-337 -19) translate(337 19)'>
                    <mask id='28iwa9h2ub' fill='#fff'>
                      <use xlinkHref='#8srz5wswoa'></use>
                    </mask>
                    <use fill='#333' fill-rule='nonzero' stroke='#333' stroke-width='.3' xlinkHref='#8srz5wswoa'></use>
                    <g fill='#333' mask='url(#28iwa9h2ub)'>
                      <path d='M0 0H18V18H0z'></path>
                    </g>
                  </g>
                </svg>
              </button>
            </li>
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Contents;
