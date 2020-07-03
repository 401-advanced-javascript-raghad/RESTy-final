import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Form from '../form/Form';

describe('<Form />' , ()=>{
    
   it('Does it properly store the users input into state?' ,()=>{
      let app = mount(<Form/>);
      let input = app.find('input');
      let method = app.find('#get');
      input.simulate('change',{target:{value:'https://localhost:3000/categories'}});
      method.simulate('click');
      expect(app.state('method')).toEqual('get');
      expect(app.state('url')).toEqual('https://localhost:3000/categories');
   });

   it('Does it properly display the users input in the output area on form submit?',()=>{
      let app = shallow(<Form/>);
      expect(app.find('.url').exists()).toBeTruthy();
      expect(app.find('.method').exists()).toBeTruthy();
   });

   it('Does it properly clear the form/state after the form is submitted?',()=>{
     let app = mount(<Form/>);
     let input = app.find('input');
     let method = app.find('#get');
     let submit = app.find('form');
     input.simulate('change',{target:{value:'https://localhost:3000/categories'}});
     method.simulate('click');
     submit.simulate('submit');
     expect(app.state('method')).toEqual('');
     expect(app.state('url')).toEqual('');
   });

   it('Do the method selectors/checkboxes obey your styling rules?',()=>{
    let app = mount(<Form/>);
    let method = app.find('#get');
    method.simulate('click');
    expect(app.find('.active').exists()).toBeTruthy();

   });
});