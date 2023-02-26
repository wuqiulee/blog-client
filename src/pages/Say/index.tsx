import React, { useCallback } from 'react';
import { useRequest } from 'ahooks';
import { get } from 'loadsh';
import dayjs from 'dayjs';
import { Spin } from 'antd';
import { getSayList } from '@/services/api/say';
import { SayWrapper, PaginationWrapper, TitleWrapper } from './style';
import { SayType } from '@/types/say';

const Say: React.FC = () => {
  const { loading, run, data } = useRequest(getSayList, {
    defaultParams: [{ pageNum: 0, pageSize: 10 }],
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
    <Spin spinning={loading} size="large">
      <TitleWrapper>我的说说</TitleWrapper>
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
        defaultPageSize={10}
        onChange={onChange}
      />
    </Spin>
  );
};

export default Say;
