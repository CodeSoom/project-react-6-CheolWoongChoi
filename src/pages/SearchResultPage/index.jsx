import { useSearchParams } from 'react-router-dom';

import SearchResultContainer from '@/containers/SearchResultContainer';

export default function SearchResultPage() {
  const [searchParams] = useSearchParams();

  return (
    <SearchResultContainer keyword={searchParams.get('keyword') || ''} />
  );
}
