<template>
    <div class="w-upload-simple">
        <input class="u-upload-input" type="file" @change="add" ref="uploadInput" :accept="accept" />
    </div>
</template>

<script>
export default {
    name: "UploadFileSimple",
    props: ["accept"],
    components: {},
    data: function () {
        return {
            file: null,
        };
    },
    computed: {},
    watch: {},
    methods: {
        add: function (e) {
            this.file = e.target.files[0];
            // this.data = window.URL.createObjectURL(this.file);
            this.$emit("update", this.file);
        },
    },
    created: function () {},
    mounted: function () {},
};
</script>
