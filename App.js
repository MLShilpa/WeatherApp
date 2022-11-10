import React from 'react';
import {Provider} from 'react-redux';
import Store from '/Volumes/Development/Projects/WeatherApp/src/redux/Store.js';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(Store);

import DrawerNav from '../WeatherApp/src/navigation/DrawerNav';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <DrawerNav />
      </PersistGate>
    </Provider>
  );
};

export default App;
