import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/redux-store';

test('renders learn react link', () => {
  let a = true;
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(a).toBe(true);
});
