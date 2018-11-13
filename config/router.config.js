export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: 'home',
    routes: [
      // dashboard
      { path: '/', redirect: '/home' },
      {
        path: '/home',
        name: 'home',
        icon: 'home',
        component: './Dashboard/Analysis',
        authority: 'home',
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        authority: 'dashboard',
        routes: [
          {
            path: '/dashboard/mapshow',
            name: 'mapshow',
            component: './Dashboard/MapShow',
            authority: 'dashboard/mapshow',
          },
          {
            path: '/dashboard/listshow',
            name: 'listshow',
            component: './Dashboard/ListShow',
            authority: 'dashboard/listshow',
          },
          /*
          {
            path: '/dashboard/monitor',
            name: 'monitor',
            component: './Dashboard/Monitor',
          },
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: './Dashboard/Workplace',
          },
          */
        ],
      },
      {
        path: '/datamanager',
        name: 'datamanager',
        icon: 'database',
        authority: 'datamanager',
        routes: [
          {
            path: '/datamanager/datapush',
            name: 'datapush',
            component: './DataManager/PushData',
            authority: 'datamanager/datapush',
          },
          {
            path: '/datamanager/historyrecord',
            name: 'historyrecord',
            component: './DataManager/HistoryRecord',
            authority: 'datamanager/historyrecord',
          },
        ],
      },

      {
        path: '/devicemanager',
        name: 'devicemanager',
        icon: 'usb',
        authority: 'devicemanager',
        routes: [
          {
            path: '/devicemanager/devicelist',
            name: 'devicelist',
            component: './DeviceManager/DeviceList',
            authority: 'devicemanager/devicelist',
          },
          {
            path: '/devicemanager/adddevice',
            name: 'adddevice',
            component: './DeviceManager/AddDevice',
            authority: 'devicemanager/adddevice',
          },
          {
            path: '/devicemanager/devicegroup',
            name: 'devicegroup',
            component: './DeviceManager/DeviceGroup',
            authority: 'devicemanager/devicegroup',
          },
          {
            path: '/devicemanager/cyclemanager',
            name: 'cyclemanager',
            component: './DeviceManager/CycleManager',
            authority: 'devicemanager/cyclemanager',
          },
        ],
      },

      {
        path: '/triggermanager',
        name: 'triggermanager',
        icon: 'tool',
        authority: 'triggermanager',
        routes: [
          {
            path: '/triggermanager/triggerlist',
            name: 'triggerlist',
            component: './TriggerManager/TriggerList',
            authority: 'triggermanager/triggerlist',
          },
          {
            path: '/triggermanager/addtrigger',
            name: 'addtrigger',
            component: './TriggerManager/AddTrigger',
            authority: 'triggermanager/addtrigger',
          },
          {
            path: '/triggermanager/alarmcontact',
            name: 'alarmcontact',
            component: './TriggerManager/AlarmContact',
            authority: 'triggermanager/alarmcontact',
          },
          {
            path: '/triggermanager/alarmrecord',
            name: 'alarmrecord',
            component: './TriggerManager/AlarmRecord',
            authority: 'triggermanager/alarmrecord',
          },
        ],
      },

      {
        path: '/useradmin',
        name: 'useradmin',
        icon: 'user',
        authority: 'useradmin',
        routes: [
          {
            path: '/useradmin/usermanager',
            name: 'usermanager',
            component: './UserAdmin/UserManager',
            authority: 'useradmin/usermanager',
          },
          {
            path: '/useradmin/rolemanager',
            name: 'rolemanager',
            component: './UserAdmin/RoleManager',
            authority: 'useradmin/rolemanager',
          },
          {
            path: '/useradmin/groupmanager',
            name: 'groupmanager',
            component: './UserAdmin/GroupManager',
            authority: 'useradmin/groupmanager',
          },
        ],
      },

      {
        path: '/examples',
        name: 'examples',
        icon: 'code-sandbox',
        routes: [
          {
            path: '/examples/form',
            icon: 'form',
            name: 'form',
            routes: [
              {
                path: '/examples/form/basic-form',
                name: 'basicform',
                component: './Examples/Forms/BasicForm',
              },
              {
                path: '/examples/form/advanced-form',
                name: 'advancedform',
                component: './Examples/Forms/AdvancedForm',
              },
            ],
          },
          {
            path: '/examples/list',
            icon: 'table',
            name: 'list',
            routes: [
              {
                path: '/examples/list/table-list',
                name: 'searchtable',
                component: './Examples/List/TableList',
              },
              {
                path: '/examples/list/basic-list',
                name: 'basiclist',
                component: './Examples/List/BasicList',
              },
              {
                path: '/examples/list/card-list',
                name: 'cardlist',
                component: './Examples/List/CardList',
              },
              {
                path: '/examples/list/search',
                name: 'searchlist',
                component: './Examples/List/List',
                routes: [
                  {
                    path: '/examples/list/search',
                    redirect: '/examples/list/search/articles',
                  },
                  {
                    path: '/examples/list/search/articles',
                    name: 'articles',
                    component: './Examples/List/Articles',
                  },
                  {
                    path: '/examples/list/search/projects',
                    name: 'projects',
                    component: './Examples/List/Projects',
                  },
                  {
                    path: '/examples/list/search/applications',
                    name: 'applications',
                    component: './Examples/List/Applications',
                  },
                ],
              },
            ],
          },
          {
            path: '/examples/profile',
            name: 'profile',
            icon: 'profile',
            routes: [
              // profile
              {
                path: '/examples/profile/basic',
                name: 'basic',
                component: './Examples/Profile/BasicProfile',
              },
              {
                path: '/examples/profile/advanced',
                name: 'advanced',
                component: './Examples/Profile/AdvancedProfile',
              },
            ],
          },
          {
            name: 'result',
            icon: 'check-circle-o',
            path: '/examples/result',
            routes: [
              // result
              {
                path: '/examples/result/success',
                name: 'success',
                component: './Examples/Result/Success',
              },
              { path: '/examples/result/fail', name: 'fail', component: './Examples/Result/Error' },
            ],
          },
          {
            name: 'exception',
            icon: 'warning',
            path: '/examples/exception',
            routes: [
              // exception
              {
                path: '/examples/exception/403',
                name: 'not-permission',
                component: './Exception/403',
              },
              {
                path: '/examples/exception/404',
                name: 'not-find',
                component: './Exception/404',
              },
              {
                path: '/examples/exception/500',
                name: 'server-error',
                component: './Exception/500',
              },
              {
                path: '/examples/exception/trigger',
                name: 'trigger',
                hideInMenu: true,
                component: './Exception/TriggerException',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
