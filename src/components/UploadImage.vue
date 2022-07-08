<template>
    <div class="w-upload-image">
        <div v-if="data" class="u-image" :style="{ width, height }">
            <img class="u-image-pic" :src="preview" />
            <i class="u-image-mask"></i>
            <i class="u-image-delete" title="移除" @click="remove"
                ><img svg-inline src="../assets/img/trash.svg" alt="移除"
            /></i>
        </div>
        <div v-else class="u-upload" @click="select" :style="{ width, height }">
            <i class="u-upload-icon">＋</i>
        </div>
        <input class="u-upload-input" type="file" @change="upload" ref="uploadInput" />
    </div>
</template>

<script>
export default {
    name: "UploadImage",

    props: {
        /** 是否使用默认接口自动上传
         * */
        auto: {
            type: Boolean,
            default: true,
        },
        /** 当前的图片地址
         * @ignore
         * */
        url: {
            type: String,
            default: "",
        },
        /** 图片展示宽度（请指定单位）
         * */
        width: {
            type: String,
            default: "", //不要质疑这里，根据需要可以使用百分比或vw等其它单位
        },
        /** 图片展示高度（请指定单位）
         * */
        height: {
            type: String,
            default: "",
        },
    },

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
};
</script>
