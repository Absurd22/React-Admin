//路由名在src/locales/zh-CN/menu.ts中修改相应文字，或者在config/defaultSettings.ts中添加menu对象，修改locale属性为false.
// menu: {
//   locale: false
// }
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user/login',
        layout: false,
        name: 'login',
        component: './user/Login',
      },
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        name: 'register-result',
        icon: 'smile',
        path: '/user/register-result',
        component: './user/register-result',
      },
      {
        name: 'register',
        icon: 'smile',
        path: '/user/register',
        component: './user/register',
      },
      {
        component: '404',
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    routes: [
      {
        path: '/dashboard',
        redirect: '/dashboard/analysis',
      },
      {
        name: 'analysis',
        icon: 'smile',
        path: '/dashboard/analysis',
        component: './dashboard/analysis',
      },
      {
        name: 'monitor',
        icon: 'smile',
        path: '/dashboard/monitor',
        component: './dashboard/monitor',
      },
      {
        name: 'workplace',
        icon: 'smile',
        path: '/dashboard/workplace',
        component: './dashboard/workplace',
      },
    ],
  },
  {
    path: '/orderSearch',
    icon: 'table',
    name: 'orderSearch',
    routes: [
      {
        path: '/orderSearch',
        redirect: '/orderSearch/search-list',
      },
      {
        name: 'table-list',
        icon: 'smile',
        path: '/orderSearch/search-list',
        component: './orderSearch/search-list',
      },
      {
        path: '/orderSearch/search',
        name: 'search-list',
        component: './orderSearch/search',
        routes: [
          {
            path: '/orderSearch/search',
            redirect: '/orderSearch/search/articles',
          },
          {
            name: 'articles',
            icon: 'smile',
            path: '/orderSearch/search/articles',
            component: './orderSearch/search/articles',
          },
          {
            name: 'projects',
            icon: 'smile',
            path: '/orderSearch/search/projects',
            component: './orderSearch/search/projects',
          },
          {
            name: 'applications',
            icon: 'smile',
            path: '/orderSearch/search/applications',
            component: './orderSearch/search/applications',
          },
        ],
      }
      // {
      //   name: 'basic-list',
      //   icon: 'smile',
      //   path: '/orderSearch/newOrder-list',
      //   component: './orderSearch/newOrder-list',
      // },
      // {
      //   name: 'card-list',
      //   icon: 'smile',
      //   path: '/orderSearch/card-list',
      //   component: './orderSearch/card-list',
      // },
    ],
  },
  {
    path: '/resume',
    icon: 'form',
    name: 'resume',
    routes: [
      {
        path: '/resume',
        redirect: '/resume/resume-order',
      },
      {
        name: 'resume-order',
        icon: 'smile',
        path: '/resume/resume-order',
        component: './resume/resume-order',
      },
      {
        name: 'resume-setUp',
        icon: 'smile',
        path: '/resume/resume-setUp',
        component: './resume/resume-setUp',
      },
      // {
      //   name: 'advanced-form',
      //   icon: 'smile',
      //   path: '/resume/advanced-form',
      //   component: './resume/advanced-form',
      // },
    ],
  },
  {
    path: '/resumeModify',
    name: 'resumeModify',
    icon: 'profile',
    routes: [
      {
        path: '/resumeModify',
        redirect: '/resumeModify/newOrder',
      },
      {
        name: 'newOrder',
        icon: 'smile',
        path: '/resumeModify/newOrder',
        component: './resumeModify/newOrder',
      },
      {
        name: 'orderProcess',
        icon: 'smile',
        path: '/resumeModify/orderProcess',
        component: './resumeModify/orderProcess',
      },
    ],
  },
  {
    name: 'interviews',
    icon: 'warning',
    path: '/interviews',
    routes: [
      {
        path: '/interviews',
        redirect: '/interviews/newOrder',
      },
      {
        name: 'newOrder',
        icon: 'smile',
        path: '/interviews/newOrder',
        component: './interviews/newOrder',
      },
      {
        name: 'processOrder',
        icon: 'smile',
        path: '/interviews/orderProcess',
        component: './interviews/orderProcess',
      },
      // {
      //   name: '500',
      //   icon: 'smile',
      //   path: '/interviews/500',
      //   component: './interviews/500',
      // },
    ],
  },
  {
    name: 'result',
    icon: 'CheckCircleOutlined',
    path: '/result',
    routes: [
      {
        path: '/result',
        redirect: '/result/success',
      },
      {
        name: 'success',
        icon: 'smile',
        path: '/result/success',
        component: './result/success',
      },
      {
        name: 'fail',
        icon: 'smile',
        path: '/result/fail',
        component: './result/fail',
      },
    ],
  },
  {
    name: 'account',
    icon: 'user',
    path: '/account',
    routes: [
      {
        path: '/account',
        redirect: '/account/center',
      },
      {
        name: 'center',
        icon: 'smile',
        path: '/account/center',
        component: './account/center',
      },
      {
        name: 'settings',
        icon: 'smile',
        path: '/account/settings',
        component: './account/settings',
      },
    ],
  },
  //图形编辑器
  // {
  //   name: 'editor',
  //   icon: 'highlight',
  //   path: '/editor',
  //   routes: [
  //     {
  //       path: '/editor',
  //       redirect: '/editor/flow',
  //     },
  //     {
  //       name: 'flow',
  //       icon: 'smile',
  //       path: '/editor/flow',
  //       component: './editor/flow',
  //     },
  //     {
  //       name: 'mind',
  //       icon: 'smile',
  //       path: '/editor/mind',
  //       component: './editor/mind',
  //     },
  //     {
  //       name: 'koni',
  //       icon: 'smile',
  //       path: '/editor/koni',
  //       component: './editor/koni',
  //     },
  //   ],
  // },
  {
    path: '/',
    redirect: '/dashboard/analysis',
  },
  {
    component: '404',
  },
]