import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from '@emotion/react';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    black: '#212121',
    white: '#fff',
    accent: 'rgba(139, 139, 139, 0.8)',
    secondary: '#0b2d7c',
  },
  radii: {
    xs: '5px',
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
