import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useLogics() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState('');

  const handleChangeMenu = (e) => {
    setMenu(e.target.value);
  };

  const handleClickSearch = () => {
    if (!menu) {
      return;
    }

    navigate('/searchResult' + `?keyword=${menu}`);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleClickSearch();
    }
  };

  return {
    menu,
    handleChangeMenu,
    handleClickSearch,
    handleEnterKey,
  };
}
