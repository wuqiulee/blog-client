import React, { useMemo, useState, useCallback } from 'react';
import { useRequest } from 'ahooks';
import { get } from 'loadsh';
import dayjs from 'dayjs';
import { Spin } from 'antd';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getMessageList } from '@/services/api/message';
import { MessageType, MsgInfo } from '@/types/message';
import Editor from '@/components/Editor';
import { MessageWrapper, PaginationWrapper } from './style';
import defaultAvatarUrl from '@/assets/images/avatar.jpg';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

const Message: React.FC = () => {
  const [replyInfo, setReplyInfo] = useState<MsgInfo>({ replyId: 0, nickName: '' });
  const { loading, run, data } = useRequest(getMessageList, {
    defaultParams: [{ pageNum: 0, pageSize: 8 }],
  });
  const messageList = get(data, 'data.result', []);
  const totalCount = get(data, 'data.total', 0);
  const pageNum = get(data, 'data.pageNum', 0);

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

  const onChange = useCallback((page: number, pageSize: number) => {
    run({ pageNum: page - 1, pageSize });
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <Spin spinning={loading} size="large">
      <MessageWrapper>
        <Editor run={run} replyInfo={replyInfo} onClose={onClose} />
        <div className="total">{`${messageList?.length}条留言`}</div>
        {messageList.map((item: MessageType) => (
          <div key={item.id} className="messageItem">
            <img src={item.avatar || defaultAvatarUrl} alt="" />
            <div className="messageBox">
              <div className="top">
                <div>
                  <span className="nickName">{item.nickName}</span>
                  <span className="date">
                    {dayjs(dayjs(item.createTime).format('YYYY-MM-DD')).fromNow()}
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
              {item.children && (
                <div className="childWrap">
                  {item.children.map((child) => (
                    <div className="messageChild" key={child.id}>
                      <img src={child.avatar || defaultAvatarUrl} alt="" />
                      <div className="childBox">
                        <div className="top">
                          <span className="nickName">{child.nickName}</span>
                          <span className="date">
                            {dayjs(dayjs(child.createTime).format('YYYY-MM-DD')).fromNow()}
                          </span>
                        </div>
                        <div className="childContent">
                          <div className="reply">
                            回复<span> @{item.nickName}</span>
                          </div>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: child.content,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <PaginationWrapper
          current={pageNum}
          total={totalCount}
          defaultPageSize={8}
          onChange={onChange}
        />
      </MessageWrapper>
    </Spin>
  );
};

export default Message;
