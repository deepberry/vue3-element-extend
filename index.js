/*
 * @Author: iRuxu
 * @Date: 2022-07-07 17:41:11
 * @LastEditTime: 2022-07-07 17:57:45
 * @Description:vue扩展组件库
 */
import UploadImage from "./src/components/UploadImage.vue";
const components = {
    UploadImage,
};

const install = function (Vue) {
    Object.keys(components).forEach((key) => {
        Vue.component(components[key].name, components[key]);
    });
};

export default {
    install,
    ...components,
};
