import { Routes, Route } from 'react-roter-dom';

import AboutPage from './components/AboutPage';
import ContactsPage from './components/ContactsPage';
import HomePage from './components/HomePage';

import Layout from "./components/Layout";

const App = () => {
  <Routes>
    <Route path="/" element={ <Layout /> }>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="login" element={<ContactsPage />} />
      <Route path="*" element={<Notfoundpage />} />
    </Route>
  </Routes>

  return <Layout />;
}

export default App;
