const withLess = require('@zeit/next-less')
const webpack = require('webpack')
module.exports = withLess({
  webpack(config){
    config.node = {
      fs: "empty"
    }
    config.resolve.alias = {

    }
    return config
  }
})
