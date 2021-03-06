# Vue3 Element Extend

一个对 element plus 扩展的组件库，解决部分组件~~太屎~~或延展性太差的问题。  
组件需通过 es6 module 形式引入，本身项目环境需按照[vue-boilerplate](https://github.com/deepberry/vue-boilerplate)进行配置。

## Get Started

### Install

```shell
npm install @deepberry/vue3-element-extend
```

### Import

#### A.局部引入单个组件

```javascript
import { UploadImage } from "@deepberry/vue3-element-extend";
export {components : UploadImage}
```

#### B.全局引入单个组件

```javascript
import { UploadImage } from "@deepberry/vue3-element-extend";
app.component("UploadImage", UploadImage);
```

#### C.全局引入全部组件

```javascript
import DeepBerryUI from "@deepberry/vue3-element-extend";
app.use(DeepBerryUI);
```

### API Reference

查看对应组件属性与事件等 https://admin.deepberry.cn/vue3-element-extend
<img width="1081" alt="image" src="https://user-images.githubusercontent.com/8476969/179482812-b54f5163-09ec-469b-9119-7a6bf33f698d.png">

## Dev

### 新增组件

1. src/components/下创建
2. src/stories 下编写 story
3. index.js 添加 export

### 本地调试

```shell
npm install
npm run serve
npm run storybook
```

## Todo

-   [ ] 测试模块
