import { Routes, Route } from 'react-router-dom';

import AboutPage from './components/AboutPage';
import ContactsPage from './components/ContactsPage';
import HomePage from './components/HomePage';

import Layout from "./components/Layout";
import NotfoundPage from './components/NotfoundPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  )
}

export default App;
