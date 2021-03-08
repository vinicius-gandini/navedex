import styled from 'styled-components';

interface ProfileImage {
  image: string;
}

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 503px;
  width: 1006px;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  background-color: #fff;
  padding: 20px;

  height: 100%;
  width: 100%;
  max-width: 503px;

  button {
    align-self: flex-end;
  }
`;

export const Background = styled.div<ProfileImage>`
  flex: 1;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
`;

export const Name = styled.h1`
  line-height: 32px;
  font-size: 24px;
  font-weight: 600;
`;

export const Title = styled.p`
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 24px;
`;

export const Description = styled.p`
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 110px;

  > button {
    margin-right: 16px;
  }
`;
