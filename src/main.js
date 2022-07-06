/*
 * @Author: iRuxu
 * @Date: 2022-07-06 16:30:34
 * @LastEditTime: 2022-07-06 16:47:38
 * @Description:
 */
// 1.Create APP
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// 2.Components
import { createHead } from "@vueuse/head";
const head = createHead();
app.use(head);

import store from "./store/index";
app.use(store);

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);

// 3.Mount DOM
app.mount("#app");
