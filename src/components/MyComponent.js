
import React, { memo } from 'react';

const MyComponent = memo(({ value, onClick }) => {
  console.log('MyComponent rendered');
  return (
    <div>
      <h2>{value}</h2>
      <button className='btn btn-primary' onClick={onClick}>Click me</button>
    </div>
  );
});

export default MyComponent;
