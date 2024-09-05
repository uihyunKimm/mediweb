import React, { useState } from 'react';
import PropTypes from 'prop-types';

const menuItems = [
  {
    title: 'about',
    links: [
      { name: '회사소개', href: '#' },
      { name: '회사연혁', href: '#' },
      { name: '오시는 길', href: '#' }
    ]
  },
  {
    title: 'science',
    links: [
      { name: '과학', href: '#' },
      { name: '수학', href: '#' }
    ]
  },
  {
    title: 'service',
    links: [
      { name: '과학', href: '#' },
      { name: '수학', href: '#' }
    ]
  },
  {
    title: 'esg',
    links: [
      { name: '사내소식', href: '#' }
    ]
  },
  {
    title: 'contact',
    links: [
      { name: '공지사항', href: '#' },
      { name: '문의사항', href: '#' }
    ]
  }
];
// NavButton 컴포넌트: 메뉴 버튼을 담당합니다.
const NavButton = ({ active, onClick }) => {
  return (
    <div
      className={`absolute top-1/2 right-52 z-50 -translate-y-1/2 w-12 h-7 cursor-pointer transition-all duration-300 ease-in-out max-xl:right-12 max-md:hidden
        before:bg-white before:block before:absolute before:left-0 before:top-1 before:z-10 before:w-full before:h-0.5 before:transition-width before:duration-500 before:delay-75
        after:top-4 after:bg-white after:block after:absolute after:left-0 after:z-10 after:w-full after:h-0.5 after:transition-width after:duration-500 after:delay-75
        ${active ? 'before:right-0 before:top-1/2 before:rotate-45 after:top-1/2 after:-rotate-45' : ''}`}
      onClick={onClick}
    >
      <span></span>
    </div>
  );
};

// propTypes를 통해 PropTypes 정의
NavButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

// NavMenu 컴포넌트: 메뉴와 애니메이션을 관리합니다.
const NavMenu = ({ active }) => {
  const topValues = ["top-0", "top-1/5", "top-2/5", "top-3/5", "top-4/5"]; // 미리 정의된 top 값

  return (
    <div
      className={`fixed top-0 left-0 z-0 w-full h-dvh text-white bg-black/10 backdrop-blur-sm transition-transform duration-[400ms] ease-in-out
        ${active ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="absolute top-0 right-0 z-0 w-1/2 h-lvh">
          {/* {topValues.map((topClass, index) => (
            <div
              key={index}
              className={`right-0 w-0 h-1/5 absolute transition-[width] duration-1000 ease-in-out delay-${index * 100} ${topClass} ${active ? 'w-full' : ''} bg-primary`}
            >
              <div className="before:block before:content-[''] before:absolute before:-top-[5%] before:-left-[5%] before:-z-1 before:h-110% before:w-110% bg-primary"></div>
            </div>
          ))} */}
        <div className={`right-0 w-0 h-1/4 absolute transition-[width] duration-700 ease-in-out delay-0 top-0 ${active ? 'w-full bg-primary' : 'bg-primary duration-500'}
        before:block before:content-[""] before:absolute before:-top-[5%] before:-left-[5%] before:-z-1 before:h-110% before:w-110%'`}></div>
        <div className={`right-0 w-0 h-1/4 absolute transition-[width] duration-700 ease-in-out delay-[200ms] top-1/4 ${active ? 'w-full bg-primary' : 'bg-primary duration-500'}
        before:block before:content-[""] before:absolute before:-top-[5%] before:-left-[5%] before:-z-1 before:h-110% before:w-110% bg-primary'`}></div>
        <div className={`right-0 w-0 h-1/4 absolute transition-[width] duration-700 ease-in-out delay-[400ms] top-2/4 ${active ? 'w-full bg-primary' : 'bg-primary duration-500'}
        before:block before:content-[""] before:absolute before:-top-[5%] before:-left-[5%] before:-z-1 before:h-110% before:w-110% bg-primary'`}></div>
        <div className={`right-0 w-0 h-1/4 absolute transition-[width] duration-700 ease-in-out delay-[600ms] top-3/4 ${active ? 'w-full bg-primary' : ''}
        before:block before:content-[""] before:absolute before:-top-[5%] before:-left-[5%] before:-z-1 before:h-110% before:w-110% bg-primary'`}></div>
      </div>
      <ul className='block absolute z-2 left-[55%] top-[19%] m-0 p-0 list-none text-white '>
        {menuItems.map((item, index) => (
          <li key={index} className='overflow-hidden list-item group'>
            <a href="#" className={`inline-block text-7xl uppercase tracking-tight leading-snug transition-transform duration-[800ms] ease-in-out ${active ? ' translate-y-0 delay-[500ms]' : 'translate-y-full'}`}>
              <span className='group-hover:block group-hover:transition-all group-hover:duration-500 group-hover:delay-300 group-hover:ease-in-out group-hover:content-[""] group-hover:translate-x-20'>
                {/* <em className='block content-[""] absolute left-0 top-1/2 z-10 w-16 h-1.5 origin-right bg-white scale-x-0 duration-300 ease-in-out
                before:w-1.5 before:h-10 before:origin-[0%_100%] before:-rotate-90 before:content-[""] before:absolute before:-right-1 before:bottom-0 before:transition-transform before:bg-white before:duration-500 before:z-20
                after:w-10 after:h-1 after:origin-[100%_0%] after:rotate-0 after:content-[""] after:transition-transform after:-right-1 after:bottom-0 after:-scale-x-1 after:bg-white after:duration-500 after:z-20'></em> */}
                {item.title}
              </span>
              <em className='group-hover:block group-hover:content-[""] group-hover:absolute group-hover:left-0 group-hover:top-2/3 group-hover:delay-500 group-hover:z-10 group-hover:w-16 group-hover:h-1.5 group-hover:origin-right group-hover:bg-white group-hover:scale-x-1 group-hover:duration-300 group-hover:delay-00 group-hover:ease-in-out'></em>
              </a>
          </li>
        ))}
      </ul>
      <p className='block absolute left-[55%] bottom-10 z-10 font-medium text-base leading-5 m-0 p-0 break-all'>(c) KUH responsive design</p>
    </div>
  );
};

// propTypes를 통해 PropTypes 정의
NavMenu.propTypes = {
  active: PropTypes.bool.isRequired,
};

// Header 컴포넌트: NavButton과 NavMenu를 통합하여 관리합니다.
const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    setActiveMenu((prev) => !prev);
  };

  return (
    <header className='box-border block top-auto fixed w-full z-20 text-base'>
      <div className='block'> {/* wrapper */}
        <div className='flex relative items-center w-full h-20 p-[0.12%] xl:p-[0.5%]'>
          {/* logo */}
          <div>
            <a href="/">Logo</a>
          </div>

          {/* 상단메뉴 */}
          <ul className='block absolute left-1/2 top-1/2 w-max m-0 p-0 -translate-y-1/2 -translate-x-1/2 list-none max-md:hidden text-white'>
            {menuItems.map((item, index) => (
              <li key={index} className='relative float-left py-0 px-9 leading-[4.5rem]'>
                <a href="#" className='block'>{item.title}</a>
                <ul className='hidden'>
                  {item.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* 메뉴 버튼 */}
          <NavButton active={activeMenu} onClick={toggleMenu} />

          {/* 네비게이션 메뉴 */}
          <NavMenu active={activeMenu} />
        </div>

        {/* 반응형 메뉴 관련 추가 요소 */}
        <div className='block w-full p-4'>
          {/* 반응형 관련 요소들 */}
        </div>
      </div>
    </header>
  );
};

export default Header;
