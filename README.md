# Vue3 Element Extend

一个对 element plus 扩展的组件库，解决部分组件~~太屎~~或延展性太差的问题。  
组件需通过 es6 module 形式引入，本身项目环境需按照[vue-boilerplate](https://github.com/deepberry/vue-boilerplate)进行配置。

## Get Started

### Install

```shell
npm install @deepberry/vue3-element-extend
```

### Import

#### 1.局部引入单个组件

```javascript
import { UploadImage } from "@deepberry/vue3-element-extend";
export {components : UploadImage}
```

#### 2.全局引入单个组件

```javascript
import { UploadImage } from "@deepberry/vue3-element-extend";
app.component("UploadImage", UploadImage);
```

#### 2.全局引入全部组件

```javascript
import DeepBerryUI from "@deepberry/vue3-element-extend";
app.use(DeepBerryUI);
```

### API Reference

查看对应组件属性与事件等 https://admin.deepberry.cn/vue3-element-extend

## Dev

### 新增组件

1. src/components/下创建
2. index.js 添加 export

### 本地调试

```shell
npm install
npm run storybook
```

## Todo

-   [ ] 测试模块
