/*
 * @Author: iRuxu
 * @Date: 2022-07-06 16:30:34
 * @LastEditTime: 2022-07-07 20:59:35
 * @Description:
 */
// 1.Create APP
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// 2.Components
import store from "./store/index";
app.use(store);

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);

// 3.Mount DOM
app.mount("#app");
