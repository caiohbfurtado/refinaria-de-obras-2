import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px;
  border-left: 1px solid #d1d1d1;

  @media(max-width: 850px) {
    border: none;
    width: 95%;
  }
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`
