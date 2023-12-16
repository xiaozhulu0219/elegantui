import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path"

// https://vitejs.dev/config/
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
        additionalData:`@import "./src/style/var.scss";`
      }
    }
  },
  publicDir: 'empty',
  build:{
    outDir: 'dist/es',
    lib:{
      entry: path.resolve(__dirname, 'src/bundle.js'),
      name:'ElegantUI',
      fileName:'ElegantUI',
      formats: ['es']
    }
  },
  rollupOptions: {
    external: [
      'vue',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/vue-fontawesome',
      '@popperjs/core',
      
    ]
  }
})
