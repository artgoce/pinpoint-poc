import React from 'react';
import { Link } from 'react-router-dom';

const AddressInfo = ({ amplify }) => {
    amplify.recordEvent('VISIT_ADDRESS_INFO', {
      section: 'CONTRACT_OPENING',
    });
    return (<><h2>Adress Information</h2><Link to="/">Visit Personal Info</Link></>);
}

export default AddressInfo;
