import React, { useCallback } from 'react';
import { useRequest } from 'ahooks';
import { get } from 'loadsh';
import { getLogList } from '@/services/api/log';
import { LogWrapper, PaginationWrapper } from './style';

type LogType = {
  id: number;
  content: string;
  logDate: string;
};

const Log: React.FC = () => {
  const { run, data } = useRequest(getLogList, {
    defaultParams: [{ pageNum: 0, pageSize: 10 }],
  });
  const logList = get(data, 'data.result', []);
  const totalCount = get(data, 'data.total', 0);
  const pageNum = get(data, 'data.pageNum', 0);

  const onChange = useCallback((page: number, pageSize: number) => {
    run({ pageNum: page - 1, pageSize });
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      {logList.map((item: LogType) => (
        <LogWrapper key={item.id}>
          <div className="content">
            <div>{item.content}</div>
          </div>
          <div className="date">—— {item.logDate}</div>
        </LogWrapper>
      ))}
      <PaginationWrapper
        current={pageNum}
        total={totalCount}
        defaultPageSize={10}
        onChange={onChange}
      />
    </>
  );
};

export default Log;
