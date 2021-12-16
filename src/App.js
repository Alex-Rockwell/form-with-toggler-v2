// import { ThemeProvider } from '@emotion/react';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';
import Form from './Form';
import Navbar from './Navbar';
import PageContent from './PageContent';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
          <LanguageProvider>
            <PageContent>
              <Navbar />
              <Form />
            </PageContent>
          </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
