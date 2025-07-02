// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MyPageEdit } from "./screens/MyPageEdit";
import { MyPage } from "./screens/MyPage";
import { LogIn } from "./screens/LogIn";
import { MembershipScreen } from "./screens/MembershipScreen";
import { ExternalActivities } from "./screens/ExternalActivities/ExternalActivities";
import { HomePage } from "./screens/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/MyPageEdit' element={<MyPageEdit />} /> 
        <Route path='/MyPage' element={<MyPage />} />
        <Route path='/ExternalActivities' element={<ExternalActivities />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/memreg" element={<MembershipScreen />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}