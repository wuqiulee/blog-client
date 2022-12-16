import React, { useState } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import { Button, Form, Input, Tag, Col, Row, Select, Space, message } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { createMessage, replyMessage } from '@/services/api/message';
import { MessageData, MessageParams, MsgInfo } from '@/types/message';
import { EditorWrapper, InputWrapper } from './style';
import defaultAvatarUrl from '@/assets/images/avatar.jpg';

type Iprops = {
  run: (params: MessageParams) => void;
  onClose: () => void;
  replyInfo: MsgInfo;
};

const Editor: React.FC<Iprops> = ({ run, onClose, replyInfo }) => {
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

  const publishMsg = async () => {
    const values = await form.validateFields();
    const params = { ...values, avatar, content: values.content.toHTML() };
    const { nickName, replyId } = replyInfo;
    const res: any = nickName
      ? await replyMessage({ ...params, replyId })
      : await createMessage(params);
    if (res?.code === 0) {
      run({ pageNum: 0, pageSize: 8 });
      form.resetFields(['content']);
      message.success('留言发布成功！');
    }
  };

  const onPressEnter = () => {
    const nickName = form.getFieldValue('nickName');
    if (!nickName?.trim()) {
      return;
    }
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
      <Form form={form}>
        <div className="userInfo">
          <div className="avatar">
            <img src={avatar} alt="" />
          </div>
          <Form.Item name="nickName" className="input" rules={[{ required: true }]}>
            <InputWrapper
              prefix={<UserOutlined />}
              onPressEnter={onPressEnter}
              placeholder="昵称"
              size="large"
            />
          </Form.Item>
          <Form.Item name="email" className="input" rules={[{ required: true }]}>
            <InputWrapper prefix={<MailOutlined />} placeholder="邮箱" size="large" />
          </Form.Item>
        </div>
        <Form.Item name="content" rules={[{ required: true }]} style={{ marginBottom: 10 }}>
          <BraftEditor
            className="editor"
            controls={controls}
            placeholder="在「昵称」处填写QQ号，Enther获取「头像」和「QQ邮箱」"
          />
        </Form.Item>
        <div className="replyBox">
          {replyInfo.nickName && (
            <Tag closable onClose={onClose} style={{ fontSize: 14 }}>
              回复 @{replyInfo.nickName}
            </Tag>
          )}
          <Button size="large" onClick={publishMsg} className="btn">
            发布
          </Button>
        </div>
      </Form>
    </EditorWrapper>
  );
};

export default Editor;
