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

      // forms
      /*
      {
        path: '/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/form/basic-form',
            name: 'basicform',
            component: './Forms/BasicForm',
          },
          {
            path: '/form/step-form',
            name: 'stepform',
            component: './Forms/StepForm',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/form/step-form',
                redirect: '/form/step-form/info',
              },
              {
                path: '/form/step-form/info',
                name: 'info',
                component: './Forms/StepForm/Step1',
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: './Forms/StepForm/Step2',
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: './Forms/StepForm/Step3',
              },
            ],
          },
          {
            path: '/form/advanced-form',
            name: 'advancedform',
            authority: ['admin'],
            component: './Forms/AdvancedForm',
          },
        ],
      },
      // list
      {
        path: '/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/list/table-list',
            name: 'searchtable',
            component: './List/TableList',
          },
          {
            path: '/list/basic-list',
            name: 'basiclist',
            component: './List/BasicList',
          },
          {
            path: '/list/card-list',
            name: 'cardlist',
            component: './List/CardList',
          },
          {
            path: '/list/search',
            name: 'searchlist',
            component: './List/List',
            routes: [
              {
                path: '/list/search',
                redirect: '/list/search/articles',
              },
              {
                path: '/list/search/articles',
                name: 'articles',
                component: './List/Articles',
              },
              {
                path: '/list/search/projects',
                name: 'projects',
                component: './List/Projects',
              },
              {
                path: '/list/search/applications',
                name: 'applications',
                component: './List/Applications',
              },
            ],
          },
        ],
      },
      {
        path: '/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: '/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/advanced',
            name: 'advanced',
            authority: ['admin'],
            component: './Profile/AdvancedProfile',
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/result',
        routes: [
          // result
          {
            path: '/result/success',
            name: 'success',
            component: './Result/Success',
          },
          { path: '/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },*/
      {
        component: '404',
      },
    ],
  },
];
