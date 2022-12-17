import React, { useCallback } from 'react';
import { useRequest } from 'ahooks';
import { get } from 'loadsh';
import dayjs from 'dayjs';
import { getSayList } from '@/services/api/say';
import { SayWrapper, PaginationWrapper } from './style';
import { SayType } from '@/types/say';

const Say: React.FC = () => {
  const { run, data } = useRequest(getSayList, {
    defaultParams: [{ pageNum: 0, pageSize: 8 }],
  });
  const sayList = get(data, 'data.result', []);
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
      {sayList.map((item: SayType) => (
        <SayWrapper key={item.id}>
          <div className="content">
            <div>{item.content}</div>
          </div>
          <div className="date">—— {dayjs(item.publishTime).format('YYYY-MM-DD HH:mm:ss')}</div>
        </SayWrapper>
      ))}
      <PaginationWrapper
        current={pageNum}
        total={totalCount}
        defaultPageSize={8}
        onChange={onChange}
      />
    </>
  );
};

export default Say;
