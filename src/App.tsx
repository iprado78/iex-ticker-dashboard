import React from 'react';
import { ThemeProvider } from "@material-ui/core";
import { theme } from './theme';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <div>Ticker select</div>
        <div>Start date select</div>
        <div>End date select</div>
      </Header>
      <Main />
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
