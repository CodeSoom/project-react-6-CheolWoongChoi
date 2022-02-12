import styled from '@emotion/styled';

import { primary } from '@/styles/colors';

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;

  background-color: ${primary.main};
  border-bottom: solid 1px #ddd;
  padding: 0 25px;
  height: 60px;
`;

export const HomeButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 25px;
  color: #fff;
  cursor: pointer;
`;
