import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FoodsContainer = styled.div`
  position: absolute;

  max-width: 1280px;

  top: 140px;
  left: 50%;
  transform: translateX(-50%);

  padding: 40px 0;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    grid-row-gap: 5px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 10px;
  }
`;
