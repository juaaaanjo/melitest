import React from 'react';
import { render } from '@testing-library/react-native';
import LoadingComponent from './Loading';

describe('LoadingComponent', () => {
  test('renders activity indicator correctly', () => {
    const { getByTestId } = render(<LoadingComponent />);
    
    const activityIndicator = getByTestId('activity-indicator');
    
    expect(activityIndicator).toBeTruthy();
  });

});