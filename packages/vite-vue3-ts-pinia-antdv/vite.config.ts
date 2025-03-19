import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import path from "node:path";
// 如果需要支持部分对 esm 支持度不高的浏览器，需要依赖 @vitejs/plugin-legacy
// import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    plugins: [
        vue(),
        vueJsx(),
        Components({
            resolvers: [
                AntDesignVueResolver({
                    importStyle: false, // css in js
                    // resolveIcons: true, // 依赖 @ant-design/icons-vue
                }),
            ],
        }),
        AutoImport({
            imports: [
                // presets
                "vue",
                "vue-router",
            ],
            eslintrc: {
                enabled: true,
                filepath: "./.eslintrc-auto-import.mjs",
            },
            dts: true,
        }),
        // 如果需要支持部分对 esm 支持度不高的浏览器，需要依赖 @vitejs/plugin-legacy
        // legacy({
        //   targets: ['defaults', 'not IE 11'],
        // }),
    ],
});
