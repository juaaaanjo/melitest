import React from 'react';
import { render } from '@testing-library/react-native';
import Item from './Item'; 

describe('Item component', () => {
  test('renders label and price correctly', () => {
    const label = 'Test Label';
    const price = '$10.99';

    const { getByText } = render(<Item label={label} price={price} />);

    // Check if label and price are rendered correctly
    const labelElement = getByText(label);
    const priceElement = getByText(price);

    expect(labelElement).toBeTruthy();
    expect(priceElement).toBeTruthy();
  });

  // Add more tests as needed
});