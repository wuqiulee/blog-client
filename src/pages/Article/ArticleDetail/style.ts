import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 25px;
  background-color: #fff;
  h3 {
    color: #2c3e50;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
  }

  .explain {
    text-align: center;
    margin: 20px auto;

    & > span:nth-child(2) {
      margin: 0 20px;
    }
  }
`;
