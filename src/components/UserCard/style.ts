import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;

  header {
    height: 150px;
    margin-bottom: 60px;
    background-color: purple;

    img {
      display: block;
      width: 120px;
      height: 120px;
      margin: 0 auto;
      border: 3px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgb(0 0 0 / 20%);
      transform: translateY(90px);
    }
  }

  .main {
    text-align: center;
    padding: 16px;

    .nickName {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 16px;
    }

    section {
      line-height: 160%;
    }
  }

  footer {
    text-align: center;
    padding: 16px;
    border-top: 1px solid #eaecef;

    a {
      margin: 0 5px;
      font-size: 22px;

      &:hover {
        color: #1677ff;
      }
    }
  }
`;
