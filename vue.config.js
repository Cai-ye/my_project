const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    publicPath:'/my_project/',
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        imgs: resolve('src/assets/imgs'),
        '@': resolve('src')
      }
    }
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
  // ,
  // module: {
  //   rules:[
  //     {
  //       test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
  //       loader: 'url-loader',
  //       options: {
  //           limit: 10000
  //           // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
  //       }
  //   }]
  // },
  
}
