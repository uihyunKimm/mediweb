import React from 'react'

function Header() {
  return (
    <header className='box-border block top-auto  fixed w-full z-20 text-base'>
      <div className='block'>
        <div className='flex relative items-center w-full h-20 p-[0.12%] xl:p-[0.5%]'>
          {/* logo */}
          <div>
            <a href="/"></a>
          </div>
          {/* 상단메뉴 */}
          <ul className='block absolute left-1/2 top-1/2 w-max m-0 p-0 -translate-y-1/2 -translate-x-1/2 list-none max-md:hidden'>
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
        </div>
        <div className='absolute top-1/2 right-52 z-101 -translate-y-1/2 w-8 h-3.5 cursor-pointer transition-all duration-3000 ease-in-out max-xl:right-12 max-md:hidden
        before:bg-white before:block before:absolute before:left-0 before:top-1 z-1 before:w-full before:h-0.5
        after:top-3 after:bg-white after:block after:absolute after:left-0 z-1 after:w-full after:h-0.5'>
          <span></span>
        </div>
        {/* 반응형 S */}
        <div></div>
        {/* 반응형 e */}
        <div></div>
      </div>
    </header>
  )
}

export default Header