import React from 'react';
import Home from '../src/presentation/screens/Home';

jest.mock('@react-navigation/native');
jest.mock('../src/application/services/users');
jest.mock('../src/application/storage/tokenUser');

describe('<Home />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Loading...')).toBeDefined();
  });

  it('loads and displays users', async () => {
    const { findByText, getByText } = render(<Home />);

    const mockedUsers = [
      { id: 1, login: 'user1', avatar_url: 'http://example.com/user1.png', html_url: 'http://example.com/user1' },
      { id: 2, login: 'user2', avatar_url: 'http://example.com/user2.png', html_url: 'http://example.com/user2' },
    ];
    jest.spyOn(UsersService, 'getUsers').mockResolvedValue(mockedUsers);

    await findByText('user1');
    await findByText('user2');

    expect(getByText('user1')).toBeDefined();
    expect(getByText('user2')).toBeDefined();
  });

  it('handles logout', () => {
    const { getByLabelText } = render(<Home />);
    fireEvent.press(getByLabelText('Logout'));

  });

  it('navigates to the Search screen', () => {
    const { getByLabelText } = render(<Home />);
    fireEvent.press(getByLabelText('Search'));

  });
});
