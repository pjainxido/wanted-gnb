import React from 'react';
import './PopupMenu.scss';
const PopupMenu= ({isPopup, onMouseLeave}) => {
  console.log(isPopup);
  return (
    <div className={isPopup? 'popupMenu show' : 'popupMenu' } >
      <div className='overlay' onMouseLeave={onMouseLeave} >
        <div className='container'>
          <div className='row'>
            <div class='linkList'>
              <a href='/wdlist/508' class=''>
                <h2>
                  금융<i class='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/522' class=''>
                <h2>
                  제조·생산<i class='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/532' class=''>
                <h2>
                  물류·무역<i class='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/515' class=''>
                <h2>
                  의료·제약·바이오<i class='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/10101' class=''>
                <h2>
                  교육<i class='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/521' class=''>
                <h2>
                  법률·법집행기관<i class='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/10057' class=''>
                <h2>
                  식·음료<i class='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/509' class=''>
                <h2>
                  건설·시설<i class='icon-arrow_right'></i>
                </h2>
              </a>
              <a href='/wdlist/514' class=''>
                <h2>
                  공공·복지<i class='icon-arrow_right'></i>
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
