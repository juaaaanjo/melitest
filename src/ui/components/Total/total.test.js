import React from 'react';
import { render } from '@testing-library/react-native';
import Total from './Total';

describe('Total component', () => {
  it('renders label and subtitle correctly', () => {
    const label = 'Total';
    const subtitle = '$100';
    
    const { getByText } = render(<Total label={label} subtitle={subtitle} />);
    
    const labelElement = getByText(label + ':');
    const subtitleElement = getByText(subtitle);
    
    expect(labelElement).toBeTruthy();
    expect(subtitleElement).toBeTruthy();
  });
  
});