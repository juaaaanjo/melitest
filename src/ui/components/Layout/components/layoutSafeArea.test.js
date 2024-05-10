import React from 'react';
import { Text } from "react-native";
import { render } from '@testing-library/react-native';
import LayoutSafeArea from './layoutSafeArea';

describe('Layout component', () => {
  test('renders header, content, and footer correctly', () => {
    const headerText = 'Header';
    const contentText = 'Content';
    const footerText = 'Footer';

    const { getByText } = render(
      <LayoutSafeArea
        header={<Text>{headerText}</Text>}
        content={<Text>{contentText}</Text>}
        footer={<Text>{footerText}</Text>}
      />
    );

    const headerElement = getByText(headerText);
    const contentElement = getByText(contentText);
    const footerElement = getByText(footerText);

    expect(headerElement).toBeTruthy();
    expect(contentElement).toBeTruthy();
    expect(footerElement).toBeTruthy();
  });

  // Add more tests as needed
});