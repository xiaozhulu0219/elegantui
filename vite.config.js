import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path"
import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'path'
import externalGlobals from 'rollup-plugin-external-globals'
// https://vitejs.dev/config/
dirname(fileURLToPath(import.meta.url))
console.log('1',import.meta.url);
console.log('2',fileURLToPath(import.meta.url));
console.log('3',dirname(fileURLToPath(import.meta.url)))
console.log('4',__dirname)
export default defineConfig({
  plugins: [vue(),vueJsx(),],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@import "./src/style/var.scss"; @import "./src/style/doc_var.scss";`
      }
    }
  },
  build: {
    rollupOptions: {
      external: ['vue'],
      plugins: [
        externalGlobals({
          vue: 'Vue',
        })
      ]
    }
  }
})
