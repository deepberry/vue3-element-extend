/*
 * @Author: iRuxu
 * @Date: 2022-07-07 17:37:48
 * @LastEditTime: 2022-07-08 14:52:13
 * @Description:上传单张图片（头像、logo等）
 */
import UploadImage from "../components/UploadImage.vue";

import "../assets/css/components/UploadImage.less";
export default {
    title: "Example/UploadImage",
    component: UploadImage,
    argTypes: {
        "v-model:url": {
            table: {
                category: "Data",
            },
            name: "v-model:url",
            type: { name: "string", required: true },
            default: "",
            description: "图片路径",
            control: {
                type: "text",
            },
        },
    },
    parameters: {
        componentSource: {
            url: "https://raw.githubusercontent.com/deepberry/vue3-element-extend/master/src/components/UploadImage.vue",
            language: "vue",
        },
    },
};

const Template = (args) => ({
    components: { UploadImage },
    setup() {
        return { args };
    },
    template: '<upload-image v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    auto: true,
    width: "148px",
    height: "148px",
};

export const Preview = Template.bind({});
Preview.args = {
    auto: true,
    width: "148px",
    height: "148px",
    url: "https://console.cnyixun.com/upload/avatar/2022/3/2/8_9860765.png",
};
