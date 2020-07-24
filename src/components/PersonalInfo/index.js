import React from 'react';
import { Link } from 'react-router-dom';

const PersonalInfo = ({ amplify }) => {
  amplify.recordEvent('VISIT_PERSONAL_INFO', {
    section: 'CONTRACT_OPENING',
  });
  return (<><h2>Personal Information</h2><Link to="/address-info">Visit Address Info</Link></>);
};

export default PersonalInfo;
