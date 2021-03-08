import styled from 'styled-components';

export const Container = styled.div`
  width: 281px;

  display: flex;
  flex-direction: column;

  > img {
    height: 292px;
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.p`
  line-height: 18px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 16px;
`;

export const Description = styled.p`
  line-height: 18px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 4px;
`;

export const Actions = styled.div`
  display: flex;
  margin-top: 12px;

  > button {
    margin-right: 16px;
  }
`;
