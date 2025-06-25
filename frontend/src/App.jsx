// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import { LogInPage } from './login.jsx';
import { MemRegistration } from './MemRegistration.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/memreg" element={<MemRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}