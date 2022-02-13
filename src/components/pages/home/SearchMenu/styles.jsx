import styled from '@emotion/styled';
import { primary } from '@/styles/colors';

export const SearchMenuBox = styled.div`
  margin-top: 70px;
`;

export const SubTitle = styled.h2`
  margin: 20px 0;
  text-align: left;
`;

export const MenuInputBox = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuInput = styled.input`
  outline: none;
  border: solid 2px ${primary.main};
  padding: 0 10px;
  width: 65%;
  height: 50px;

  &::placeholder {
    color: #000;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${primary.main};
  border: none;
  padding: 0 25px;
  height: 54px;
  cursor: pointer;
  color: #fff;
`;
