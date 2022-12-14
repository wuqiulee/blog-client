import React, { useState } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import { Button, Form, Input, Card, Col, Row, Select, Space, message } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { createMessage, replyMessage } from '@/services/api/message';
import { MessageData } from '@/types/message';
import { EditorWrapper, InputWrapper } from './style';
import defaultAvatarUrl from '@/assets/images/avatar.jpg';

const Editor = () => {
  const [avatar, setAvatar] = useState<string>(defaultAvatarUrl);
  const [form] = Form.useForm();

  const controls: any = [
    'text-color',
    'bold',
    'list-ul',
    'list-ol',
    'blockquote',
    'emoji',
    'clear',
  ];

  const onFinish = async (values: MessageData) => {
    console.log(values);
    const res: any = await createMessage({
      ...values,
    });
    if (res?.code === 0) {
      message.success('留言发布成功！');
    }
  };

  const onBlur = () => {
    const nickName = form.getFieldValue('nickName');
    if (/[1-9][0-9]{4,11}/.test(nickName)) {
      const avatarUrl = ` https://q1.qlogo.cn/g?b=qq&nk=${nickName}&s=100`;
      form.setFieldsValue({
        email: `${nickName}@qq.com`,
        avatar: avatarUrl,
        nickName: '',
      });
      setAvatar(avatarUrl);
    } else {
      message.warning('啊哦 这个QQ号好像不对哦');
    }
  };

  return (
    <EditorWrapper>
      <Form form={form} onFinish={onFinish}>
        <div className="userInfo">
          <div className="avatar">
            <img src={avatar} alt="" />
          </div>
          <Form.Item
            name="nickName"
            className="input"
            rules={[{ required: true, message: '请输入昵称！' }]}
          >
            <InputWrapper prefix={<UserOutlined />} onBlur={onBlur} placeholder="昵称" />
          </Form.Item>
          <Form.Item
            name="email"
            className="input"
            rules={[{ required: true, message: '请输入邮箱！' }]}
          >
            <InputWrapper prefix={<MailOutlined />} placeholder="邮箱" />
          </Form.Item>
        </div>
        <Form.Item
          name="content"
          rules={[{ required: true, message: '请输入留言内容！' }]}
          style={{ marginBottom: 10 }}
        >
          <BraftEditor
            // ref={(instance) => setEditorInstance(instance)}
            className="editor"
            controls={controls}
            // value={text}
          />
        </Form.Item>
        <Button size="large" htmlType="submit" className="btn">
          发布
        </Button>
      </Form>
    </EditorWrapper>
  );
};

export default Editor;
