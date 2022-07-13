/*
 * @Author: iRuxu
 * @Date: 2022-07-08 15:10:27
 * @LastEditTime: 2022-07-13 18:24:03
 * @Description:
 */
import { $cms } from "@deepberry/common/js/https";

export const uploadImageToOss = function (formdata, dir = "upload") {
    return $cms().post(`/api/cms/upload/image/to/${dir}`, formdata);
};
