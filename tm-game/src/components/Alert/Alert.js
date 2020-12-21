import React from 'react';
import './Alert.css'

const variantMap = {
  info: 'alert--info',
  success: 'alert--success',
  error: 'alert--error',
};

const Alert = ({
  children,
  variant = 'info',
  testid = 'alert-component',
  hasBorderTop,
}) => (
  <div
    data-testid={testid}
    className={`alert ${variantMap[variant]} ${
      hasBorderTop ? 'alert--top-border' : ''
    }`}
  >
    {children}
  </div>
);

export default Alert;