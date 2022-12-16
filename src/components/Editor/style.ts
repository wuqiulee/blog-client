import styled from 'styled-components';
import { Input } from 'antd';

export const EditorWrapper = styled.div`
  .editor {
    border: 1px solid #f9f9f9;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    max-height: 200px;
    overflow: hidden;
    border: 1px solid #d9d9d9;
    .public-DraftEditor-content {
      height: 180px;
      overflow: auto;
    }
  }

  .userInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    .avatar {
      flex: 1;
      img {
        width: 80px;
        height: 80px;
        display: block;
        border-radius: 10px;
        flex: 1;
      }
    }
    .input {
      margin-bottom: 0;
      flex: 4;
      margin-left: 50px;
    }
  }

  .replyBox {
    overflow: hidden;

    .btn {
      float: right;
    }
  }
`;

export const InputWrapper = styled(Input)`
  height: 50px;
`;
