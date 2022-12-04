import React, { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { Spin } from 'antd';

interface Router {
  name?: string;
  path: string;
  children?: Router[];
  element: React.ReactNode;
}

// 组件懒加载
const lazyLoad = (component: string) => {
  const path = `pages/${component}`;
  const Module = lazy(() => import(`@/${!component ? 'layout' : path}`));
  return (
    <Suspense
      fallback={
        <Spin
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          tip="正在努力加载中..."
        />
      }
    >
      <Module />
    </Suspense>
  );
};

const routes: Router[] = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/',
    element: lazyLoad(''),
    children: [
      {
        name: '首页',
        path: '/home',
        element: lazyLoad('Home'),
      },
      {
        name: '文章',
        path: '/article',
        element: lazyLoad('Article'),
      },
      {
        name: '标签',
        path: '/tag',
        element: lazyLoad('Tag'),
      },
      {
        name: '分类',
        path: '/category',
        element: lazyLoad('Category'),
      },
      {
        name: '说说',
        path: '/say',
        element: lazyLoad('Say'),
      },
      {
        name: '留言板',
        path: '/message',
        element: lazyLoad('Message'),
      },
      {
        name: '建站日志',
        path: '/log',
        element: lazyLoad('Log'),
      },
      {
        name: '关于',
        path: '/about',
        element: lazyLoad('About'),
      },
    ],
  },
];

export default routes;
