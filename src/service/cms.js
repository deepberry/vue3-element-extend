import { $cms } from "@deepberry/common/js/https";

export const uploadImageToOss = function (formdata, dir = "upload") {
    return $cms().post(`/upload/image/to/${dir}`, formdata);
};
