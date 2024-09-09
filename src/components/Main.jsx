import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SectionsContainer, Section } from 'react-fullpage';

const options = {
  activeClass: 'active', // the class that is appended to the sections links
  anchors: ['One', 'Two', 'Three'], // the anchors for each sections
  arrowNavigation: true, // use arrow keys
  delay: 900, // the scroll animation speed
  navigation: false, // use dots navigatio
  scrollBar: false, // use the browser default scrollbar
};

// Header 컴포넌트: NavButton과 NavMenu를 통합하여 관리합니다.
const Main = () => {
  return (
    <SectionsContainer {...options}>
        <Section>
          {/* contents */}
        </Section>
    </SectionsContainer>
  );
};

export default Main;
