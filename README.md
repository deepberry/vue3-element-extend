# Vue3 Element Extend

一个对 element plus 扩展的组件库，解决部分组件~~太屎~~或延展性太差的问题。  
暂时只支持直接通过 es6 module 形式引入，本身项目环境需按照[vue-boilerplate](https://github.com/deepberry/vue-boilerplate)进行配置。

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

## API Reference

#### 1.本地最新版

```shell
npm run storybook
```

#### 2.线上文档版

查看对应组件属性与事件等
