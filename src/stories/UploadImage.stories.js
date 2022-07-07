/*
 * @Author: iRuxu
 * @Date: 2022-07-07 17:37:48
 * @LastEditTime: 2022-07-07 20:58:30
 * @Description:上传单张图片（头像、logo等）
 */
import UploadImage from "../components/UploadImage.vue";

export default {
    title: "Example/UploadImage",
    component: UploadImage,
    argTypes: {
        /* backgroundColor: { control: "color" },
        onClick: {},
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        }, */
    },
};

const Template = (args) => ({
    components: { UploadImage },
    setup() {
        return { args };
    },
    template: '<upload-image v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    primary: true,
    label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Button",
};
