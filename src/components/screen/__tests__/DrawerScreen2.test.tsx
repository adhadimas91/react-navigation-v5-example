import 'react-native';

import React, { ReactElement } from 'react';
import { RenderResult, render } from '@testing-library/react-native';
import { createTestElement, createTestProps } from '../../../utils/testUtils';

import DrawerScreen2 from '../DrawerScreen2';
import renderer from 'react-test-renderer';

let props: any;
let component: ReactElement;
let testingLib: RenderResult;

describe('[DrawerScreen2] screen', () => {
  beforeEach(() => {
    props = createTestProps();
    component = createTestElement(<DrawerScreen2 {...props} />);
    testingLib = render(component);
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render [Text] with value "myText"', () => {
    const textInstance = testingLib.getByTestId('myText');
    expect(textInstance.props.children).toEqual('dooboolab');
  });

  describe('interactions', () => {
    beforeEach(() => {
      testingLib = render(component);
    });

    it('should simulate onClick', () => {
      // const btn = testingLib.queryByTestId('btn');
      // act(() => {
      //   fireEvent.press(btn);
      //   fireEvent.press(btn);
      // });
      // expect(cnt).toBe(3);
    });
  });
});