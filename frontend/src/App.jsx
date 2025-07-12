import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ContestDetail } from "./screens/ContestDetail";
import { Contest } from "./screens/Contest";
import { ExternalActivitiesDetail } from "./screens/ExternalActivitiesDetail";
import { MyPageEdit } from "./screens/MyPageEdit";
import { MyPage } from "./screens/MyPage";
import { LogIn } from "./screens/LogIn";
import { MembershipScreen } from "./screens/MembershipScreen";
import { ExternalActivities } from "./screens/ExternalActivities";
import { HomePage } from "./screens/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/ContestDetail' element={<ContestDetail />} />
        <Route path='/Contest' element={<Contest />} />
        <Route path="/ExternalActivitiesDetail/:id" element={<ExternalActivitiesDetail />} /> 
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