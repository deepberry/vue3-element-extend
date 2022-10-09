<template>
    <div class="w-upload-image">
        <div v-if="data" class="u-image" :style="{ width, height }">
            <img class="u-image-pic" :src="data" />
            <i class="u-image-mask"></i>
            <i class="u-image-delete" title="移除" @click="remove"
                ><img svg-inline src="../assets/img/trash.svg" alt="移除"
            /></i>
        </div>
        <div v-else class="u-upload" @click="select" :style="{ width, height }">
            <i class="u-upload-icon">＋</i>
        </div>
        <input class="u-upload-input" type="file" @change="add" ref="uploadInput" :accept="accept" />
    </div>
</template>

<script>
// import { getCdnLink } from "@deepberry/common/js/utils";
import Setting from "../../setting.json";
export default {
    name: "UploadImage",

    emits: ["update"],

    props: {
        //当前的图片地址
        url: {
            type: String,
            default: "",
        },
        //图片展示宽度（请指定单位）
        width: {
            type: String,
            default: "", //不要质疑这里，根据需要可以使用百分比或vw等其它单位
        },
        //图片展示高度（请指定单位）
        height: {
            type: String,
            default: "",
        },
    },

    data: function () {
        return {
            data: this.url || "",
            file: null,
            accept: Setting.ImageWhiteList.join(","),
        };
    },
    watch: {
        url: function (val) {
            this.data = val;
        },
    },
    computed: {
        // preview: function () {
        //     return getCdnLink(this.data);
        // },
    },
    methods: {
        select: function () {
            this.$refs.uploadInput.dispatchEvent(new MouseEvent("click"));
        },
        add: function (e) {
            this.file = e.target.files[0];
            this.data = window.URL.createObjectURL(this.file);
            this.$emit("update", this.file);
        },
        remove: function () {
            this.$refs.uploadInput.value = "";
            this.data = "";
            this.data.startsWith("blob:") && window.URL.revokeObjectURL(this.data);
        },
    },
};
</script>

<style lang="less">
@import "../assets/css/components/UploadImage.less";
</style>
