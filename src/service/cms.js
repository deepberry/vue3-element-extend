/*
 * @Author: iRuxu
 * @Date: 2022-07-08 15:10:27
 * @LastEditTime: 2022-07-13 18:24:03
 * @Description:
 */
import { $cms } from "@deepberry/common/js/https";

export const upload = function (formdata) {
    return $cms().post(`/api/cms/system/upload/via/cms`, formdata);
};
