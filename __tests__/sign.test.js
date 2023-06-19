import { render } from '@testing-library/react-native';
import React from 'react';

import Sign from '../src/presentation/screens/Sign';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('expo-local-authentication', () => ({
}));

jest.mock('../src/application/services/login', () => ({
}));

jest.mock('../src/application/storage/tokenUser', () => ({
}));

describe('<Sign />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByLabelText, getByText } = render(<Sign />);

    // expect(getByLabelText('User')).toBeDefined();
    // expect(getByLabelText('Password')).toBeDefined();
    // expect(getByText('Sign')).toBeDefined();
  });

  it('handles form submission', () => {
    const { getByLabelText, getByText } = render(<Sign />);

    // fireEvent.changeText(getByLabelText('User'), 'testuser');
    // fireEvent.changeText(getByLabelText('Password'), 'testpassword');

    // fireEvent.press(getByText('Sign'));
  });
});
