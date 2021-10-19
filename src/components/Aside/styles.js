import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 350px;
  padding: 24px 8px;

  @media (max-width: 850px) {
    width: 95%;
  }

  p {
    margin: 25px 0 15px;
  }

  form {
    .radios {
      width: 100%;
      display: flex;
      justify-content: space-between;

      input[type=radio] {
        display: none;
      }
      
      label {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 49%;
        border: 1px solid #aaa;
        cursor: pointer;
        transition: all 0.3s;
        
        &:hover {
          border: 1px solid ${({theme}) => theme.palette.primary.main};
          color: ${({theme}) => theme.palette.primary.main};
        }
      }

      input[type=radio]:checked + label {
        border: 1px solid ${({theme}) => theme.palette.primary.main};
        color: ${({theme}) => theme.palette.primary.main};
      }
    }

    input[type=text] {
      width: 100%;
      height: 40px;
      padding: 8px;
      margin: 16px 0;
    }

    button {
      width: 100%;
      height: 40px;
      border: none;
      background: ${({ theme }) => theme.palette.primary.main};
      color: #fff;
      font-weight: bold;
      transition: filter 0.3s;
      cursor: pointer;

      &:hover {
        filter: brightness(0.7);
      }

      &:disabled {
        background: #aaa;
        cursor: not-allowed;

        &:hover {
          filter: brightness(1);
        }
      }
    }
  }
`;