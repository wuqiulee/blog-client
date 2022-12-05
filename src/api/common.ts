import request from '@/services';

// 获取历史上的今天
export const getEveryDay = async () => {
  return request({
    url: 'https://api.oick.cn/lishi/api.php',
  });
};
