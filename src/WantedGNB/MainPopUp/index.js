import React from 'react';
import WdList from './WdList';
import './PopupMenu.scss';
const PopupMenu = ({ isPopup, onMouseLeave }) => {
  console.log(isPopup);
  return (
    <div className={isPopup ? 'popupMenu show' : 'popupMenu'}>
      <div className='overlay' onMouseLeave={onMouseLeave}>
        <div className='container'>
          <div className='row'>
            {
              [...Array(5)].map((e, i)=> <WdList key='i'/>)

            }
              
            <div className='linkList'>
              <a href='/wdlist/508' className=''>
                <h2>
                  금융<i className='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/522' className=''>
                <h2>
                  제조·생산<i className='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/532' className=''>
                <h2>
                  물류·무역<i className='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/515' className=''>
                <h2>
                  의료·제약·바이오<i className='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/10101' className=''>
                <h2>
                  교육<i className='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/521' className=''>
                <h2>
                  법률·법집행기관<i className='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/10057' className=''>
                <h2>
                  식·음료<i className='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/509' className=''>
                <h2>
                  건설·시설<i className='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/514' className=''>
                <h2>
                  공공·복지<i className='icon-arrow_right'></i>
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
