// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import  { Toaster } from 'react-hot-toast';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <Router />
      <Toaster />
    </ThemeConfig>
  );
}
