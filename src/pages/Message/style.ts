import styled from 'styled-components';

export const MessageWrapper = styled.div`
  .total {
    color: #2c3e50;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin: 20px 0;
  }

  .messageItem {
    display: flex;
    img {
      width: 60px;
      height: 60px;
      border-radius: 10px;
    }

    .messageBox {
      flex: 1;
      margin-left: 20px;
      margin-bottom: 30px;
      background-color: hsla(0, 0%, 100%, 0.8);
      border: 1px solid #d9d9d9;
      border-radius: 10px;

      .top {
        display: flex;
        justify-content: space-between;
        background-color: #f6f8fa;
        border-bottom: 1px solid #d9d9d9;
        padding: 10px 20px;

        .nickName {
          color: #2c3e50;
          font-weight: 600;
          margin-right: 15px;
          font-size: 18px;
        }

        .reply {
          color: #2c3e50;
          cursor: pointer;
        }
      }

      .content {
        padding: 20px 20px;
      }
    }
  }
`;
