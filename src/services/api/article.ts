import request from '../request';

// 获取文章列表
export const getArticleList = async () => {
  return request({
    url: '/article/list',
  });
};

// 查询文章
export const queryArticle = async (params: { id: number }) => {
  return request({
    url: '/article/query',
    params,
  });
};
