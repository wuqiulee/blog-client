import styled from 'styled-components';
import { Pagination } from 'antd';

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
      overflow: hidden;

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
        padding: 20px;
      }

      .childWrap {
        margin-top: 20px;
        .messageChild {
          display: flex;
          padding: 0 20px;
          img {
            width: 40px;
            height: 40px;
            border-radius: 7px;
          }

          .childBox {
            flex: 1;
            margin-left: 20px;
            margin-bottom: 30px;
            background-color: hsla(0, 0%, 100%, 0.8);
            border: 1px solid #d9d9d9;
            border-radius: 10px;
            overflow: hidden;

            .top {
              display: block;
            }

            .childContent {
              padding: 10px 20px 20px;

              .reply {
                font-size: 14px;
                margin-bottom: 10px;

                span {
                  color: rgb(116, 117, 155);
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const PaginationWrapper = styled(Pagination)`
  background-color: #fff;
  padding: 10px 20px;
  text-align: right;
`;
