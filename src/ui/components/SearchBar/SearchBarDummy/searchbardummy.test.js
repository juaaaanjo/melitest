import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchBarDummy from './SearchBarDummy';

describe('SearchBarDummy component', () => {
  test('renders search button and text input correctly', () => {
    const onPress = jest.fn();
    const { getByTestId, getByText } = render(
      <SearchBarDummy onPress={onPress} />
    );

    const searchButton = getByTestId('search-button');
    const textInput = getByText('iPhone 14 pro max...');

    expect(searchButton).toBeTruthy();
    expect(textInput).toBeTruthy();
  });

  test('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <SearchBarDummy onPress={onPress} />
    );

    fireEvent.press(getByTestId('search-button'));
    expect(onPress).toHaveBeenCalled();
  });

});