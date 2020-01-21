import React from 'react';

import Directory from '../../components/directory/directory.component';

import { BodyContainer } from '../../index.styles';


const VendorsPage = () => (
  <BodyContainer>
    <Directory heading="Vendors" limit='false'/>
  </BodyContainer>
);

export default VendorsPage;