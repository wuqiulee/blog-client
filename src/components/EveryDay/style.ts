import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px;
  text-align: center;

  header {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
  }

  .box {
    margin-bottom: 8px;
    .date {
      color: #74759b;
      font-size: 14px;
      margin-bottom: 5px;
    }

    .title {
      font-size: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;
