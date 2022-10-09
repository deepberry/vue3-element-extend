<!--
 * @Author: iRuxu
 * @Date: 2022-07-06 16:30:34
 * @LastEditTime: 2022-07-13 18:20:01
 * @Description:Test
-->
<template>
    <div>
        <UploadImage :url="url" @update="update" />
    </div>
</template>

<script>
import { upload } from "@/service/cms";
import { getCdnLink } from "@deepberry/common/js/utils";
export default {
    name: "App",
    props: [],
    components: {},
    data: function () {
        return {
            url: "",
        };
    },
    computed: {},
    watch: {},
    methods: {
        update(file) {
            if (file) {
                let formdata = new FormData();
                formdata.append("file", file);
                formdata.append("path", "test");
                formdata.append("rename", "test");
                upload(formdata).then((res) => {
                    // 注意token传递
                    this.url = getCdnLink(res.data.data.name); //返回cdn包装
                    this.$message({
                        message: "上传成功",
                        type: "success",
                    });
                });
            }
        },
    },
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
@import "@/assets/css/app.less";
</style>
