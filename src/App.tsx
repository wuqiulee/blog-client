import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import routes from '@/router';

const Router: React.FC = () => {
  // 路由跳转自动回到顶部
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [window.location.pathname]);
  return <>{useRoutes(routes)}</>;
};

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      {/* <Provider store={store}> */}
      <Router />
      {/* </Provider> */}
    </ConfigProvider>
  );
};

export default App;
