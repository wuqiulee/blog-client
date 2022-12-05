import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { get } from 'loadsh';
import { GlobalOutlined } from '@ant-design/icons';
import { Wrapper } from './style';

interface DayDateType {
  date?: string;
  title?: string;
}

const EveryDay: React.FC = () => {
  const [dayData, setDayData] = useState<DayDateType[]>([]);
  const getEveryDay = async () => {
    const res = await axios.get('https://api.oick.cn/lishi/api.php');
    const data = get(res, 'data.result', []);
    const dataList = [data[0]];
    if (data.length > 1) {
      dataList.push(data.at(-1));
    }
    setDayData(dataList);
  };

  useEffect(() => {
    getEveryDay();
  }, []);
  return (
    <Wrapper>
      <header>历史上的今天</header>
      {dayData.map((item) => (
        <div key={item?.title} className="box">
          <div className="date">
            <GlobalOutlined />
            {item?.date}
          </div>
          <div className="title">{item?.title}</div>
        </div>
      ))}
    </Wrapper>
  );
};

export default EveryDay;
