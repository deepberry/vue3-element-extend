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
    auto: false,
    width: "148px",
    height: "148px",
    url: "test/iruxu/iruxu.png",
};
