import React from 'react';
import {
  Header,
  HeaderName,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';

import Fade16 from '@carbon/icons-react/lib/fade/16';
import { Link } from 'react-router-dom';

const TutorialHeader = () => (
  <Header aria-label="BH Portfollio">
    <SkipToContent />

    <HeaderName element={Link} to="/" prefix="">
      <Fade16 />
      &nbsp;&nbsp;Get Your Favorite Github Repos&nbsp;&nbsp;
      <Fade16 />
    </HeaderName>
  </Header>
);

export default TutorialHeader;
