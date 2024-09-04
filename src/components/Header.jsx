import React, { useState } from 'react'

function Header() {
  const [activeMenu, setActiveMenu] = useState(true);
  
  const SidebarShowup = (e) => {
    e.stopPropagation()
      if(activeMenu === false){
          setActiveMenu(true);
          }else{setActiveMenu(false)};
  }
  const navBtn = document.getElementById('navbtn')
  navBtn.addEventListener('click', () => {
    console.log('1');
  });
  
  return (
    <header className='box-border block top-auto  fixed w-full z-20 text-base'>
      <div className='block'> {/* wrapper */}
        <div className='flex relative items-center w-full h-20 p-[0.12%] xl:p-[0.5%]'>
        {/* logo */}
          <div>
            <a href="/"></a>
          </div>
        {/* 상단메뉴 */}
            {/* <ul>
              {headerNav.map((nav, key) => (
                <li key={key}>
                  <a href={nav.url}>{nav.title}</a>
                </li>
              ))}
            </ul> */}
          <ul className='block absolute left-1/2 top-1/2 w-max m-0 p-0 -translate-y-1/2 -translate-x-1/2 list-none max-md:hidden text-white'>
            <li className='relative float-left py-0 px-9 leading-[4.5rem]'><a href="" className='block'>about</a>
              <ul className='hidden'>
                <li><a href="">회사소개</a></li>
                <li><a href="">회사연혁</a></li>
                <li><a href="">오시는 길</a></li>
              </ul>
            </li>
            <li className='relative float-left py-0 px-9 leading-[4.5rem]'><a href="" className='block'>science</a>
              <ul className='hidden'>
                <li><a href="">과학</a></li>
                <li><a href="">수학</a></li>
              </ul>
            </li>
            <li className='relative float-left py-0 px-9 leading-[4.5rem]'><a href="" className='block'>service</a>
              <ul className='hidden'>
                <li><a href="">과학</a></li>
                <li><a href="">수학</a></li>
              </ul>
            </li>
            <li className='relative float-left py-0 px-9 leading-[4.5rem]'><a href="" className='block'>esg</a>
              <ul className='hidden'>
                <li><a href="">사내소식</a></li>
              </ul>
            </li>
            <li className='relative float-left py-0 px-9 leading-[4.5rem]'><a href="" className='block'>contact</a>
              <ul className='hidden'>
                <li><a href="">공지사항</a></li>
                <li><a href="">문의사항</a></li>
              </ul>
            </li>
          </ul>
        {/* 메뉴 */}
          {/* navbtn */}
          <div id='navbtn' className='absolute top-1/2 right-52 z-101 -translate-y-1/2 w-8 h-3.5 cursor-pointer transition-all duration-300 ease-in-out max-xl:right-12 max-md:hidden
          before:bg-white before:block before:absolute before:left-0 before:top-1 z-1 before:w-full before:h-0.5
          after:top-3 after:bg-white after:block after:absolute after:left-0 z-1 after:w-full after:h-0.5'
          onClick={() => setActiveMenu((prev) => !prev)}>
            <span></span>
          </div>
          {/* navwrapper */}
          <div className='-top-full left-0 fixed z-50 min-w-[1280px] w-full h-dvh text-white bg-black/10 backdrop-blur-sm'>
            <div className='absolute top-0 right-0 z-0 w-1/2 h-full active:-top-full'>
              <div className='right-0 w-0 h-1/5 absolute active:w-full transition-[width] duration-600 ease-in-out delay-0 top-0
              before:block before:content-[""] before:absolute before:-top-[5%] before:-left-[5%] before:-z-1 before:h-110% before:w-110% bg-primary'></div>
              <div className='right-0 w-0 h-1/5 absolute active:w-full transition-[width] duration-600 ease-in-out delay-100 top-1/5
              before:block before:content-[""] before:absolute before:-top-[5%] before:-left-[5%] before:-z-1 before:h-110% before:w-110% bg-primary'></div>
              <div className='right-0 w-0 h-1/5 absolute active:w-full transition-[width] duration-600 ease-in-out delay-200 top-2/5
              before:block before:content-[""] before:absolute before:-top-[5%] before:-left-[5%] before:-z-1 before:h-110% before:w-110% bg-primary'></div>
              <div className='right-0 w-0 h-1/5 absolute active:w-full transition-[width] duration-600 ease-in-out delay-300 top-3/5
              before:block before:content-[""] before:absolute before:-top-[5%] before:-left-[5%] before:-z-1 before:h-110% before:w-110% bg-primary'></div>
              <div className='right-0 w-0 h-1/5 absolute active:w-full transition-[width] duration-600 ease-in-out delay-400 top-4/5
              before:block before:content-[""] before:absolute before:-top-[5%] before:-left-[5%] before:-z-1 before:h-110% before:w-110% bg-primary'></div>
            </div>
          </div>
        </div>
        

        {/* 반응형 S */}
        <div className='block w-full p-4'>

        </div>
        {/* 반응형 e */}
        <div></div>
      </div>
    </header>
  )
}

export default Header