import React from 'react';
import { useRequest } from 'ahooks';
import { get } from 'loadsh';
import dayjs from 'dayjs';
import { CalendarOutlined, FolderOpenOutlined, TagsOutlined } from '@ant-design/icons';
import { getArticleList } from '@/services/api/article';
import { ArticleType } from '@/types/article';
import { ArticleWrapper } from './style';

const Article: React.FC = () => {
  const { data } = useRequest(getArticleList);
  const articleList = get(data, 'data.result', []);

  return (
    <>
      {articleList.map((item: ArticleType) => (
        <ArticleWrapper>
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
    </>
  );
};

export default Article;