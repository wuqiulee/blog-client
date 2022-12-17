import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { get } from 'loadsh';
import dayjs from 'dayjs';
import { CalendarOutlined, FolderOpenOutlined, TagsOutlined } from '@ant-design/icons';
import { getArticleList } from '@/services/api/article';
import { ArticleType } from '@/types/article';
import { ArticleWrapper, PaginationWrapper } from './style';

const Article: React.FC = () => {
  const navigate = useNavigate();
  const { run, data } = useRequest(getArticleList, {
    defaultParams: [{ pageNum: 0, pageSize: 8 }],
  });
  const articleList = get(data, 'data.result', []);
  const totalCount = get(data, 'data.total', 0);
  const pageNum = get(data, 'data.pageNum', 0);

  const onChange = useCallback((page: number, pageSize: number) => {
    run({ pageNum: page - 1, pageSize });
    window.scrollTo({
      top: 0,
    });
  }, []);

  const gotoDetail = (id: number) => navigate(`/article/${id}`);

  return (
    <>
      {articleList.map((item: ArticleType) => (
        <ArticleWrapper key={item.id} onClick={() => gotoDetail(item.id)}>
          <h3>{item.title}</h3>
          <div>
            <span>
              <CalendarOutlined style={{ marginRight: 4 }} />
              {dayjs(item.createTime).format('YYYY-MM-DD')}
            </span>
            <span>
              <FolderOpenOutlined style={{ marginRight: 4 }} />
              {item.category}
            </span>
            <span>
              <TagsOutlined style={{ marginRight: 4 }} />
              {item.tag.join(', ')}
            </span>
          </div>
        </ArticleWrapper>
      ))}
      <PaginationWrapper
        current={pageNum}
        total={totalCount}
        defaultPageSize={8}
        onChange={onChange}
      />
    </>
  );
};

export default Article;
