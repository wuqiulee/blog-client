export interface MessageType {
  id: number;
  content: string;
  createTime: Date;
  nickName: string;
  avatar?: string;
  replyId?: number;
  children?: MessageType[];
}

export interface MessageParams {
  pageSize?: number;
  pageNum?: number;
}

export interface MessageData {
  nickName: string;
  email?: string;
  content: any;
  replyId?: number;
  avatar?: string;
}

export interface MsgInfo {
  replyId: number;
  nickName: string;
}
