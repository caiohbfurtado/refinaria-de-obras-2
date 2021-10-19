import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex: 1;

  @media(max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;
