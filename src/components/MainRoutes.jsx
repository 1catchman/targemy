import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import PostPage from '../pages/PostPage';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
