import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Appbar from './components/AppBar';
import { ToastContainer } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { LoaderContext, LoaderProvider } from './context/LoaderContext';
import Loader from './components/Loader';
import { setupInterceptors } from './services/ApiConfig';
import ScrollToTop from './components/ScrollToTop';
import { useThemeStore } from './stores/ThemeStore';
import { ParallaxProvider } from 'react-scroll-parallax';

const AppContent = () => {
  const { setLoading } = useContext(LoaderContext);

  useEffect(() => {
    setupInterceptors(setLoading);
  }, [setLoading]);

  const darkMode = useThemeStore(state => state.darkMode);
  const toggleDarkMode = useThemeStore(state => state.toggleDarkMode);

  const handleThemeChange = () => {
    toggleDarkMode();
  };

  return (
    <ParallaxProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Loader />
        <CssBaseline />
        <ToastContainer />
        <div className={darkMode ? "dark" : ""}>
          <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-500">
            <Router>
              <ScrollToTop />
              <Appbar darkMode={darkMode} handleThemeChange={handleThemeChange} />

              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </Router>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </ParallaxProvider>
  );
};

function App() {

  return (
    <LoaderProvider>
      <AppContent />
    </LoaderProvider>
  );
}

export default App;