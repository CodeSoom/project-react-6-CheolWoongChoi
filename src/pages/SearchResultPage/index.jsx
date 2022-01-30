import { useParams } from 'react-router-dom';

import SearchResultContainer from '@/containers/SearchResultContainer';

export default function SearchResultPage() {
  const { keyword } = useParams();

  return (
    <SearchResultContainer keyword={keyword} />
  );
}
