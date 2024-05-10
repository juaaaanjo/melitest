import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductSearchCard from './ProductSearchCard'; // Assuming this test file is in the same directory as ProductSearchCard.js

describe('ProductSearchCard component', () => {
  test('renders image, title, and subtitle correctly', () => {
    const imageSource = 'https://example.com/image.jpg';
    const title = 'Product Title';
    const subtitle = 'Product Subtitle';
    const onPress = jest.fn();

    const { getByText, getByTestId } = render(
      <ProductSearchCard
        imageSource={imageSource}
        title={title}
        subtitle={subtitle}
        onPress={onPress}
      />
    );

    const imageElement = getByTestId('product-image');
    const titleElement = getByText(title);
    const subtitleElement = getByText(subtitle);

    expect(imageElement).toBeTruthy();
    expect(titleElement).toBeTruthy();
    expect(subtitleElement).toBeTruthy();
  });

  test('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <ProductSearchCard
        imageSource="https://example.com/image.jpg"
        title="Product Title"
        subtitle="Product Subtitle"
        onPress={onPress}
      />
    );
    fireEvent.press(getByTestId('product-card'));

    expect(onPress).toHaveBeenCalled();
  });

  // Add more tests as needed
});