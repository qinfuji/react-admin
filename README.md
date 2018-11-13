### 描述
  统一监测云平台是在ant design pro 2的基础上开发


### 目录结构
    config
      config.js
      plugin.config.js
      router.config.js  项目中所有的路由定义
    mock  接口模拟包，使用该接口
    public
    script
    src
      assets  资源文件
      components 项目通用组件
      e2e
      layout  项目布局
      locals   国际化文件
      modals   全局对话框
        index.js  所有对话框在这里注册
      models   项目数据模型， 项目中模块的数据，action都在这里配置，使用dva实现
      pages    项目中的所有页面
      services  项目中的服务接口
    tests

### 功能权限
    项目的权限当前在router.config.js中定义，在实际开发中请定义各个route的权限。后期需要有服务端推送权限，并在后端绑定权限所所对应的数据或接口。
    在开发阶段为前后端独立开发，在mocks/user.js POST /api/login/account模拟了拥有的权限。

### 项目建议规范
    1、项目中的全局数据模型在 src/models下定义
    2、项目中单页的数据模型可以在pages下对应的目录中定义
    3、项目严格按照单项数据流的规范，在view中使用dav的dispatch进行action的调用，在model中进行服务调用。
    4、在开发service是请先定义好接口规范，在mock中模拟实现

### 参考实现
    项目将原有ant design pro的demo文件全部迁移到src/Examples下，可以参考一下的文件实现
    增加了OpenDomal的功能，演示了通用对话框的实现，如果需要通用对话框可以参考实现。

### 技术文档
    [ant design pro 2](https://pro.ant.design/docs/graph-cn)
    [Ant Design of React](https://ant.design/docs/react/introduce-cn)
