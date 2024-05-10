import React from 'react';
import { render } from '@testing-library/react-native';
import ProductSearchCardSkeleton from './ProductSearchCardSkeleton'; 

describe('ProductSearchCardSkeleton component', () => {
  test('renders skeleton elements correctly', () => {
    const { getByTestId } = render(<ProductSearchCardSkeleton />);
    const imageSkeleton = getByTestId('image-skeleton');
    const titleSkeleton = getByTestId('title-skeleton');
    const subtitleSkeleton = getByTestId('subtitle-skeleton');

    expect(imageSkeleton).toBeTruthy();
    expect(titleSkeleton).toBeTruthy();
    expect(subtitleSkeleton).toBeTruthy();
  });

});