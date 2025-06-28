// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import { LogIn } from "./screens/LogIn";
import { MemRegistration } from './MemRegistration.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/memreg" element={<MemRegistration />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}