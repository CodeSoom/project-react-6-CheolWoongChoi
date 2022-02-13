import styled from '@emotion/styled';

import { primary } from '@/styles/colors';
import { header } from '@/styles/layouts';

export const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;

  background-color: ${primary.main};
  border-bottom: solid 1px #ddd;
  padding: 0 25px;
  height: ${header};
  width: 100%;
`;

export const HomeButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
`;
