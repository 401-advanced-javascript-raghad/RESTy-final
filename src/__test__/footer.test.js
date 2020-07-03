import React from 'react';
import Footer from '../footer/Footer';

import { render } from 'enzyme';

describe('Footer renders as expected', () => {
    it('creates a Footer tag', () => {
        let footerTag = render(<Footer />);
        expect(footerTag.find('footer')).toBeDefined();
    });
});