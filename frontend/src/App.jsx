// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LogIn } from "./screens/LogIn";
import { MembershipScreen } from "./screens/MembershipScreen";
import { ExternalActivities } from "./screens/ExternalActivities/ExternalActivities";
import { HomePage } from "./screens/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/ExternalActivities' element={<ExternalActivities />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/memreg" element={<MembershipScreen />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}