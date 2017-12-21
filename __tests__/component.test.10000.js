import React from 'react';

import Box from '../src/component.jsx'
import {shallow} from 'enzyme';

const repeat = 10000;
describe('component', () => {
  describe(`run ${repeat} times`, () => {
    for(let i = 0; i < repeat; i++) {
      describe('repeat', () => {
        it('renders ', () => {
          const box = shallow(<Box />);
          expect(box).toBe.ok;
        });
      });
    }
  });
});
