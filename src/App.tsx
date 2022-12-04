import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import routes from '@/router';
// import { store, persistor } from '@/store';

const Router: React.FC = () => {
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
