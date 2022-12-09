import request from '../request';

// 获取说说列表
export const getSayList = async () => {
  return request({
    url: '/say/list',
  });
};
