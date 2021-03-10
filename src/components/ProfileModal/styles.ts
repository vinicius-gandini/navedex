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

  @media(max-width: 450px) {
    display: flex;
    flex-direction: column;
    position: relative;


  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  background-color: #fff;
  padding: 1.25rem;

  height: 100%;
  width: 100%;
  max-width: 503px;

  button {
    align-self: flex-end;
  }

  @media(max-width: 450px) {
    height: 60%;
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;

    > button {
      display: none;
    }

    div:last-child {
      position: absolute;
      bottom: 8px;
      right: 0;
    }
  }
`;

export const Background = styled.div<ProfileImage>`
  flex: 1;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
  filter: grayscale(1);

  @media(max-width: 450px) {
    background-position: top;
  }
`;

export const Name = styled.h1`
  line-height: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Title = styled.p`
  line-height: 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1.5rem;
`;

export const Description = styled.p`
  line-height: 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0.75rem;
`;

export const Actions = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 7rem;

  > button {
    margin-right: 1rem;
  }
`;
