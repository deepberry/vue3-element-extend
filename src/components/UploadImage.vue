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
        <input class="u-upload-input" type="file" @change="upload" ref="uploadInput" :accept="accept" />
    </div>
</template>

<script>
import { getCdnLink } from "@deepberry/common/js/utils";
import { uploadImageToOss } from "../service/cms";
import Setting from "../../setting.json";
export default {
    name: "UploadImage",

    props: {
        /** 是否使用默认接口自动上传
         * */
        auto: {
            type: Boolean,
            default: true,
        },
        /** 指定上传到OSS的目录
         * */
        dir: {
            type: String,
            default: "upload",
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

    emits: ["update:url", "update:file"],

    data: function () {
        return {
            data: this.url || "",
            file: null,
            accept: Setting.ImageWhiteList.map((type) => {
                return `image/${type}`;
            }).join(","),
        };
    },
    computed: {
        preview: function () {
            return getCdnLink(this.data);
        },
    },
    methods: {
        select: function () {
            this.$refs.uploadInput.dispatchEvent(new MouseEvent("click"));
        },
        upload: function () {
            if (this.auto) {
                this.uploadAutomatically();
            } else {
                this.emit("update:file", this.$refs.uploadInput.files[0]);
            }
        },
        uploadAutomatically: function () {
            let formdata = new FormData();
            formdata.append("file", this.$refs.uploadInput.files[0]);
            uploadImageToOss(formdata, this.dir)
                .then((res) => {
                    this.data = res.data.data.name;
                    this.$emit("update:url", this.data);
                    this.$message({
                        message: "上传成功",
                        type: "success",
                    });
                })
                .then(() => {
                    this.sendBeacon();
                });
        },
        sendBeacon: function () {
            // TODO: 发送beacon统计上传图片
        },
        remove: function () {
            this.data = "";
            this.$refs.uploadInput.value = "";
        },
    },
};
</script>

<style lang="less">
@import "../assets/css/components/UploadImage.less";
</style>
