import React from 'react';
import { useRequest } from 'ahooks';
import { get } from 'loadsh';
import { getMessageList } from '@/services/api/message';
import { MessageType } from '@/types/message';
import Editor from '@/components/Editor';

const Message: React.FC = () => {
  const { data } = useRequest(getMessageList);
  const messageList = get(data, 'data.result', []);
  const arr = messageList.filter((v: MessageType) => !v.replyId);
  console.log(arr);
  return (
    <div>
      <Editor />
      {messageList.map((item: MessageType) => (
        <div>2</div>
      ))}
    </div>
  );
};

export default Message;
