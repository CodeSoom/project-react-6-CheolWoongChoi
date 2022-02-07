import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import SearchResultPage from '@/pages/SearchResultPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/searchResult" element={<SearchResultPage />} />
    </Routes>
  );
}
