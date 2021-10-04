import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 350px;

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
          border: 1px solid blue;
          color: blue;
        }
      }

      input[type=radio]:checked + label {
        border: 1px solid blue;
        color: blue;
      }
    }
  }
`;