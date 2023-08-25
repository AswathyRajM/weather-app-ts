import React from 'react';
import './Error.css';
function ErrorComponent(props: { errMsg: string }) {
  return (
    <div className='error-container'>
      <span>{props.errMsg}</span>
    </div>
  );
}

export default ErrorComponent;
