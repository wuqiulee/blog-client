import request from '../request';
import { MessageParams, MessageData } from '@/types/message';

// 获取留言列表
export const getMessageList = async (params: MessageParams) => {
  return request({
    url: '/message/list',
    params,
  });
};

// 发表留言
export const createMessage = async (data: MessageData) => {
  return request({
    url: '/message/create',
    method: 'POST',
    data,
  });
};

// 回复留言
export const replyMessage = async (data: MessageData) => {
  return request({
    url: '/message/reply',
    method: 'POST',
    data,
  });
};
