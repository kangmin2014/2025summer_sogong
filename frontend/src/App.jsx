// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LogIn } from "./screens/LogIn";
import { MembershipScreen } from "./screens/MembershipScreen";
import { HomePage } from "./screens/HomePage";
// import { HotRecruitPosts } from "./components/HotRecruitPosts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/test" element={<HotRecruitPosts />} /> */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/memreg" element={<MembershipScreen />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}