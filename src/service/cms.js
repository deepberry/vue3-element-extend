/*
 * @Author: iRuxu
 * @Date: 2022-07-08 15:10:27
 * @LastEditTime: 2022-07-13 18:24:03
 * @Description:
 */
import { $cms } from "@deepberry/common/js/https";
import OSS from "ali-oss";

export function upload(formdata) {
    return $cms().post(`/api/cms/system/upload/via/cms`, formdata);
}

export function uploadToOss(data, dist) {
    return $cms({
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .get(`/api/cms/system/upload/sts-token`)
        .then((res) => {
            return res.data?.data;
        })
        .then((token) => {
            const client = new OSS({
                accessKeyId: token?.AccessKeyId,
                accessKeySecret: token?.AccessKeySecret,
                stsToken: token?.SecurityToken,
                region: token?.region,
                bucket: token?.bucket,
                refreshSTSToken: async () => {
                    // 向您搭建的STS服务获取临时访问凭证。
                    const token = $cms.get(`/api/cms/system/upload/sts-token`);
                    return {
                        accessKeyId: token.AccessKeyId,
                        accessKeySecret: token.AccessKeySecret,
                        stsToken: token.SecurityToken,
                    };
                },
                // 刷新临时访问凭证的时间间隔，单位为毫秒。
                refreshSTSTokenInterval: 3600000,
            });
            return client.put(`upload/${dist}`, data);
        });
}
