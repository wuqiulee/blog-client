export interface MessageType {
  id: number;
  content: string;
  publishTime: Date;
  nickName: string;
  avatar?: string;
  replyId?: number;
}

export interface MessageParams {
  pageSize?: number;
  pageNum?: number;
}

export interface MessageData {
  nickName: string;
  email?: string;
  content: string;
  replyId?: number;
}
