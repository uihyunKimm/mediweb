import React, { useRef,useState } from 'react';
import PropTypes from 'prop-types';
import { SectionsContainer, Section } from 'react-fullpage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import MainImage01 from '../image/MainImage01.jpg'
import MainImage02 from '../image/MainImage02.jpg'
import { flattenDiagnosticMessageText } from 'typescript';

const options = {
  responsiveWidth:      767,
  activeClass:          'active', // the class that is appended to the sections links
  anchors:              ['', 'about', 'science','service','esg','contact'], // the anchors for each sections
  arrowNavigation:      false, // use arrow keys
  className:            'SectionContainer', // the class name for the section container
  delay:                1000, // the scroll animation speed
  navigation:           false, // use dots navigatio
  scrollBar:            false, // use the browser default scrollbar
  sectionClassName:     'Section',/* fp-auto-height-responsive */ // the section class name
  sectionPaddingTop:    '0', // the section top padding
  sectionPaddingBottom: '0', // the section bottom padding
  verticalAlign:        false // align the content of each section vertical
};

// Header 컴포넌트: NavButton과 NavMenu를 통합하여 관리합니다.
const Main = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <SectionsContainer {...options}>
      <Section>
        <Swiper
          spaceBetween={0}
          loop={true}
          centeredSlides={true}
          speed={1400}
          autoplay={{
            delay: 4000,
            disableOnInteraction: flattenDiagnosticMessageText,
          }}
          /* pagination={{
            clickable: true,
          }} */
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          <SwiperSlide className='flex justify-center items-center'>
            <img src={MainImage01} alt="Main01" className='block w-full h-full object-cover brightness-50'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={MainImage02} alt="Main02" className='block w-full h-full object-cover brightness-50'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={MainImage01} alt="Main02" className='block w-full h-full object-cover brightness-50'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={MainImage02} alt="Main02" className='block w-full h-full object-cover brightness-50'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={MainImage02} alt="Main02" className='block w-full h-full object-cover brightness-50'/>
          </SwiperSlide>

          {/* <div className="absolute right-8 bottom-8 z-10 w-12 h-12 flex justify-center items-center font-bold text-white" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle} className='absolute left-0 top-0 z-10 w-full h-full fill-white animate-spin '>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div> */}
        </Swiper>
      </Section>
      <Section>
        <div className='bg-none w-full h-full'>
          <img src={MainImage02} alt="Main02" className='block w-full h-full object-cover overflow-hidden brightness-50'/>
        </div>
      </Section>
      <Section>
        3
      </Section>
      <Section>
        4
      </Section>
      <Section>
        5
      </Section>
    </SectionsContainer>
  );
};

export default Main;
