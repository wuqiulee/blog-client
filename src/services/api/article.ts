import request from '../request';

interface Params {
  pageSize?: number;
  pageNum?: number;
}

// 获取文章列表
export const getArticleList = async (params: Params) => {
  return request({
    url: '/article/list',
    params,
  });
};

// 查询文章
export const queryArticle = async (params: { id: number }) => {
  return request({
    url: '/article/query',
    params,
  });
};
