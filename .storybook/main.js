/*
 * @Author: iRuxu
 * @Date: 2022-07-06 17:47:43
 * @LastEditTime: 2022-07-07 18:14:18
 * @Description:
 */
const path = require("path");
module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
    framework: "@storybook/vue3",
    core: {
        builder: "@storybook/builder-webpack5",
    },
    webpackFinal: async (config, { configType }) => {
        config.resolve = {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
                "@": path.join(__dirname, "../src"),
            },
        };
        config.module.rules.push({
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"],
            include: path.resolve(__dirname, "../"),
        });

        return config;
    },
};
