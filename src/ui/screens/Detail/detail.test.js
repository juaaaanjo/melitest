import React from 'react';
import { render } from '@testing-library/react-native';
import DetailScreen from './Detail';

jest.mock('@react-navigation/native');

describe('DetailScreen', () => {
  const mockRouteParams = {
    idProduct: '123',
    title: 'Product Title',
    price: 100,
    thumbnail: 'https://example.com/image.jpg',
    seller: 'Seller Name',
    attributes: [],
    condition: 'new',
    available_quantity: 10,
  };

  test('renders correctly', () => {
    const { toJSON } = render(<DetailScreen route={{ params: mockRouteParams }} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('displays correct product information', () => {
    const { getByText } = render(<DetailScreen route={{ params: mockRouteParams }} />);
    expect(getByText(mockRouteParams.title)).toBeTruthy();
    expect(getByText(`$${mockRouteParams.price.toLocaleString()}`)).toBeTruthy();
    expect(getByText(mockRouteParams.seller)).toBeTruthy();
    expect(getByText('Stock disponible')).toBeTruthy();
    expect(getByText('Condición')).toBeTruthy();
  });

});