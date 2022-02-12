import { Outlet } from 'react-router-dom';
import { Global } from '@emotion/react';

import global from '@/styles/global';

import Header from '../Header';
import { PageContainerBox } from './styles';

export default function PageContainer() {
  return (
    <PageContainerBox>
      <Header />
      <Global styles={global} />
      <Outlet />
    </PageContainerBox>
  );
}
