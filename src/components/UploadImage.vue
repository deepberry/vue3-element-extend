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
import { uploadImage } from "@/service/server.js";
export default {
    name: "UploadImage",
    props: [
        // 是否使用默认接口自动上传
        {
            name: "autoUpload",
            type: Boolean,
            default: true,
        },
        // 传入的当前图片地址
        {
            name: "url",
            type: String,
            default: "",
        },
        // 图片展示尺寸
        {
            name: "width",
            type: String,
            default: "148px", //不要质疑这里，根据需要可以使用百分比或vw等其它单位
        },
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
            uploadImage(formdata).then((res) => {
                this.data = res.data.data[0];
                this.$message({
                    message: "上传成功",
                    type: "success",
                });
            });
        },
        remove: function () {
            this.data = "";
        },
    },
};
</script>

<style lang="less">
.w-upload-image {
    .u-image {
        .pr;
        .size(148px);
        img {
            .size(100%);
            .y(bottom);
        }
        .u-image-mask {
            .none;
            .pa;
            .lt(0);
            .size(100%);
            background-color: rgba(0, 0, 0, 0.6);
        }
        .u-image-delete {
            .pa;
            .lt(50%);
            .size(24px);
            .fz(24px);
            padding: 40px;
            transform: translate(-50%, -50%);
            color: #fff;
            .pointer;
            .none;
        }
        &:hover {
            .u-image-mask,
            .u-image-delete {
                .db;
            }
        }
    }
    .u-upload-input {
        .none;
    }
}
</style>
