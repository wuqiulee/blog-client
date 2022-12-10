import React from 'react';
import { useParams } from 'react-router-dom';
import Editor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useRequest } from 'ahooks';
import { get } from 'loadsh';
import dayjs from 'dayjs';
import { CalendarOutlined, FolderOpenOutlined, TagsOutlined } from '@ant-design/icons';
import { queryArticle } from '@/services/api/article';
import { Wrapper } from './style';

const ArticleDetail = () => {
  const { id } = useParams();
  const { data } = useRequest(queryArticle, {
    defaultParams: [{ id: Number(id) }],
  });
  const { title, createTime, content, category, tag = [] } = get(data, 'data.result[0]', {});
  return (
    <Wrapper>
      <h3>{title}</h3>
      <div className="explain">
        <span>
          <CalendarOutlined style={{ marginRight: 4 }} />
          {dayjs(createTime).format('YYYY-MM-DD')}
        </span>
        <span>
          <FolderOpenOutlined style={{ marginRight: 4 }} />
          {category}
        </span>
        <span>
          <TagsOutlined style={{ marginRight: 4 }} />
          {tag.join(', ')}
        </span>
      </div>
      <Editor
        editorId="my-editor"
        modelValue={content}
        previewTheme="default"
        // onHtmlChanged={() => {
        //   setEditorShow(true);
        // }}
        previewOnly
      />
    </Wrapper>
  );
};

export default ArticleDetail;
