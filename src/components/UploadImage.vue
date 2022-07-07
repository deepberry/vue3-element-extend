<template>
    <div class="w-upload-image">
        <div v-if="data" class="u-image" :style="{ width, height }">
            <img :src="preview" />
            <i class="u-image-mask"></i>
            <i class="u-image-delete el-icon-delete" title="移除" @click="remove"></i>
        </div>
        <div v-else class="u-upload el-upload el-upload--picture-card" @click="select">
            <i class="el-icon-plus"></i>
        </div>
        <input class="u-upload-input" type="file" @change="upload" ref="uploadInput" />
    </div>
</template>

<script>
export default {
    name: "UploadImage",
    props: [
        /**是否使用默认接口自动上传 */
        {
            name: "auto",
            type: Boolean,
            default: true,
        },
        /**当前的图片地址 */
        {
            name: "url",
            type: String,
            default: "",
        },
        /**图片展示宽度（请指定单位）*/
        {
            name: "width",
            type: String,
            default: "148px", //不要质疑这里，根据需要可以使用百分比或vw等其它单位
        },
        /**图片展示高度（请指定单位）*/
        {
            name: "height",
            type: String,
            default: "148px",
        },
    ],
    emits: ["update:url"],
    data: function () {
        return {
            data: this.url || "",
        };
    },
    watch: {
        data: function (url) {
            this.$emit("update:url", url);
        },
    },
    computed: {
        // TODO:使用cdn展示图片
        preview: function () {
            return this.data;
        },
    },
    methods: {
        select: function () {
            this.$refs.uploadInput.dispatchEvent(new MouseEvent("click"));
        },
        upload: function () {
            let formdata = new FormData();
            formdata.append("file", this.$refs.uploadInput.files[0]);
            /* uploadImage(formdata).then((res) => {
                this.data = res.data.data[0];
                this.$message({
                    message: "上传成功",
                    type: "success",
                });
            }); */
        },
        remove: function () {
            this.data = "";
        },
    },
    setup(props, { emit }) {
        // props = reactive(props);
        return {
            // classes: computed(() => ({
            //     "storybook-button": true,
            //     "storybook-button--primary": props.primary,
            //     "storybook-button--secondary": !props.primary,
            //     [`storybook-button--${props.size || "medium"}`]: true,
            // })),
            // style: computed(() => ({
            //     backgroundColor: props.backgroundColor,
            // })),
            onClick() {
                emit("click");
            },
        };
    },
};
</script>

<style lang="css">
body {
    color: #f00;
}
</style>
