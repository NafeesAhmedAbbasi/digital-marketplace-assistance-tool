import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
export default App;
