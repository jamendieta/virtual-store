import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store'

const theme = createTheme({
  palette: {
    primary: {
      main: '#6c63ff',
    },
  },
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
