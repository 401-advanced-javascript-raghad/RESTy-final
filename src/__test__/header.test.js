import React from 'react';
import Header from '../header/Header';

import { render } from 'enzyme';

describe('Header renders as expected', () => {
    it('creates a Header tag', () => {
        let headerTag = render(<Header />);
        expect(headerTag.find('header')).toBeDefined();
        expect(headerTag.find('header h1')).toBeDefined();
    });
});