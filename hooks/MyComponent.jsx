import React from 'react';
import useKeyboardShortcut from './useKeyboardShortcut';

const MyComponent = () => {
  useKeyboardShortcut('s', true, false, () => {
    console.log('Ctrl + S pressed');
    // Your save logic here
  });

  return <div>Press Ctrl + S to trigger the save action</div>;
};

export default MyComponent;
