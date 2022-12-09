import styled from 'styled-components';

export const SayWrapper = styled.div`
  background-color: #fff;
  padding: 25px;
  border-radius: 5px;
  margin-bottom: 15px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 1px 20px 1px rgba(0, 0, 0, 0.05);
  }

  .content {
    text-align: center;
    color: #2c3e50;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;

    div {
      text-align: left;
      display: inline-block;
    }
  }

  .date {
    text-align: right;
  }
`;
