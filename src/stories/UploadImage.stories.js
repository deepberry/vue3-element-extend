/*
 * @Author: iRuxu
 * @Date: 2022-07-07 17:37:48
 * @LastEditTime: 2022-07-08 00:32:05
 * @Description:上传单张图片（头像、logo等）
 */
import UploadImage from "../components/UploadImage.vue";

export default {
    title: "UploadImage",
    component: UploadImage,
    argTypes: {
        /* backgroundColor: { control: "color" },
        onClick: {},
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        }, */
        "v-model:url": { control: "file" },
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
// Default.args = {
//     auto: true,
//     url: "https://www.deepberry.cn",
//     width : "148px",
//     height : "148px",
// };
