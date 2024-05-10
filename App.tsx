import { Provider } from 'react-redux';
import {Router}  from './src/domain/routes/router/Router';
import store from './src/data/redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
     <Router />
  </Provider>
  );
}
