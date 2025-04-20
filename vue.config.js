const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置打包结果的资源路径
  publicPath: './',
  // 配置打包后的文件名
  outputDir: 'docs',
})
