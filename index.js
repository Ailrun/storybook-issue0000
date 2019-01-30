import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('issue5416', module)
  // .addParameters({
  //   backgrounds: [
  //     {
  //       name: 'white',
  //       value: '#ffffff',
  //       default: true,
  //     },
  //     {
  //       name: 'grey',
  //       value: '#888888',
  //     },
  //     {
  //       name: 'black',
  //       value: '#000000',
  //     },
  //   ],
  // })
  .add('default', () => (
    <div style={{ background: 'black' }}>HI</div>
  ));
