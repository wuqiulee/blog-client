import React from 'react';
import { useRequest } from 'ahooks';
import { get } from 'loadsh';
import dayjs from 'dayjs';
import { getSayList } from '@/services/api/say';
import { SayWrapper } from './style';
import { SayType } from '@/types/say';

const Say: React.FC = () => {
  const { data } = useRequest(getSayList);
  const sayList = get(data, 'data.result', []);

  return (
    <>
      {sayList.map((item: SayType) => (
        <SayWrapper>
          <div className="content">
            <div>{item.content}</div>
          </div>
          <div className="date">—— {dayjs(item.publishTime).format('YYYY-MM-DD HH:mm:ss')}</div>
        </SayWrapper>
      ))}
    </>
  );
};

export default Say;
