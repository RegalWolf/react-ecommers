import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button 
    className={`${isGoogleSignIn ? 'custom-buttom__google' : ''} custom-buttom`} 
    {...otherProps}>
    {children}
  </button>
)

export default CustomButton;
