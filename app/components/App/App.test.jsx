import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';

describe('Standard App component', () => {
  test("it shows the 'hello world' text at any time",
    () => {
      const component = create(<App />);
      const rootInstance = component.root;
      const textContainer = rootInstance.findByType('div');
      expect(textContainer.props.children).toBe('Hello World!');
    });
});
