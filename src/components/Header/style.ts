import styled from 'styled-components';

const Color = '#1677ff';

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  /* background-color: hsla(0, 0%, 100%, 0.8); */
  background-color: #fff;
  box-shadow: rgb(136 165 191 / 48%) 6px 2px 16px 0px, rgb(255 255 255 / 80%) -6px -2px 16px 0px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    height: 60px;
    margin: 0 auto;

    .logo {
      flex: 1;

      a {
        font-size: 18px;
        color: ${Color};
      }
    }

    .nav {
      display: flex;
      justify-content: space-between;
      flex: 3;
      font-size: 18px;
      font-weight: 600;

      a {
        position: relative;
        color: #8f8f8f;
        width: 60px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        transition: all 0.3s;

        &:hover:not(.active) {
          color: ${Color};
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          transform-origin: center;
          transition: all 0.2s;
          background-color: ${Color};
        }

        &.active {
          color: ${Color};

          &::after {
            transform: scaleX(1);
          }
        }
      }
    }

    .btn {
      flex: 1;
      text-align: right;
      a {
        font-size: 20px;
        font-weight: 700;
        color: ${Color};
      }
    }
  }
`;
