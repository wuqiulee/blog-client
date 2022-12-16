import React, { useMemo, useState, useCallback } from 'react';
import { useRequest } from 'ahooks';
import { get } from 'loadsh';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getMessageList } from '@/services/api/message';
import { MessageType, MsgInfo } from '@/types/message';
import Editor from '@/components/Editor';
import { MessageWrapper } from './style';
import defaultAvatarUrl from '@/assets/images/avatar.jpg';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

const Message: React.FC = () => {
  const [replyInfo, setReplyInfo] = useState<MsgInfo>({ replyId: 0, nickName: '' });
  const { run, data } = useRequest(getMessageList);
  const messageList = get(data, 'data.result', []);
  const msgArr = messageList.filter((v: MessageType) => !v.replyId);

  const messageData = useMemo(() => {
    messageList.forEach((msg: MessageType) => {
      if (msg.replyId) {
        const ret = msgArr.find((v: MessageType) => v.id === msg.replyId);
        if (ret.children) {
          ret.children.push(msg);
        } else {
          ret.children = [msg];
        }
      }
    });
    return msgArr;
  }, [messageList]);

  const replyMsg = (msgInfo: MsgInfo) => {
    setReplyInfo(msgInfo);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 留言回复tag关闭的回调
  const onClose = useCallback(() => {
    setReplyInfo({ ...replyInfo, nickName: '' });
  }, []);

  return (
    <MessageWrapper>
      <Editor run={run} replyInfo={replyInfo} onClose={onClose} />
      <div className="total">{`${messageData?.length}条留言`}</div>
      {messageData.map((item: MessageType) => (
        <div className="messageItem">
          <img src={item.avatar || defaultAvatarUrl} alt="" />
          <div className="messageBox">
            <div className="top">
              <div>
                <span className="nickName">{item.nickName}</span>
                <span className="date">
                  {dayjs(dayjs(item.publishTime).format('YYYY-MM-DD')).fromNow()}
                </span>
              </div>
              <span
                className="reply"
                onClick={() => replyMsg({ replyId: item.id, nickName: item.nickName })}
              >
                回复
              </span>
            </div>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: item.content,
              }}
            />
          </div>
        </div>
      ))}
    </MessageWrapper>
  );
};

export default Message;
