import request from '../request';

interface Params {
  pageSize?: number;
  pageNum?: number;
}

// 获取说说列表
export const getSayList = async (params: Params) => {
  return request({
    url: '/say/list',
    params,
  });
};
