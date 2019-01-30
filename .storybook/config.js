import { addParameters, configure } from '@storybook/react';

addParameters({
  backgrounds: [
    {
      name: 'white',
      value: '#ffffff',
      default: true,
    },
    {
      name: 'grey',
      value: '#888888',
    },
    {
      name: 'black',
      value: '#000000',
    },
  ],
});

configure(() => {
  require('../index.js');
}, module);

addParameters({
  backgrounds: [
    {
      name: 'white',
      value: '#ffffff',
      default: true,
    },
    {
      name: 'grey',
      value: '#888888',
    },
    {
      name: 'black',
      value: '#000000',
    },
  ],
});
