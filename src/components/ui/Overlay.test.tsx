import React from 'react';
import { shallow } from 'enzyme';

import Overlay from './Overlay';

test('Overlay', () => {
	const overlay = shallow(<Overlay />);
	expect(overlay).toMatchSnapshot();
});