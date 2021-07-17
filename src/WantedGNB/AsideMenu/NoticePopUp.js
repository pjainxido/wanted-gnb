import React from 'react';

const NoticePopUp = () => {
  return (
    <div className='notice_popup'>
      <div className='notice_container'>
        <div className='message_container'>
          <div className='message'>
            <svg xmlns='https://www.w3.org/2000/svg' xmlnsXlink='https://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'>
              <defs>
                <path id='iqal30075a' d='M18 0h12c9.941 0 18 8.059 18 18v12c0 9.941-8.059 18-18 18H18C8.059 48 0 39.941 0 30V18C0 8.059 8.059 0 18 0z'></path>
              </defs>
              <g fill='none' fill-rule='evenodd'>
                <g transform='translate(-164 -137) translate(76 137) translate(88)'>
                  <mask id='88dadcdqdb' fill='#fff'>
                    <use xlinkHref='#iqal30075a'></use>
                  </mask>
                  <use fill='#8AA0E3' fill-opacity='.1' xlinkHref='#iqal30075a'></use>
                  <path
                    fill='#3A68F9'
                    fill-rule='nonzero'
                    d='M26.131 28.785l1.154-16.055h-6l1.154 16.055h3.692zm-1.879 7.648c1.582 0 2.868-1.285 2.868-2.835 0-1.582-1.286-2.868-2.868-2.868-1.582 0-2.835 1.286-2.835 2.868 0 1.55 1.253 2.835 2.835 2.835z'
                    mask='url(#88dadcdqdb)'
                  ></path>
                </g>
              </g>
            </svg>
            <p>알림 내역이 없습니다.<br></br>새로운 알림이 오면 알려드릴게요!</p>
          </div>
        </div>
        <div className='dropdown_desktop_triangle notice'></div>
      </div>
    </div>
  );
};

export default NoticePopUp;
