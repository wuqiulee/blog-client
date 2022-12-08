import request from '../request';

// 获取文章列表
export const getArticleList = async () => {
  return request({
    url: '/article/list',
  });
};
