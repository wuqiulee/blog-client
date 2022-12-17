import request from '../request';

interface Params {
  pageSize?: number;
  pageNum?: number;
}

// 获取日志列表
export const getLogList = async (params: Params) => {
  return request({
    url: '/log/list',
    params,
  });
};
