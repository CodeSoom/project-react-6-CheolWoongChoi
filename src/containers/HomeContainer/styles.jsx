import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 0 200px;
`;

export const Title = styled.h1`
  margin: 50px 0 0;
  text-align: center;
`;

export const SubTitle = styled.h2`
  margin: 20px 0;
  text-align: left;
`;

export const RecommendMenus = styled.div`
  margin-top: 70px;
`;

export const RecommendButtons = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 25%));
  grid-gap: 20px;
`;

export const RecommendButton = styled.button`
  padding: 10px;
`;

export const SearchMenu = styled.div`
  margin-top: 70px;

  & > div {
    & > input {
      width: 350px;
    }

    & button {
    }
  }
`;
