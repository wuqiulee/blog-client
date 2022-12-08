/* eslint-disable no-shadow */
import axios from 'axios';
import { get } from 'loadsh';
import { message } from 'antd';

const request = (config: any) => {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 5000,
  });

  // 请求拦截
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      Authorization: `Bearer ${token}`,
      ...config.headers,
    };
    return config;
  });

  // 响应拦截
  instance.interceptors.response.use(
    (res) => {
      // console.log('res-------', res);
      return res.data ? res.data : res;
    },
    (error) => {
      console.log('error===', error.response);
      const errCode = get(error, 'response.data.code', -1);
      // 统一处理业务接口error提示
      message.error('接口调用失败');
    }
  );

  return instance(config);
};

export default request;
